import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useLangStore = defineStore('lang', () => {
  const activeLang = ref<'id' | 'eng'>((localStorage.getItem('activeLang') as 'id' | 'eng') || 'id');

  const langList = ['id', 'eng'];

  watch(activeLang, (newActiveLang) => {
    localStorage.setItem('activeLang', newActiveLang);
  });

  return { activeLang, langList };
});
