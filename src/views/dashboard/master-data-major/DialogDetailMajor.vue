<template>
  <BaseDialog :title="`Detail Major of Business - ${major}`" width="800">
    <template v-slot:default>
      <v-row>
        <v-col cols="12">
          <ShgAutocomplete
            label="Major of Business"
            v-model="majorOfBusiness"
            :items="majorOfBusinesses"
            class="pa-0 mb-4"
          />
        </v-col>
      </v-row>
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
import { BaseButton, BaseDialog, ShgAutocomplete, ShgTable } from '@siloamhospitals/erp-template-vuetify-components';
import { ref, toRefs } from 'vue';
import { closeDialog } from 'vue3-promise-dialog';

const majorOfBusiness = ref<string>('');

const props = defineProps<{
  major?: string;
}>();
const { major } = toRefs(props);

const majorOfBusinesses = [
  { label: 'Major 1', value: 'Major 1' },
  { label: 'Major 2', value: 'Major 2' },
  { label: 'Major 3', value: 'Major 3' },
];

const columns = [
  {
    label: 'Sub Major of Business',
    field: 'sub_major_of_business',
  },
  {
    label: 'Service',
    field: 'service',
  },
  {
    label: 'Created At',
    field: 'created_at',
  },
  {
    label: 'Created By',
    field: 'created_by',
  },
  {
    label: 'Modified On',
    field: 'modified_on',
  },
  {
    label: 'Modified By',
    field: 'modified_by',
  },
];

const items = [
  {
    sub_major_of_business: 'Sub Major 1',
    service: 'Service 1',
    created_at: '2022-01-01',
    created_by: 'User 1',
    modified_on: '2022-01-01',
    modified_by: 'User 1',
  },
];

const handleCloseDialog = () => {
  closeDialog(null);
};
</script>
