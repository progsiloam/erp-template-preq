<template>
  <h2 class="mb-3">Master Data Vendor</h2>
  <v-row justify="space-between" align="end" class="my-4">
    <v-col cols="6">
      <v-row justify="center" align="center">
        <v-col cols="3">
          <ShgTextField field-name="vendor_name" v-model="vendor_name" label="Vendor Name" class="pa-0" />
        </v-col>
        <v-col cols="3">
          <ShgTextField field-name="vendor_group" v-model="vendor_group" label="Vendor Group" class="pa-0" />
        </v-col>
        <v-col cols="3">
          <ShgTextField field-name="buyer_group" v-model="buyer_group" label="Buyer Group" class="pa-0" />
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
  <ShgTable :columns="columns" :items="items">
    <template v-slot:major_of_business="{ item }">
      <div v-if="item.major_of_business !== ''">
        <ShgButton type="view" size="small" @click="handleTaxonomy(item.party_id)" />
      </div>
    </template>
    <template v-slot:pre_q_detail="{ item }">
      <div v-if="item.pre_q_detail !== ''">
        <ShgButton type="view" size="small" @click="handlePreQDetail(item.vendor_name)" />
      </div>
    </template>
    <template v-slot:action="{ item }">
      <!-- type should history -->
      <ShgButton type="revise" icon-only />
    </template>
  </ShgTable>
</template>

<script setup lang="ts">
import { ShgButton, ShgTable, ShgTextField } from '@siloamhospitals/erp-template-vuetify-components';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { openDialog } from 'vue3-promise-dialog';
import DialogTaxonomy from './DialogTaxonomy.vue';

const vendor_name = ref<string>('');
const vendor_group = ref<string>('');
const buyer_group = ref<string>('');
const router = useRouter();

const columns = [
  { label: 'Party ID', field: 'party_id' },
  { label: 'Vendor Name', field: 'vendor_name' },
  { label: 'Vendor Group', field: 'vendor_group' },
  { label: 'Buyer Group', field: 'buyer_group' },
  { label: 'Major of Business', field: 'major_of_business' },
  { label: 'Modified On', field: 'modified_on' },
  { label: 'Modified By', field: 'modified_by' },
  { label: 'Pre-Q Detail', field: 'pre_q_detail' },
  { label: '', field: 'action' },
];

const items = [
  {
    party_id: 'P0001',
    vendor_name: 'Vendor 1',
    vendor_group: 'Group 1',
    buyer_group: 'Buyer 1',
    major_of_business: 'Major 1',
    modified_on: 'Major 1',
    modified_by: 'Major 1',
    pre_q_detail: 'Detail 1',
  },
];

const handleTaxonomy = async (_id: number) => {
  const data = await openDialog(DialogTaxonomy);
  if (!data) {
    return;
  }
};

const handlePreQDetail = async (vendor_name: number) => {
  router.push({ name: 'vendorPreQDetailOverview', params: { vendor_name: vendor_name } });
};
</script>
