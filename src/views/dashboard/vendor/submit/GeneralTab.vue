<template>
  <ShgCard title="General">
    <v-sheet class="text-body-2 mx-auto mb-4">
      <p class="text-body-1 font-weight-bold">PT. Green Water</p>
      <table>
        <tr>
          <td class="py-2 text-medium-emphasis">Legal Address</td>
          <td class="py-2 px-3">{{ createSubmissionStore.valuesGeneral.legal_address[0] }}</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Operational Address</td>
          <td class="py-2 px-3">{{ createSubmissionStore.valuesGeneral.operational_address[0] }}</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Director / Owner Name</td>
          <td class="py-2 px-3">{{ createSubmissionStore.valuesGeneral.director_name[0] }}</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Contact Person Name</td>
          <td class="py-2 px-3">{{ createSubmissionStore.valuesGeneral.contact_person_name[0] }}</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Phone Number</td>
          <td class="py-2 px-3">{{ createSubmissionStore.valuesGeneral.phone_number[0] }}</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Email Address</td>
          <td class="py-2 px-3">{{ createSubmissionStore.valuesGeneral.email_address[0] }}</td>
        </tr>
      </table>
    </v-sheet>

    <ShgForm :columns="1" ref="formGeneral">
      <ShgDatePicker
        v-model="createSubmissionStore.valuesGeneral.date_incorporation[0]"
        label="Date of Incorporation"
        :required="true"
      />
      <ShgDatePicker
        v-model="createSubmissionStore.valuesGeneral.last_change_organization[0]"
        label="Last Change of Organization"
        :required="true"
      />
      <ShgAutocomplete
        v-model="createSubmissionStore.valuesGeneral.years_of_establishment[0]"
        :required="true"
        :items="
          ['Before 1900', '1900-1950', '1951-2000', '2001-2010', '2011-2020', 'After 2020'].map((data) => ({
            label: data,
            value: data,
          }))
        "
        label="Years of Establishment"
      />
      <!-- <ShgFileUpload
        :required="true"
        label="Code of Conduct"
        v-model="createSubmissionStore.valuesGeneral.code_of_conduct[0]"
      /> -->
      <v-col>
        <h3 class="">Legal Documents</h3>
      </v-col>
      <!-- <ShgFileUploadWithExpiry
        v-model="createSubmissionStore.valuesGeneral.product_list"
        :required="true"
        label="Product List"
        name="Product List"
      /> -->
      <!-- <ShgFileUpload
        :required="true"
        label="ISO & Certificate Tambahan"
        v-model="createSubmissionStore.valuesGeneral.iso[0]"
      /> -->
      <!-- <ShgFileUpload
        :required="true"
        label="Project Reference"
        v-model="createSubmissionStore.valuesGeneral.project_reference[0]"
      /> -->
      <!-- <ShgFileUpload
        :required="true"
        label="Rekening Koran"
        v-model="createSubmissionStore.valuesGeneral.checking_account[0]"
      /> -->
      <!-- <ShgFileUploadWithExpiry
        v-model="createSubmissionStore.valuesGeneral.financial_statement"
        :required="true"
        label="Financial Statement"
        name="Financial Statement"
      /> -->
    </ShgForm>

    <template v-slot:actions>
      <ShgButton type="submit" @click="createSubmissionStore.onSubmitGeneral"></ShgButton>
    </template>
  </ShgCard>
</template>

<script setup lang="ts">
import { ShgAutocomplete, ShgButton, ShgCard, ShgDatePicker, ShgForm } from 'erp-template-vuetify-components';
import { storeToRefs } from 'pinia';
import { useCreateSubmissionStore } from './useCreateSubmission';

const createSubmissionStore = useCreateSubmissionStore();
const { formGeneral } = storeToRefs(createSubmissionStore);
</script>

<style scoped></style>
