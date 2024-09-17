<template>
  <div>
    <h1>data</h1>
    <pre>
	{{ values }}
</pre
    >
    <ShgForm ref="form" :columns="1">
      <!-- <PreQFileUpload label="Upload" v-model="values.user_answer[0]" :required="true" /> -->
      <PreQFileUploadWithExpiry label="Documen IUP" field-name="Documen IUP" :required="true" v-model="values.user_answer" />
    </ShgForm>
    <ShgButton type="save" @click="onSubmit">Submit</ShgButton>
  </div>
</template>

<script setup lang="ts">
import PreQFileUploadWithExpiry from '@/components/PreQFileUploadWithExpiry.vue';
import ShgUseForm from '@/hooks';
import { ShgButton, ShgForm } from '@siloamhospitals/erp-template-vuetify-components';

const { form, handleSubmit, values } = ShgUseForm<{ user_answer: string[] }>({
  initialValues: {
    user_answer: ['2024-09-02', '66e8f0ad909acf50f570f35c'],
  },
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
