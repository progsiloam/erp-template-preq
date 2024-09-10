<template>
  <ShgCard :title="name">
    <ShgForm :columns="1" ref="form">
      <ShgTextField v-model="values.name" :label="`name`" :required="true" />
    </ShgForm>

    <template v-slot:actions>
      <ShgButton type="submit" @click="onSubmit"></ShgButton>
    </template>
  </ShgCard>
</template>

<script lang="ts" setup>
import ShgUseForm from '@/hooks';
import { ShgButton, ShgCard, ShgForm, ShgTextField } from 'erp-template-vuetify-components';
import { onMounted, onUnmounted } from 'vue';

const { form, handleSubmit, values } = ShgUseForm<{ name: string }>({});

const onSubmit = handleSubmit((value) => {
  console.log(value);
});

const props = defineProps<{ name: string }>();

onMounted(() => {
  console.log('mounted ' + props.name);
});

onUnmounted(() => {
  console.log('unMounted ' + props.name);
});
</script>
