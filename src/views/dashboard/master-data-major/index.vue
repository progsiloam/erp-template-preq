<template>
  <h2 class="my-3">Major Of Business</h2>
  <v-row class="mt-4 mb-2">
    <v-col cols="12">
      <ShgButton type="export-excel" />
    </v-col>
  </v-row>
  <v-divider class="mb-4" />
  <ShgTable :columns="columns" :items="items">
    <template v-slot:action="{ item }">
      <ShgButton type="view" icon-only @click="handleDetailMajor(item.major_of_business)" />
    </template>
  </ShgTable>
</template>

<script setup lang="ts">
import { ShgButton, ShgTable } from '@siloamhospitals/erp-template-vuetify-components';
import { openDialog } from 'vue3-promise-dialog';
import DialogDetailMajor from './DialogDetailMajor.vue';

const columns = [
  { label: 'Major of Business', field: 'major_of_business' },
  { label: 'Created At', field: 'created_at' },
  { label: 'Created By', field: 'created_by' },
  { label: 'Latest Sync Date', field: 'latest_sync_date' },
  { label: 'Last Modified By', field: 'last_modified_by' },
  { label: '', field: 'action' },
];

const items = [
  {
    major_of_business: 'Major 1',
    created_at: '2022-01-01',
    created_by: 'User 1',
    latest_sync_date: '2022-01-01',
    last_modified_by: 'User 1',
  },
];

const handleDetailMajor = async (major: string) => {
  const data = await openDialog(DialogDetailMajor, {
    major,
  });
  if (!data) {
    return;
  }
};
</script>
