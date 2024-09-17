import type { ShgFormRef } from '@siloamhospitals/erp-template-vuetify-components';
import { ref, toRaw } from 'vue';

type IUseForm<T> = {
  initialValues?: T;
};
const ShgUseForm = <T = unknown>({ initialValues }: IUseForm<T>) => {
  const form = ref<ShgFormRef>();

  const values = ref<T>(initialValues ?? ({} as T));

  const handleSubmit = (onSuccess: (values: T) => void, onError?: (error: Record<string, string>) => void) => {
    return async () => {
      if (!form.value) {
        throw new Error('Form is undefined');
      }
      const isValid = await form.value.validate();
      if (isValid) {
        onSuccess(toRaw(values.value) as T);
        return;
      }
      onError?.(form.value.form.errors as unknown as Record<string, string>);
    };
  };

  return {
    form,
    values,
    handleSubmit,
  };
};

export default ShgUseForm;
