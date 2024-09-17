import ShgUseForm from '@/hooks';
import { useAuthStore } from '@/pinia/auth.store';

type IFormSelectVendor = {
  vendor_name: string;
  selected_major: string[];
};

export const useSelectVendor = () => {
  const authStore = useAuthStore();

  const { form, handleSubmit, values } = ShgUseForm<IFormSelectVendor>({
    initialValues: {
      selected_major: [],
      vendor_name: authStore.activeUser,
    },
  });

  const onSubmit = handleSubmit(
    (value) => {
      console.log('OK');

      console.log(value);
    },
    (e) => {
      console.log('Error');

      console.log(e);
    },
  );

  return { form, values, onSubmit };
};
