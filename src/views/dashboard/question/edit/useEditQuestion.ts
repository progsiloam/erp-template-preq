import ShgUseForm from '@/hooks';
import { defineStore } from 'pinia';
import type { UpdateQuestionDTO } from './type';

const useEditQuestion = defineStore('editQuestion', () => {
  const { values, handleSubmit, form } = ShgUseForm<UpdateQuestionDTO>({
    initialValues: {
      _id: '',
      question_text: {
        id: '',
        eng: '',
      },
      input_type: 'Short answer',
      options: [] as unknown as UpdateQuestionDTO['options'],
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    const ok = confirm('Are you sure you want to submit?');
    if (!ok) {
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/api/question/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Question updated successfully  🎉');
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  });

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

  const addOptions = () => {
    values.value.options.push({
      option_text: {
        id: '',
        eng: '',
      },
    });
  };

  return {
    values,
    form,
    onSubmit,
    deleteKey,
    shouldRenderAddOptions,
    addOptions,
  };
});

export { useEditQuestion };
