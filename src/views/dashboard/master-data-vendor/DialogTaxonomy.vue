<template>
  <BaseDialog title="Major of Business" width="600">
    <template v-slot:default>
      <ShgTable :columns="columns" :items="items"></ShgTable>
    </template>
    <template v-slot:actions>
      <div class="d-flex ga-3">
        <BaseButton @click="handleCloseDialog" color="primary" text="Okay" />
      </div>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { BaseButton, BaseDialog, ShgTable } from '@siloamhospitals/erp-template-vuetify-components';
import { closeDialog } from 'vue3-promise-dialog';

const columns = [
  {
    label: 'Major of Business',
    field: 'major_of_business',
  },
  {
    label: 'Service',
    field: 'service',
  },
  {
    label: 'Item Level',
    field: 'item_level',
  },
];

const items = [
  {
    major_of_business: 'Major 1',
    service: 'Service 1',
    item_level: 'Item 1',
  },
  {
    major_of_business: 'Major 2',
    service: 'Service 2',
    item_level: 'Item 2',
  },
  {
    major_of_business: 'Major 3',
    service: 'Service 3',
    item_level: 'Item 3',
  },
];

const handleCloseDialog = () => {
  closeDialog(null);
};
</script>
