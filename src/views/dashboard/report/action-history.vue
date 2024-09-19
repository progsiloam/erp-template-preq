<template>
  <BreadCrumbs :breadCrumbItems="breadCrumbItems" />
  <h2>Report Action History Pre-Qualification</h2>
  <v-row justify="space-between" align="end" no-gutters class="mb-6 mt-8">
    <v-col cols="6">
      <ShgDatePicker v-model="date" control-size="small" label="Select Date" class="pa-0" />
    </v-col>
    <v-col cols="6">
      <div class="text-end">
        <ShgButton type="export-excel" />
      </div>
    </v-col>
  </v-row>
  <ShgTable :columns="columns" :items="items">
    <template v-slot:status="{ item }">
      <span :class="`bg-${colorBadge(item.status)} pa-1 rounded`">{{ item.status }}</span>
    </template>
    <template v-slot:action="{ item }">
      <div class="d-flex ga-3">
        <ShgButton type="view" icon-only />
        <!-- this shoudl history -->
        <ShgButton type="revise" icon-only @click="handleHistoryReport(item._id)" />
      </div>
    </template>
  </ShgTable>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/components/layouts/BreadCrumbs.vue';
import { ShgButton, ShgDatePicker, ShgTable } from '@siloamhospitals/erp-template-vuetify-components';
import { ref } from 'vue';
import { openDialog } from 'vue3-promise-dialog';
import DialogHistoryReport from './DialogHistoryReport.vue';

const date = ref<string>('');

const columns = [
  { label: 'Doc ID', field: 'doc_id' },
  { label: 'Vendor Name', field: 'vendor_name' },
  { label: 'PreQ Status', field: 'pre_q_status' },
  { label: 'Approved On', field: 'approved_on' },
  { label: 'Created Date', field: 'created_date' },
  { label: 'Created By', field: 'created_by' },
  { label: 'Reviewed By', field: 'reviewed_by' },
  { label: 'Reviewed Date', field: 'reviewed_date' },
  { label: '', field: 'action' },
];

const items = [
  {
    _id: 'PQ001',
    doc_id: 'DOC-001',
    vendor_name: 'PT. Vendor 1',
    pre_q_status: 'Awaiting Evaluation',
    approved_on: '2021-09-01',
    created_date: '2021-09-01',
    created_by: 'Admin',
    reviewed_by: 'Admin',
    reviewed_date: '2021-09-01',
  },
  {
    _id: 'PQ002',
    doc_id: 'DOC-002',
    vendor_name: 'PT. Vendor 2',
    pre_q_status: 'Awaiting Evaluation',
    approved_on: '2021-09-01',
    created_date: '2021-09-01',
    created_by: 'Admin',
    reviewed_by: 'Admin',
    reviewed_date: '2021-09-01',
  },
];

const colorBadge = (status: string) => {
  switch (status) {
    case 'Awaiting Evaluation':
      return 'blue-lighten-5';
    case 'Under Evaluation':
      return 'success';
    default:
      return 'danger';
  }
};

const breadCrumbItems = [
  { title: 'Report', href: '/report' },
  { title: 'Report Action History Pre-Qualification', href: '' },
];

const handleHistoryReport = async (_id: number) => {
  const data = await openDialog(DialogHistoryReport, { _id });
  if (!data) return;
};
</script>
