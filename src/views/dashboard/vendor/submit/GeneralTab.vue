<template>
  <ShgCard title="General">
    <v-sheet class="text-body-2 mx-auto mb-4">
      <p class="text-body-1 font-weight-bold">PT. Green Water</p>
      <table>
        <tr>
          <td class="py-2 text-medium-emphasis">Legal Address</td>
          <td class="py-2 px-3">{{ values.legal_address[0] }}</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Operational Address</td>
          <td class="py-2 px-3">{{ values.operational_address[0] }}</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Director / Owner Name</td>
          <td class="py-2 px-3">{{ values.director_name[0] }}</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Contact Person Name</td>
          <td class="py-2 px-3">{{ values.contact_person_name[0] }}</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Phone Number</td>
          <td class="py-2 px-3">{{ values.phone_number[0] }}</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Email Address</td>
          <td class="py-2 px-3">{{ values.email_address[0] }}</td>
        </tr>
      </table>
    </v-sheet>

    <ShgForm :columns="1" ref="form">
      <ShgDatePicker v-model="values.date_incorporation[0]" label="Date of Incorporation" :required="true" />
      <ShgDatePicker v-model="values.last_change_organization[0]" label="Last Change of Organization" :required="true" />
      <ShgAutocomplete
        v-model="values.years_of_establishment[0]"
        :required="true"
        :items="
          ['Before 1900', '1900-1950', '1951-2000', '2001-2010', '2011-2020', 'After 2020'].map((data) => ({
            label: data,
            value: data,
          }))
        "
        label="Years of Establishment"
      />
      <PreQFileUpload label="Code of Conduct" v-model="values.code_of_conduct[0]" :required="true" />

      <v-col>
        <h3 class="">Legal Documents</h3>
      </v-col>
      <ShgFileUploadWithExpiry v-model="values.product_list" :required="true" label="Product List" />
      <PreQFileUpload :required="true" label="ISO & Certificate Tambahan" v-model="values.iso[0]" />
      <PreQFileUpload :required="true" label="Project Reference" v-model="values.project_reference[0]" />
      <PreQFileUpload :required="true" label="Rekening Koran" v-model="values.checking_account[0]" />
      <ShgFileUploadWithExpiry
        v-model="values.financial_statement"
        :required="true"
        label="Financial Statement"
        name="Financial Statement"
      />
    </ShgForm>

    <template v-slot:actions>
      <ShgButton type="submit" @click="onSubmit"></ShgButton>
    </template>
  </ShgCard>
</template>

<script setup lang="ts">
import PreQFileUpload from '@/components/PreQFileUpload.vue';
import ShgFileUploadWithExpiry from '@/components/PreQFileUploadWithExpiry.vue';
import { useGeneralTab } from '@/composables';
import {
  ShgAutocomplete,
  ShgButton,
  ShgCard,
  ShgDatePicker,
  ShgForm,
} from '@siloamhospitals/erp-template-vuetify-components';
const { form, onSubmit, values } = useGeneralTab();
</script>

<style scoped></style>
