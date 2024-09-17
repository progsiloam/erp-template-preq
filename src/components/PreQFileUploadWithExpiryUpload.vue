<template>
  <BaseDialog title="Upload File" width="600">
    <template v-slot:default>
      <ShgForm :columns="2" ref="form">
        <ShgDatePicker v-model="values.date" label="Date" :required="true" />
        <ShgFileUpload v-model="values.file" label="File" :required="true" />
      </ShgForm>
    </template>
    <template v-slot:actions>
      <BaseButton color="secondary" @click="handleCloseDialog">Cancel</BaseButton>
      <BaseButton color="primary" @click="onSubmit">Upload</BaseButton>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { usePreQFileUpload } from '@/composables';
import ShgUseForm from '@/hooks';
import {
  BaseButton,
  BaseDialog,
  ShgDatePicker,
  ShgFileUpload,
  ShgForm,
} from '@siloamhospitals/erp-template-vuetify-components';
import { closeDialog } from 'vue3-promise-dialog';

type FormDTO = {
  file: File;
  date: string;
};

const { form, handleSubmit, values } = ShgUseForm<FormDTO>({});

const { uploadFileWithExpired } = usePreQFileUpload();

const onSubmit = handleSubmit(async (value) => {
  console.log(value);

  const result = await uploadFileWithExpired(value.file, value.date);

  closeDialog({
    id: result.data!.id,
    date: value.date,
    fileName: value.file.name,
  });
});

const handleCloseDialog = () => {
  closeDialog(null);
};
</script>
