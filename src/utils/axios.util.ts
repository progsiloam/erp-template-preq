import { useAuthStore } from '@/stores/auth.store';
import type { RefreshTokenRequest } from '@/types';
import { getClientIpAddress } from '@siloamhospitals/erp-template-vuetify-components';
import originalAxios from 'axios';
import moment from 'moment';
import { logout } from './';

const axios = originalAxios.create({
  timeout: import.meta.env.VITE_AXIOS_TIMEOUT_MINUTES * 60 * 1000,
});

let ipAddress = '';
axios.interceptors.request.use(async (config) => {
  config.withCredentials = true;

  if (!ipAddress) {
    ipAddress = await getClientIpAddress();
  }

  config.headers['X-CLIENT-IP'] = ipAddress;
  config.headers['X-CLIENT-TIMESTAMP'] = moment().format('YYYY-MM-DD HH:mm:ss.SSS');

  if (import.meta.env.VITE_ENV === 'dev' || import.meta.env.VITE_ENV === 'development') {
    const { currentUser } = useAuthStore();
    if (currentUser) {
      config.headers['X-CURRENT-USER'] = JSON.stringify(currentUser);
    }
  }

  return config;
});

// For Retry API Version
const LIMIT_RETRY_API_VERSION = 3;
let isRetryApiVersion = false;

// For Refresh Token
let isRefreshingToken = false;
let failedQueue: any[] = [];

const processQueue = (error: any) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (originalAxios.isAxiosError(error)) {
      if (error?.config?.url?.toLowerCase().includes('/api/auth/logout')) {
        return Promise.reject(error);
      }

      const originalRequest = error.config;
      if (originalRequest) {
        // #region Handle Error No Response (means cannot connect to API)
        if (!error.response) {
          if (originalRequest.url) {
            if (originalRequest.url.includes('/api/version')) {
              return Promise.reject(new Error(`API Version can't be reached at this moment. Please try again in a moment.`));
            }

            if (isRetryApiVersion) {
              const isFunctionalApi = originalRequest.url.toLowerCase().includes(import.meta.env.VITE_API_URL);

              let url = '';
              if (isFunctionalApi) {
                url = `${import.meta.env.VITE_API_URL}/api/version`;
              }

              if (url) {
                let retryCount: number;
                for (retryCount = 0; retryCount < LIMIT_RETRY_API_VERSION; retryCount++) {
                  try {
                    await axios.get(url);
                    break;
                  } catch {
                    continue;
                  }
                }

                return Promise.reject(
                  new Error(
                    `API Server can't be reached at this moment. Please try again in a moment. (${retryCount}/${LIMIT_RETRY_API_VERSION} Failed)`,
                  ),
                );
              }

              return Promise.reject(new Error(`API Server can't be reached at this moment. Please try again in a moment.`));
            }

            isRetryApiVersion = true;
            return axios.request(originalRequest);
          }

          return Promise.reject(new Error(`API Server can't be reached at this moment. Please try again in a moment.`));
        }
        // #endregion Handle Error No Response (means cannot connect to API)

        // #region Handle Error from Cloudfront
        const isErrorCloudfront =
          typeof error.response.data === 'string' &&
          error.response.data?.toLowerCase().includes('<html>') &&
          error.response.data?.toLowerCase().includes('cloudfront');

        if (isErrorCloudfront && error.response.status >= 400) {
          // TODO: Open Dialog to show Cloudfront Error
          return Promise.reject(error);
        }
        // #endregion Handle Error from Cloudfront

        // #region Handle Refresh Token
        if (error.response.status === 401 && !originalRequest._retry) {
          const appStore = useAuthStore();
          // If error 401 and token is empty, it means refresh token already expired. do logout
          if (!appStore.currentUser?.username) {
            await logout();
            return Promise.reject(new Error('Your login session has expired'));
          }

          if (isRefreshingToken) {
            // If I'm refreshing the token I send request to a queue
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            })
              .then(() => {
                return axios(originalRequest);
              })
              .catch((err) => err);
          }

          originalRequest._retry = true; // mark request a retry
          isRefreshingToken = true; // set the refreshing var to true

          // If none of the above, refresh the token and process the queue
          return new Promise((resolve, reject) => {
            const url = `${import.meta.env.VITE_API_FUNCTIONAL_URL}/api/auth/refresh-token`;
            const data: RefreshTokenRequest = {
              username: appStore.currentUser?.username ?? '',
            };

            originalAxios
              .post(url, data, {
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: true,
              })
              .then(async (response) => {
                if (response.status === 200) {
                  processQueue(null);
                  resolve(axios(originalRequest));
                } else {
                  await logout();
                  return Promise.reject(new Error('Your login session has expired'));
                }
              })
              .catch(async (err: any) => {
                processQueue(err);
                reject(err);

                await logout();
                return Promise.reject(new Error('Your login session has expired'));
              })
              .finally(() => {
                isRefreshingToken = false;
              });
          });
        }
        // #endregion Handle Refresh Token

        return Promise.reject(error);
      }

      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  },
);

export { axios };
