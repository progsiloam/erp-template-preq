import type { ShgFormRef } from 'erp-template-vuetify-components';
import { ref } from 'vue';

type IUseForm<T> = {
  initialValues?: T;
};
const ShgUseForm = <T>({ initialValues }: IUseForm<T>) => {
  const form = ref<ShgFormRef>();

  const values = ref<T>(initialValues ?? ({} as T));

  type IHandleSubmitSuccess = (values: T) => void;

  const handleSubmit = (onSuccess: IHandleSubmitSuccess, onError?: () => void) => {
    return async () => {
      const isValid = await form.value?.validate();
      if (isValid) {
        onSuccess(JSON.parse(JSON.stringify(values.value)) as T);
        return;
      }
      onError?.();
    };
  };


  return {
    form,
    values,
    handleSubmit,
  };
};

export default ShgUseForm;
