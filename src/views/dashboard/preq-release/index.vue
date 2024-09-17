<template>
  <h2 class="mb-3">Master Data Vendor</h2>
  <v-container fluid>
    <v-row justify="space-between" align="center">
      <v-col cols="6">
        <v-row justify="center" align="center">
          <v-col cols="3">
            <ShgTextField field-name="vendor_name" v-model="vendor_name" label="Vendor Name" class="" />
          </v-col>
          <v-col cols="3">
            <ShgTextField field-name="vendor_group" v-model="vendor_group" label="Vendor Group" />
          </v-col>
          <v-col cols="3">
            <ShgTextField field-name="buyer_group" v-model="buyer_group" label="Buyer Group" />
          </v-col>
          <v-col cols="3">
            <ShgButton type="search" class="mt-6" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <div class="text-end">
          <ShgButton type="export-excel" />
        </div>
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
import { ShgButton, ShgTable, ShgTextField } from '@siloamhospitals/erp-template-vuetify-components';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { openDialog } from 'vue3-promise-dialog';
import DialogRealeaseMajor from './DialogRealeaseMajor.vue';

const router = useRouter();
const vendor_name = ref<string>('');
const vendor_group = ref<string>('');
const buyer_group = ref<string>('');

const handleReleaseMajor = async (_id: number) => {
  const data = await openDialog(DialogRealeaseMajor);
  if (!data) {
    return;
  }
};

const columns = [
  { label: 'Party ID', field: 'party_id' },
  { label: 'Vendor Name', field: 'vendor_name' },
  { label: 'Vendor Group', field: 'vendor_group' },
  { label: 'Buyer Group', field: 'buyer_group' },
  { label: 'Major of Business', field: 'major_of_business' },
  { label: 'Modified On', field: 'modified_on' },
  { label: 'Modified By', field: 'modified_by' },
  { label: 'Pre-Q Details', field: 'pre_q_detail' },
  { label: '', field: 'action' },
];

const items = ref([
  {
    _id: 1,
    party_id: 'P0001',
    vendor_name: 'Gilang',
    vendor_group: 'V0001',
    buyer_group: 'BG0001',
    major_of_business: 'Contruction',
    modified_on: '10-20-3004',
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
