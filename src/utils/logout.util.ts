import router from '@/router';
import { useAuthStore } from '@/stores/auth.store';
import axios from 'axios';

export const logout = async () => {
  try {
    const authStore = useAuthStore();

    const url = `${import.meta.env.VITE_API_FUNCTIONAL_URL}/api/auth/logout`;
    await axios.post(url, null, {
      withCredentials: true,
    });

    // clear store and local storage
    authStore.reset();
    window.localStorage.clear();

    await router.push('/login').catch(() => {});
  } catch {
    // do nothing when failed logout
  }
};
