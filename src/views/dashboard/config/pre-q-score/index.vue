<template>
  <h2 class="mb-3">Pre-Qualification Final Score Configuration</h2>
  <v-row align="end" no-gutters class="mb-3">
    <v-col cols="auto">
      <div style="width: 250px">
        <ShgAutocomplete
          v-model="version"
          :items="
            [1, 2, 3, 4].map((option) => ({
              label: `${option}`,
              value: `${option}`,
            }))
          "
          label="version"
          class="pa-0"
        />
      </div>
    </v-col>
    <v-col cols="auto" class="ml-auto">
      <div class="mr-3">
        <BaseButton color="secondary">Set to Active</BaseButton>
      </div>
    </v-col>
    <v-col cols="auto">
      <div class="">
        <BaseButton color="primary">Setup New Version</BaseButton>
      </div>
    </v-col>
  </v-row>
  <ShgTable :columns="columns" :items="items">
    <template v-slot:generalSection="{ item }">
      {{ `${item.generalSection}%` }}
    </template>
    <template v-slot:categorySection="{ item }">
      {{ `${item.categorySection}%` }}
    </template>
    <template v-slot:action="{ item }">
      <ShgButton
        type="revise"
        icon-only
        @click="
          handleUpdateConfig({
            _id: item._id,
            categorySection: item.categorySection,
            generalSection: item.generalSection,
            version: item.version,
            name: item.majorOfBusiness,
          })
        "
      />
    </template>
  </ShgTable>
</template>

<script setup lang="ts">
import { BaseButton, ShgAutocomplete, ShgButton, ShgTable } from '@siloamhospitals/erp-template-vuetify-components';
import { ref } from 'vue';
import { openDialog } from 'vue3-promise-dialog';
import DialogUpdatePreQScore from './DialogUpdatePreQScore.vue';
// import DialogRealeaseMajor from './DialogRealeaseMajor.vue';

const version = ref(1);

type IHandleUpdateConfig = {
  _id: number;
  generalSection: number;
  categorySection: number;
  version: number;
  name: string;
};

const handleUpdateConfig = async ({ _id, generalSection, categorySection, version, name }: IHandleUpdateConfig) => {
  const data = (await openDialog(DialogUpdatePreQScore, {
    id: _id,
    generalSection,
    categorySection,
    version: version,
    name: name,
  })) as IHandleUpdateConfig | null;
  if (!data) {
    return;
  }
  console.log('data', data);
};

const columns = [
  { label: 'Major of Business', field: 'majorOfBusiness' },
  { label: 'General Section', field: 'generalSection' },
  { label: 'Category Section', field: 'categorySection' },
  { label: '', field: 'action' },
];

const items = ref([
  { _id: 1, majorOfBusiness: 'Construction', generalSection: 11, categorySection: 89, version: 1 },
  { _id: 2, majorOfBusiness: 'Manufacturing', generalSection: 18, categorySection: 82, version: 1 },
  { _id: 3, majorOfBusiness: 'Technology', generalSection: 59, categorySection: 41, version: 1 },
  { _id: 4, majorOfBusiness: 'Healthcare', generalSection: 38, categorySection: 62, version: 1 },
  { _id: 5, majorOfBusiness: 'Retail', generalSection: 15, categorySection: 85, version: 1 },
  { _id: 6, majorOfBusiness: 'Construction', generalSection: 88, categorySection: 12, version: 1 },
  { _id: 7, majorOfBusiness: 'Manufacturing', generalSection: 65, categorySection: 35, version: 1 },
  { _id: 8, majorOfBusiness: 'Technology', generalSection: 16, categorySection: 84, version: 1 },
  { _id: 9, majorOfBusiness: 'Healthcare', generalSection: 66, categorySection: 34, version: 1 },
  { _id: 10, majorOfBusiness: 'Retail', generalSection: 17, categorySection: 83, version: 1 },
  { _id: 11, majorOfBusiness: 'Construction', generalSection: 81, categorySection: 19, version: 1 },
  { _id: 12, majorOfBusiness: 'Manufacturing', generalSection: 49, categorySection: 51, version: 1 },
  { _id: 13, majorOfBusiness: 'Technology', generalSection: 27, categorySection: 73, version: 1 },
  { _id: 14, majorOfBusiness: 'Healthcare', generalSection: 72, categorySection: 28, version: 1 },
  { _id: 15, majorOfBusiness: 'Retail', generalSection: 33, categorySection: 67, version: 1 },
  { _id: 16, majorOfBusiness: 'Construction', generalSection: 61, categorySection: 39, version: 1 },
  { _id: 17, majorOfBusiness: 'Manufacturing', generalSection: 82, categorySection: 18, version: 1 },
  { _id: 18, majorOfBusiness: 'Technology', generalSection: 21, categorySection: 79, version: 1 },
  { _id: 19, majorOfBusiness: 'Healthcare', generalSection: 71, categorySection: 29, version: 1 },
  { _id: 20, majorOfBusiness: 'Retail', generalSection: 59, categorySection: 41, version: 1 },
  { _id: 21, majorOfBusiness: 'Construction', generalSection: 25, categorySection: 75, version: 1 },
  { _id: 22, majorOfBusiness: 'Manufacturing', generalSection: 78, categorySection: 22, version: 1 },
  { _id: 23, majorOfBusiness: 'Technology', generalSection: 22, categorySection: 78, version: 1 },
  { _id: 24, majorOfBusiness: 'Healthcare', generalSection: 19, categorySection: 81, version: 1 },
  { _id: 25, majorOfBusiness: 'Retail', generalSection: 44, categorySection: 56, version: 1 },
  { _id: 26, majorOfBusiness: 'Construction', generalSection: 68, categorySection: 32, version: 1 },
  { _id: 27, majorOfBusiness: 'Manufacturing', generalSection: 82, categorySection: 18, version: 1 },
  { _id: 28, majorOfBusiness: 'Technology', generalSection: 61, categorySection: 39, version: 1 },
  { _id: 29, majorOfBusiness: 'Healthcare', generalSection: 74, categorySection: 26, version: 1 },
  { _id: 30, majorOfBusiness: 'Retail', generalSection: 84, categorySection: 16, version: 1 },
]);
</script>
