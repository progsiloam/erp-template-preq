<template>
  <ShgLayout :navigation-items="navigationItems">
    <template v-slot:contents="{ activeItemValue }">
      <div v-if="'select-vendor' === activeItemValue">
        <SelectVendorTab />
      </div>

      <div v-if="'general' === activeItemValue">
        <GeneralTab />
      </div>

      <ShgCard v-if="navigationItems[2].value === activeItemValue" :title="navigationItems[2].label">
        <ShgForm :columns="1" ref="userForm">
          <ShgTextField v-model="userData.username" label="Username" :required="true" />
          <ShgTextField v-model="userData.email" label="Email" :required="true" :rules="['email']" />
          <ShgPasswordField v-model="userData.password" label="Password" :required="true" :rules="['password']" />
          <ShgPasswordField
            v-model="userData.confirmPassword"
            label="Confirm Password"
            :required="true"
            :rules="['confirmed:@Password']"
          />
        </ShgForm>

        <template v-slot:actions>
          <BaseButton @click="register">Register</BaseButton>
        </template>
      </ShgCard>
    </template>
  </ShgLayout>
</template>

<script setup lang="ts">
import {
  BaseButton,
  ShgCard,
  ShgForm,
  ShgLayout,
  ShgPasswordField,
  ShgTextField,
  type LayoutNavigationItem,
  type ShgFormRef,
} from 'erp-template-vuetify-components';
import { ref } from 'vue';
import GeneralTab from './GeneralTab.vue';
import SelectVendorTab from './SelectVendorTab.vue';

const navigationItems = ref<LayoutNavigationItem[]>([
  { label: 'Select Vendor', value: 'select-vendor' },
  { label: 'General', value: 'general' },
  { label: 'User', value: 'user' },
]);

const { generalForm, generalData, submit } = useGeneralForm();
const { userForm, userData, register } = useUserForm();

function useGeneralForm() {
  const generalForm = ref<ShgFormRef>();
  const generalData = ref({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  const submit = async () => {
    const isValid = await generalForm.value?.validate();
    if (isValid) {
      alert('Success Submit');
    }
  };

  return { generalForm, generalData, submit };
}

function useUserForm() {
  const userForm = ref<ShgFormRef>();
  const userData = ref({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const register = async () => {
    const isValid = await userForm.value?.validate();
    if (isValid) {
      alert('Success Register');
    }
  };

  return { userForm, userData, register };
}
</script>
