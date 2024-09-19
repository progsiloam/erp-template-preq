<template>
  <BaseDialog title="Update Detail" width="600">
    <template v-slot:default>
      <ShgForm :columns="1" ref="form">
        <ShgAutocomplete
          v-model="values.version"
          label="Version"
          :required="true"
          :items="[values.version].map((version) => ({ label: `${version}`, value: `${version}` }))"
          disabled
        />
        <ShgTextField v-model="values.name" label="Major of Business" disabled />
        <v-col cols="12" class="py-0">
          <v-row>
            <v-col>
              <ShgNumeric
                label="General Section"
                v-model="values.generalSection"
                class="px-0"
                required
                :allow-minus="false"
              />
            </v-col>
            <v-col>
              <ShgNumeric
                label="Detail Section"
                v-model="values.categorySection"
                class="px-0"
                required
                :allow-minus="false"
              />
            </v-col>
          </v-row>
        </v-col>
      </ShgForm>
      <p>{{ id }}</p>
      <p>{{ generalSection }}</p>
      <p>{{ categorySection }}</p>
    </template>

    <template v-slot:actions>
      <BaseButton color="secondary" @click="closeDialog(null)">Cancel</BaseButton>
      <BaseButton color="primary" @click="onSubmit">Save</BaseButton>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import ShgUseForm from '@/hooks';
import {
  BaseButton,
  BaseDialog,
  ShgAutocomplete,
  ShgForm,
  ShgNumeric,
  ShgTextField,
} from '@siloamhospitals/erp-template-vuetify-components';
import { closeDialog } from 'vue3-promise-dialog';

type IProps = {
  id: number;
  name: string;
  generalSection: number;
  categorySection: number;
  version: number;
};

const props = defineProps<Partial<IProps>>();

const { form, handleSubmit, values } = ShgUseForm<IProps>({
  initialValues: {
    categorySection: props.categorySection!,
    generalSection: props.generalSection!,
    id: props.id!,
    version: props.version!,
    name: props.name!,
  },
});

const onSubmit = handleSubmit(
  (value) => {
    closeDialog(value);
  },
  (e) => {
    console.log('error', e);
  },
);
</script>

<style scoped></style>
