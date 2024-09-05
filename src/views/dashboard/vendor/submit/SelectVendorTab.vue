<template>
  <ShgCard title="Select Vendor">
    <ShgForm :columns="1" ref="generalForm">
      <ShgAutocomplete
        v-model="createSubmissionStore.valuesSelectVendor.vendor_name"
        label="Select vendor"
        textPlaceholder="Please select"
        :items="authStore.userList"
        disabled
      />
      <ShgAutocomplete
        v-model="createSubmissionStore.valuesSelectVendor.vendor_name"
        label="Select vendor"
        textPlaceholder="Please select"
        :items="authStore.userList"
        disabled
      />
    </ShgForm>

    <template v-slot:actions>
      <ShgButton type="submit" @click="createSubmissionStore.onSubmitSelectVendor"></ShgButton>
    </template>
  </ShgCard>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/pinia/auto.store';
import { ShgAutocomplete, ShgCard } from 'erp-template-vuetify-components';
import { useCreateSubmissionStore } from './useCreateSubmission';

const createSubmissionStore = useCreateSubmissionStore();
const authStore = useAuthStore();
</script>

<style scoped></style>
