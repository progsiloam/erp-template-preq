<template>
  <ShgCard title="General">
    <v-sheet class="text-body-2 mx-auto mb-4">
      <p>form</p>
      <pre>
				{{ createSubmissionStore.valuesGeneral }}
			</pre
      >
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
        :items="['Before 1900', '1900-1950', '1951-2000', '2001-2010', '2011-2020', 'After 2020']"
        label="Years of Establishment"
      />
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
