<template>
  <ShgCard title="Select Vendor">
    <ShgForm :columns="1" ref="generalForm">
      <ShgAutocomplete
        v-model="createSubmissionStore.valuesSelectVendor.vendor_name"
        label="Select vendor"
        textPlaceholder="Please select"
        :items="authStore.userList.map((user) => ({ label: user, value: user }))"
        disabled
      />
      <ShgAutocompleteMulti
        v-model="createSubmissionStore.valuesSelectVendor.selected_major"
        label="Select major"
        textPlaceholder="Please select"
        :items="listMajor.map((major) => ({ label: major, value: major }))"
      />
    </ShgForm>

    <template v-slot:actions>
      <ShgButton type="submit" @click="createSubmissionStore.onSubmitSelectVendor"></ShgButton>
    </template>
  </ShgCard>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/pinia/auth.store';
import { ShgAutocomplete, ShgAutocompleteMulti, ShgCard } from 'erp-template-vuetify-components';
import { ref } from 'vue';
import { useCreateSubmissionStore } from './useCreateSubmission';

const listMajor = ref<string[]>(['Construction', 'ICT', 'Customer Service']);

const createSubmissionStore = useCreateSubmissionStore();
const authStore = useAuthStore();
</script>

<style scoped></style>
