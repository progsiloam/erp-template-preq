<template>
  <h2>Pre-Qualification List</h2>
  <v-container fluid>
    <v-row justify="start">
      <v-col cols="5">
        <div class="d-flex align-center">
          <ShgDatePicker v-model="datePeriod" label="Date Period From" />
          <ShgDatePicker v-model="datePeriod" label="Date Period To" />
        </div>
      </v-col>
    </v-row>
    <v-row justify="space-between" align="center">
      <v-col cols="3">
        <ShgAutocomplete v-model="selectedItem" :items="itemsSelect" label="Pick Date" />
      </v-col>
      <v-col cols="3">
        <ShgTextField label="" placeholder="Click to Search" field-name="search" v-model="search" />
      </v-col>
    </v-row>
  </v-container>
  <ShgTable :columns="columns" :items="items">
    <template v-slot:status="{ item }">
      <span :class="`bg-${colorBadge(item.status)} pa-1 rounded`">{{ item.status }}</span>
    </template>
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
      <ShgButton type="revise" icon-only @click="handleReleaseMajor(item._id)" />
    </template>
  </ShgTable>
</template>

<script setup lang="ts">
import { ShgAutocomplete, ShgButton, ShgTable, ShgTextField } from '@siloamhospitals/erp-template-vuetify-components';
import { ref } from 'vue';

const search = ref<string>('');
const selectedItem = ref<string>('');

const handleReleaseMajor = async (_id: number) => {};

const itemsSelect = [
  {
    label: 'John Doe',
    value: 'John Doe',
  },
];

const columns = [
  { label: 'Doc ID', field: 'doc_id' },
  { label: 'Party Number', field: 'party_number' },
  { label: 'Vendor Name', field: 'vendor_name' },
  { label: 'Major of Business', field: 'major_of_business' },
  { label: 'Current Approver', field: 'current_approver' },
  { label: 'Status', field: 'status' },
  { label: 'Created By', field: 'created_by' },
  { label: 'Submited Date', field: 'submited_date' },
  { label: 'Completed Date', field: 'completed_date' },
  { label: '', field: 'action' },
];

const items = ref([
  {
    doc_id: 1,
    party_number: 'P0001',
    vendor_name: 'Gilang',
    major_of_business: 'Contruction',
    current_approver: 'BG0001',
    status: '10-20-3004',
    modified_by: 'Gilang',
    pre_q_detail: '10-20-3004',
  },
]);

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

const datePeriod = ref<Date>(new Date());
</script>
