<template>
  <BaseDialog title="Update Detail" width="600">
    <template v-slot:default>
      <ShgForm :columns="1" ref="form">
        <ShgDatePicker v-model="values.date" label="Date" :field-name="`date`" :required="true" />
      </ShgForm>
    </template>

    <template v-slot:actions>
      <BaseButton color="secondary" @click="handleCloseDialog">Cancel</BaseButton>
      <BaseButton color="primary" @click="onSubmit">Update</BaseButton>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { usePreQFileUpload } from '@/composables';
import ShgUseForm from '@/hooks';
import { BaseButton, BaseDialog, ShgDatePicker, ShgForm } from '@siloamhospitals/erp-template-vuetify-components';
import { closeDialog } from 'vue3-promise-dialog';

const { updateExpiredFile } = usePreQFileUpload();

const props = defineProps<{
  fileId?: string;
  date?: string;
}>();

type FormDTO = {
  date: string;
};

const { form, handleSubmit, values } = ShgUseForm<FormDTO>({
  initialValues: {
    date: props.date!,
  },
});

const onSubmit = handleSubmit(async (value) => {
  await updateExpiredFile(props.fileId!, value.date);

  closeDialog({
    date: value.date,
  });
});

const handleCloseDialog = () => {
  closeDialog(null);
};
</script>

<style scoped>
.error-message {
  color: #b34c5f;
  font-size: 12px;
  margin-top: 6px;
  margin-left: 16px;
}
</style>
