<template>
  <h3 class="mb-5">Pre-Qualification Validity</h3>
  <ShgTable :columns="columns" :items="items">
    <template v-slot:action="{ item }">
      <BaseButtonIcon color="warning" size="small" icon="mdi-pen" class="mx-1" @click="handleEdit(item._id)" />
      <BaseButtonIcon color="primary" size="small" icon="mdi-history" class="mx-1" @click="handleHistory(item._id)" />
    </template>
  </ShgTable>
</template>

<script setup lang="ts">
import { BaseButtonIcon, ShgTable } from '@siloamhospitals/erp-template-vuetify-components';
import { openDialog } from 'vue3-promise-dialog';
import DialogEditMajorOfBusiness from './DialogEditMajorOfBusiness.vue';
import DialogHistoryMajorOfBussiness from './DialogHistoryMajorOfBussiness.vue';

const columns = [
  {
    label: 'Major of Bussiness',
    field: 'major_of_business',
  },
  {
    label: 'Validity Periods (Days)',
    field: 'validity_periods',
  },
  {
    label: 'Action',
    field: 'action',
  },
];

const items = [
  {
    _id: 1,
    major_of_business: 'Major of Bussiness 1',
    validity_periods: '30',
  },
  {
    _id: 2,
    major_of_business: 'Major of Bussiness 2',
    validity_periods: '60',
  },
  {
    _id: 3,
    major_of_business: 'Major of Bussiness 3',
    validity_periods: '90',
  },
];

const handleHistory = async (_id: number) => {
  const data = await openDialog(DialogHistoryMajorOfBussiness);
  if (!data) return;
};

const handleEdit = async (_id: number) => {
  const data = await openDialog(DialogEditMajorOfBusiness);
  if (!data) return;
};
</script>
