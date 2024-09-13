import { axios } from '@/utils/axios.util';
import { Result, type ApiResponseType } from '@siloamhospitals/erp-template-vuetify-components';
import { isAxiosError } from 'axios';

export function useAxios() {
  const get = async <T = null>(url: string, params?: any): Promise<Result<T>> => {
    try {
      const response = await axios.get<ApiResponseType<T>>(url, {
        params: params,
      });
      /* {
					code: number,
					message: string,
					total: number
					data: T
			 } */

      // buat FILE
      // akan ada selalu fileBase64
      /* {
					code: number,
					message: string,
					total: number
					data: T extends object { fileBase64: string }
			 } */

      if (response.status === 200 && response.data) {
        if (response.data.code === 200) {
          return Result.success<T>(response.data.data);
        } else {
          return Result.fail(response.data.message);
        }
      }

      return Result.fail(`${response.status} - ${response.statusText}`);
    } catch (err: any) {
      if (isAxiosError(err)) {
        const message = err.response?.data?.message ?? err.message;
        return Result.fail(message, err.response?.data?.data);
      } else {
        return Result.fail(err.message);
      }
    }
  };

  const post = async <T = null>(url: string, data?: any): Promise<Result<T | null>> => {
    try {
      const response = await axios.post<ApiResponseType<T>>(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        if (response.data.code === 200) {
          return Result.success<T>(response.data.data);
        } else {
          return Result.fail(response.data.message);
        }
      }

      return Result.fail(`${response.status} - ${response.statusText}`);
    } catch (err: any) {
      if (isAxiosError(err)) {
        const message = err.response?.data?.message ?? err.message;
        return Result.fail(message, err.response?.data?.data);
      } else {
        return Result.fail(err.message);
      }
    }
  };

  const postForm = async <T = null>(url: string, data?: any): Promise<Result<T | null>> => {
    try {
      const response = await axios.postForm<ApiResponseType<T>>(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        if (response.data.code === 200) {
          return Result.success<T>(response.data.data);
        } else {
          return Result.fail(response.data.message);
        }
      }

      return Result.fail(`${response.status} - ${response.statusText}`);
    } catch (err: any) {
      if (isAxiosError(err)) {
        const message = err.response?.data?.message ?? err.message;
        return Result.fail(message, err.response?.data?.data);
      } else {
        return Result.fail(err.message);
      }
    }
  };

  return { get, post, postForm };
}
