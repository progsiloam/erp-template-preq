import ShgUseForm from '@/hooks';
import { removeNullValues } from '@/views/removeNullValue';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CreateQuestionnaireDTO } from './new.type';

export const useCreateQuestionnaire = defineStore('useCreateQuestionnairem', () => {
  const activeSection = ref<string>('');

  const addSections = () => {
    values.value.sections.push({ name: '', questions: [] });
  };

  const addQuestion = (questions: CreateQuestionnaireDTO['sections'][number]['questions']) => {
    const match = activeSection.value.match(/\[(\d+)\]/);

    if (match) {
      const index = parseInt(match[1], 10);
      const oldQuestion = values.value.sections[index].questions;

      values.value.sections[index].questions = [...oldQuestion, ...questions];
    }
  };

  const deleteKeySection = (index: number) => {
    values.value.sections.splice(index, 1);
  };

  const deleteKeyQuestion = (index: { sections: number; question: number }) => {
    values.value.sections[index.sections].questions.splice(index.question, 1);
  };

  const { values, handleSubmit, form } = ShgUseForm<CreateQuestionnaireDTO>({
    initialValues: {
      sections: [],
      sub_major: '',
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    const val = JSON.parse(JSON.stringify(values)) as CreateQuestionnaireDTO;

    try {
      const res = await fetch('http://localhost:3000/api/question-questionnaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(removeNullValues(val)),
      });

      if (res.ok) {
        alert('success');
      } else {
        throw new Error('error');
      }
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  });

  return {
    onSubmit,
    deleteKeySection,
    deleteKeyQuestion,
    addQuestion,
    addSections,
    values,
    form,
    activeSection,
  };
});
