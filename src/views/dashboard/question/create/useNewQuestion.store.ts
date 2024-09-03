import ShgUseForm from '@/hooks';
import { defineStore } from 'pinia';
import type { CreateQuestionDTO } from './type';


export const useNewQuestion = defineStore('useNewQuestion.store', () => {
  const addOptions = () => {
    values.value.options.push({
      option_text: {
        id: '',
        eng: '',
      },
    });
  };

  const deleteKey = (index: number) => {
    values.value.options.splice(index, 1);
  };

  const shouldRenderAddOptions = (): boolean => {
    const inputType = values.value.input_type;

    return (
      inputType === 'Dropdown' ||
      inputType === 'Checkboxes' ||
      inputType === 'Multiple choice' ||
      inputType === 'Multiple select'
    );
  };

  const { values, handleSubmit, form } = ShgUseForm<CreateQuestionDTO>({
    initialValues: {
      question_text: {
        id: '',
        eng: '',
      },
      input_type: 'Short answer',
      options: [] as unknown as CreateQuestionDTO['options'],
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await fetch('http://localhost:3001/api/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Question created successfully  🎉');
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  });

  return {
    onSubmit,
    deleteKey,
    form,
    addOptions,
    values,
    shouldRenderAddOptions,
  };
});
