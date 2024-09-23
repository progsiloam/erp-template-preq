<template>
  <ShgCard title="General">
    <v-sheet class="text-body-2 mx-auto mb-4">
      <p class="text-body-1 font-weight-bold">PT. Green Water</p>
      <table>
        <tr>
          <td class="py-2 text-medium-emphasis">Legal Address</td>
          <td class="py-2 px-3">Jl. Raya Ciputat Parung No. 1, Ciputat, Tangerang Selatan, Banten</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Operational Address</td>
          <td class="py-2 px-3">Jl. Raya Ciputat Parung No. 1, Ciputat, Tangerang Selatan, Banten</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Director / Owner Name</td>
          <td class="py-2 px-3">John Doe</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Contact Person Name</td>
          <td class="py-2 px-3">Jane Doe</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Phone Number</td>
          <td class="py-2 px-3">081234567890</td>
        </tr>
        <tr>
          <td class="py-2 text-medium-emphasis">Email Address</td>
          <td class="py-2 px-3">fafan@gmail.com</td>
        </tr>
      </table>
    </v-sheet>

    <ShgForm :columns="1" ref="form">
      <ShgDatePicker
        v-model="values.date_incorporation.user_answer[0]"
        :label="values.date_incorporation.question_text[langStore.activeLang]"
        :required="values.date_incorporation.is_required"
        field-name="date_incorporation"
      />
      <ShgDatePicker
        v-model="values.last_change_organization.user_answer[0]"
        :label="values.last_change_organization.question_text[langStore.activeLang]"
        :required="values.last_change_organization.is_required"
        field-name="last_change_organization"
      />
      <ShgAutocomplete
        v-model="values.years_of_establishment.user_answer[0]"
        :required="values.years_of_establishment.is_required"
        :items="
          values.years_of_establishment.options.map((option) => ({
            label: option.option_text[langStore.activeLang],
            value: option.option_text[langStore.activeLang],
          }))
        "
        :label="values.years_of_establishment.question_text[langStore.activeLang]"
        field-name="years_of_establishment"
      />
      <PreQFileUpload
        :label="values.code_of_conduct.question_text[langStore.activeLang]"
        v-model="values.code_of_conduct.user_answer[0]"
        :required="values.code_of_conduct.is_required"
        field-name="code_of_conduct"
      />

      <v-col class="pb-0">
        <h3 class="pb-1">Legal Documents</h3>
      </v-col>
      <ShgFileUploadWithExpiry
        v-model="values.vrf_form.user_answer"
        :required="values.vrf_form.is_required"
        :label="values.vrf_form.question_text[langStore.activeLang]"
        field-name="vrf_form"
      />
      <PreQFileUpload
        :label="values.surat_etika.question_text[langStore.activeLang]"
        v-model="values.surat_etika.user_answer[0]"
        :required="values.surat_etika.is_required"
        field-name="surat_etika"
      />
      <PreQFileUpload
        :label="values.npwp.question_text[langStore.activeLang]"
        v-model="values.npwp.user_answer[0]"
        :required="values.npwp.is_required"
        field-name="npwp"
      />
      <PreQFileUpload
        :label="values.nib.question_text[langStore.activeLang]"
        v-model="values.nib.user_answer[0]"
        :required="values.nib.is_required"
        field-name="nib"
      />
      <PreQFileUpload
        :label="values.akta_pendirian.question_text[langStore.activeLang]"
        v-model="values.akta_pendirian.user_answer[0]"
        :required="values.akta_pendirian.is_required"
        field-name="akta_pendirian"
      />
      <PreQFileUpload
        :label="values.sppkp.question_text[langStore.activeLang]"
        v-model="values.sppkp.user_answer[0]"
        :required="values.sppkp.is_required"
        field-name="sppkp"
      />

      <v-col class="pb-0">
        <h3 class="pb-1">Complimentary Documents</h3>
        <h5 class="">CV Employee / Experience Employee</h5>
      </v-col>
      <ShgFileUploadWithExpiry
        v-model="values.product_list.user_answer"
        :required="values.product_list.is_required"
        :label="values.product_list.question_text[langStore.activeLang]"
        field-name="product_list"
      />
      <PreQFileUpload
        :label="values.iso.question_text[langStore.activeLang]"
        v-model="values.iso.user_answer[0]"
        :required="values.iso.is_required"
        field-name="iso"
      />
      <PreQFileUpload
        :label="values.project_reference.question_text[langStore.activeLang]"
        v-model="values.project_reference.user_answer[0]"
        :required="values.project_reference.is_required"
        field-name="project_reference"
      />
      <PreQFileUpload
        :label="values.checking_account.question_text[langStore.activeLang]"
        v-model="values.checking_account.user_answer[0]"
        :required="values.checking_account.is_required"
        field-name="checking_account"
      />

      <ShgFileUploadWithExpiry
        v-model="values.financial_statement.user_answer"
        :required="values.financial_statement.is_required"
        :label="values.financial_statement.question_text[langStore.activeLang]"
        field-name="financial_statement"
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
import { useLangStore } from '@/pinia/lang.store';
import {
  ShgAutocomplete,
  ShgButton,
  ShgCard,
  ShgDatePicker,
  ShgForm,
} from '@siloamhospitals/erp-template-vuetify-components';
import { toRaw, watch } from 'vue';
const { form, onSubmit, values } = useGeneralTab();
const langStore = useLangStore();

watch(
  () => langStore.activeLang,
  (newLang, oldLang) => {
    let newValues = toRaw(values.value);

    for (const key in newValues) {
      const typedKey = key as keyof typeof newValues;

      const isQuestionHaveOptions = newValues[typedKey].options && newValues[typedKey].options.length > 0;
      if (!isQuestionHaveOptions) continue;

      const alreadyAnswered = newValues[typedKey].user_answer.length > 0;
      if (!alreadyAnswered) continue;

      newValues[typedKey].user_answer = newValues[typedKey].user_answer.map((ans) => {
        const option = newValues[typedKey].options.find((opt) => opt.option_text[oldLang] === ans);
        return option ? option.option_text[newLang] : ans;
      });
    }

    values.value = newValues;
  },
);
</script>

<style scoped></style>
