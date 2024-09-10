import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useLangStore = defineStore('lang', () => {
  const langList = ['id', 'eng'] as const;
  const activeLang = ref<(typeof langList)[number]>((localStorage.getItem('activeLang') as 'id' | 'eng') || 'id');

  watch(activeLang, (newActiveLang) => {
    localStorage.setItem('activeLang', newActiveLang ?? 'id');
  });

  return { activeLang, langList };
});
