<template>
  <div>
    <h1>This is an test page</h1>

    <ShgForm ref="form" :columns="1">
      <ShgFileUpload label="Upload" v-model="uploadData" :upload-file="uploadFile" />
    </ShgForm>
  </div>
</template>

<script setup lang="ts">
import { useFile } from '@/composables';
import ShgUseForm from '@/hooks';
import { ShgFileUpload, ShgForm, type UploadedFileData } from '@siloamhospitals/erp-template-vuetify-components';
import { ref } from 'vue';

const { form, handleSubmit, values } = ShgUseForm<{ user_answer: string[] }>({
  initialValues: {
    user_answer: ['66e2a9cde002a1274a128966'],
  },
});

const uploadData = ref<UploadedFileData | null>({
  id: '66e2a9cde002a1274a128966',
  file_name: 'WhatsApp Image 2024-09-12 at 11.02.52 (1).jpeg',
});

const { uploadFile, getFile } = useFile();

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
