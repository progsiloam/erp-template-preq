import ShgUseForm from '@/hooks';
import { submission } from '@/views/dashboard/vendor/submit/data';
import type { SubmissionAttributes } from '@/views/dashboard/vendor/submit/IData';

export const useGeneralTab = () => {
  const { form, handleSubmit, values } = ShgUseForm<SubmissionAttributes['general_info']>({
    initialValues: submission.general_info,
  });

  const onSubmit = handleSubmit(
    (value) => {
      console.log('ok');

      console.log(value);
    },
    (e) => {
      console.log('error');
      console.log(e);
    },
  );

  return {
    form,
    values,
    onSubmit,
  };
};
