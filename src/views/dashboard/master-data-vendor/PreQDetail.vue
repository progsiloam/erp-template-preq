<template>
  <BreadCrumbs :breadCrumbItems="breadCrumbItems" />
  <h2 class="my-5">Details Pre-Qualification</h2>
  <ShgTable :columns="columns" :items="items">
    <template v-slot:major_of_business="{ item }">
      <div v-if="item.major_of_business !== ''">
        <v-btn size="small">view</v-btn>
      </div>
    </template>
    <template v-slot:pre_q_detail="{ item }">
      <div v-if="item.pre_q_detail !== ''">
        <v-btn size="small">view</v-btn>
      </div>
    </template>
    <template v-slot:action="{ item }">
      <ShgButton type="view" icon-only @click="handleReleaseMajor(item.vendor_name)" />
    </template>
  </ShgTable>
</template>

<script setup lang="ts">
import { ShgButton, ShgTable } from '@siloamhospitals/erp-template-vuetify-components';
import { useRouter } from 'vue-router';
const router = useRouter();

const columns = [
  { label: 'Vendor Name', field: 'vendor_name' },
  { label: 'Major of Business', field: 'major_of_business' },
  { label: 'Pre-Q Status', field: 'pre_q_status' },
  { label: 'Created By', field: 'created_by' },
  { label: 'Valid Until', field: 'valid_until' },
  { label: 'Score Document Collection', field: 'score_document_collection' },
  { label: 'Score Document Review', field: 'score_document_review' },
  { label: '', field: 'action' },
];

const items = [
  {
    vendor_name: 'Vendor 1',
    major_of_business: 'Major 1',
    pre_q_status: 'Status 1',
    created_by: 'User 1',
    valid_until: '2022-12-31',
    score_document_collection: 'Score 1',
    score_document_review: 'Score 1',
  },
];

const breadCrumbItems = [
  { title: 'Master Data Vendor', href: '/vendor' },
  { title: 'Detail Pre Qualification', href: '' },
];

const handleReleaseMajor = async (vendor_name: number) => {
  router.push({ name: 'vendorPreQDetailPreQView', params: { vendor_name } });
};
</script>
