<template>
  <ShgFileUpload
    :label="label"
    :field-name="fieldName"
    v-model="uploadData"
    :get-file="getFile"
    :upload-file="handleUpload"
    :delete-file="handleDelete"
    :required="required"
  />
</template>

<script setup lang="ts">
import { useFile } from '@/composables';
import { ShgFileUpload, type UploadedFileData } from '@siloamhospitals/erp-template-vuetify-components';
import { onMounted, ref, watch } from 'vue';

const uploadData = ref<File | UploadedFileData | null>(null);

defineProps<{ label: string; fieldName?: string; required: boolean }>();

const model = defineModel<string>();

const setFile = async (val?: string) => {
  if (!val) {
    return;
  }
  const file = await getFileData(val);

  uploadData.value = {
    file_name: file.data!.filename,
    id: file.data!.id,
  };
};

const handleUpload = async (file: File) => {
  const uploadedFile = await uploadFile(file);

  model.value = `${uploadedFile.data!.id}`;

  return uploadedFile;
};

const handleDelete = async (id: string | number) => {
  const result = await deleteFile(id);

  model.value = undefined;
  return result;
};

onMounted(() => {
  setFile(model.value);
});

watch(model, async (val) => {
  setFile(val);
});

const { uploadFile, getFile, getFileData, deleteFile } = useFile();
</script>

<style scoped></style>
