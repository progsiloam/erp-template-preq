<template>
  <ShgFileUpload label="Upload" v-model="uploadData" :get-file="getFile" :upload-file="uploadFile" />
</template>

<script setup lang="ts">
import { useFile } from '@/composables';
import type { UploadedFileData } from '@siloamhospitals/erp-template-vuetify-components';
import { onMounted, ref } from 'vue';

const uploadData = ref<UploadedFileData | null>();

const props = defineProps<{ fileId?: string }>();

onMounted(async () => {
  if (!props.fileId) {
    return;
  }

  const file = await getFileData(props.fileId);

  uploadData.value = {
    file_name: file.data.filename,
    id: file.data.id,
  };
});

const { uploadFile, getFile, getFileData } = useFile();
</script>

<style scoped></style>
