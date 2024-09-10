import ShgUseForm from '@/hooks';
import { useAuthStore } from '@/pinia/auto.store';
import { defineStore } from 'pinia';

type IFormSelectVendor = {
  vendor_name: string;
  selected_major: string[];
};

type IFormGeneral = {
  legal_address: string[];
  operational_address: string[];
  director_name: string[];
  contact_person_name: string[];
  phone_number: string[];
  email_address: string[];
  date_incorporation: string[];
  last_change_organization: string[];
  years_of_establishment: string[];
  code_of_conduct: string[];
  vrf_form: string[];
  surat_etika: string[];
  npwp: string[];
  nib: string[];
  akta_pendirian: string[];
  sppkp: string[];
  iujk: string[];
  sbu: string[];
  product_list: string[];
  iso: string[];
  project_reference: string[];
  checking_account: string[];
  financial_statement: string[];
  paid_up_capital: string[];
  location_check: string[];
  location_verification: string[];
};

export const useCreateSubmissionStore = defineStore('useCreateSubmissionStore', () => {
  const authStore = useAuthStore();
  const {
    form: formSelectVendor,
    handleSubmit: handleSubmitSelectVendor,
    values: valuesSelectVendor,
  } = ShgUseForm<IFormSelectVendor>({
    initialValues: {
      selected_major: [],
      vendor_name: authStore.activeUser,
    },
  });
  const {
    form: formGeneral,
    handleSubmit: handleSubmitGeneral,
    values: valuesGeneral,
  } = ShgUseForm<IFormGeneral>({
    initialValues: {
      legal_address: ['Java, Special Indonesia Jakarta'],
      operational_address: ['Tangerang, Banten, Indonesia Java'],
      director_name: ['John Doe'],
      contact_person_name: ['Jane Doe'],
      phone_number: ['012345678910'],
      email_address: ['greenwater@mail.co'],
      date_incorporation: [],
      last_change_organization: [],
      years_of_establishment: [],
      code_of_conduct: [],
      vrf_form: [],
      surat_etika: [],
      npwp: [],
      nib: [],
      akta_pendirian: [],
      sppkp: [],
      iujk: [],
      sbu: [],
      product_list: [],
      iso: [],
      project_reference: [],
      checking_account: [],
      financial_statement: [],
      paid_up_capital: [],
      location_check: [],
      location_verification: [],
    },
  });

  const onSubmitSelectVendor = handleSubmitSelectVendor((value) => {
    console.log(value);
  });

  const onSubmitGeneral = handleSubmitGeneral((value) => {
    console.log(value);
  });

  return {
    formSelectVendor,
    valuesSelectVendor,
    formGeneral,
    valuesGeneral,
    onSubmitGeneral,
    onSubmitSelectVendor,
  };
});
