import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const userList = ref<string[]>(['evaluator-farhan', 'evaluator-rina', 'evaluator-zydan', 'vendor-bca', 'vendor-bni', 'vendor-mandiri', 'admin']);
  const activeUser = ref<string>(localStorage.getItem('activeUser') || 'evaluator-farhan');

  watch(activeUser, (newActiveUser) => {
    localStorage.setItem('activeUser', newActiveUser);
  });

  return {
    userList,
    activeUser,
  };
});
