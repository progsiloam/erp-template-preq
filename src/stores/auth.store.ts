import { Roles } from '@/constants';
import type { CurrentUserInformationData } from '@/types';
import { destroyCurrentUser, getCurrentUser } from '@/utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('authStore', () => {
  const currentUser = ref<CurrentUserInformationData | null>(getCurrentUser());

  const reset = () => {
    try {
      currentUser.value = {
        username: '',
        role_id: Roles.None,
        email: '',
      };

      destroyCurrentUser();
    } catch {
      // do nothing when failed
    }
  };

  return { currentUser, reset };
});
