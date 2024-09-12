<template>
  <h2 class="mb-3">Pre-Qualification List</h2>
  <v-container fluid>
    <v-row justify="start">
      <v-col cols="12">
        <div class="text-center bg-secondary pa-2">
          <p class="text-grey-darken-2">
            Time remaining for the current time period <span class="font-weight-bold">240 Days</span>
          </p>
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
    <template v-slot:action="{ item }">
      <ShgButton type="revise" override-color="primary" icon-only @click="handleDocumentScoring(item.doc_id)" />
    </template>
  </ShgTable>
</template>

<script setup lang="ts">
import { ShgAutocomplete, ShgButton, ShgTable, ShgTextField } from '@siloamhospitals/erp-template-vuetify-components';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedItem = ref<string>('');
const search = ref<string>('');

const handleDocumentScoring = (doc_id: number) => {
  router.push({ name: 'documentPreScoringHMDetail', params: { doc_id: doc_id.toString() } });
};

const columns = [
  { label: 'Doc ID', field: 'doc_id' },
  { label: 'Major Of Business', field: 'major_of_bussiness' },
  { label: 'Current Approver', field: 'current_approver' },
  { label: 'Status', field: 'status' },
  { label: 'Created By', field: 'created_by' },
  { label: 'Submit Date', field: 'submit_date' },
  { label: 'Complete Date', field: 'complete_date' },
  { label: '', field: 'action' },
];

const itemsSelect = [
  {
    label: 'John Doe',
    value: 'John Doe',
  },
];

const items = ref([
  {
    doc_id: 1,
    major_of_business: 'John Doe',
    current_approver: 'Gilang',
    status: 'Awaiting Evaluation',
    created_by: 'Gilang',
    submit_date: 'Gilang',
    complete_date: '10-20-3004',
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
