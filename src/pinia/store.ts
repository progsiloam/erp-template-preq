import { InputQuestionAttributes } from '@/@types';
import { FetchingPost } from '@/services/Fetching';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGeneralStore = defineStore('general', () => {
  const selectedValueTypeQuestions = ref<string | null>(null);
  const loading = ref<boolean>(false);
  const success = ref<boolean>(false);
  const errors = ref<boolean>(false);
  const message = ref<string | null>('');
  const data = ref<[]>([]);
  const userId = ref<string | null>(null);

  function getUserId(value: string) {
    userId.value = value;
  }

  function setSelectedValueTypeQuestions(value: string) {
    selectedValueTypeQuestions.value = value;
    localStorage.setItem('selectedValueTypeQuestions', value || '');
  }

  async function questionCreate(data: InputQuestionAttributes[]) {
    try {
      loading.value = true;
      await FetchingPost('http://localhost:3000/api/question', data);
      loading.value = false;
      success.value = true;
      errors.value = false;
    } catch (error) {
      loading.value = false;
      success.value = false;
      errors.value = true;
    }
  }

  return {
    loading,
    message,
    success,
    errors,
    data,
    userId,
    getUserId,
    selectedValueTypeQuestions,
    setSelectedValueTypeQuestions,
    questionCreate,
  };
});
