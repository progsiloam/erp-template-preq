<template>
  <ShgCard title="Select Vendor">
    <ShgForm :columns="1" ref="form">
      <ShgAutocomplete
        v-model="values.vendor_name"
        label="Select vendor"
        textPlaceholder="Please select"
        :items="authStore.userList.map((user) => ({ label: user, value: user }))"
        disabled
      />
      <ShgAutocompleteMulti
        v-model="values.selected_major"
        label="Select major"
        textPlaceholder="Please select"
        :items="listMajor.map((major) => ({ label: major, value: major }))"
        :required="true"
      />
    </ShgForm>

    <template v-slot:actions>
      <ShgButton type="submit" @click="onSubmit"></ShgButton>
    </template>
  </ShgCard>
</template>

<script setup lang="ts">
import { useSelectVendor } from '@/composables';
import { useAuthStore } from '@/pinia/auth.store';
import {
  ShgAutocomplete,
  ShgAutocompleteMulti,
  ShgButton,
  ShgCard,
  ShgForm,
} from '@siloamhospitals/erp-template-vuetify-components';
import { ref } from 'vue';

const listMajor = ref<string[]>(['Construction', 'ICT', 'Customer Service']);

const { form, onSubmit, values } = useSelectVendor();

const authStore = useAuthStore();
</script>

<style scoped></style>
