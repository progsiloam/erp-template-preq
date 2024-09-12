<template>
  <div>
    <h1>This is an test page</h1>

    <ShgForm ref="form" :columns="1"> </ShgForm>
  </div>
</template>

<script setup lang="ts">
import ShgUseForm from '@/hooks';
import { ShgForm } from 'erp-template-vuetify-components';

const { form, handleSubmit, values } = ShgUseForm<{ user_answer: string[] }>({});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
