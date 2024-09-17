<template>
  <div class="mb-3">
    <v-row justify="space-between" align="center">
      <v-col cols="6">
        <h2>Create Pre-Q Document</h2>
      </v-col>
      <v-col cols="6">
        <div class="d-flex justify-end">
          <div class="d-flex ga-2 me-3">
            <ShgButton type="reject" />
            <ShgButton type="revise" />
            <ShgButton type="approve" />
          </div>
          <v-divider vertical class="me-4"></v-divider>
          <v-btn-toggle v-model="langStore.activeLang" variant="outlined" divided density="compact">
            <v-btn value="eng">eng</v-btn>
            <v-btn value="id">id</v-btn>
          </v-btn-toggle>
          <BaseButtonIcon icon="mdi-alpha-x" color="secondary" class="ms-3" @click="() => console.log('back')" />
        </div>
      </v-col>
    </v-row>
  </div>
  <ShgLayout :navigation-items="navigationItems">
    <template v-slot:contents="{ activeItemValue }">
      <div v-if="'Select Vendor' === activeItemValue">
        <SelectVendorTab />
      </div>

      <div v-if="'General' === activeItemValue">
        <GeneralTab />
      </div>

      <div v-for="item in [...navigationItems].splice(2)" :key="item.value">
        <div v-if="item.value == `${activeItemValue}`">
          <MajorTab :questionnaire="JSON.parse(JSON.stringify(draft!.questionnaires[item.value as number]))" />
        </div>
      </div>
    </template>
  </ShgLayout>
</template>

<script setup lang="ts">
import { useLangStore } from '@/pinia/lang.store';
import { BaseButtonIcon, ShgLayout, type LayoutNavigationItem } from '@siloamhospitals/erp-template-vuetify-components';
import { onMounted, ref, toRaw } from 'vue';
import { submission } from './data';
import GeneralTab from './GeneralTab.vue';
import type { SubmissionAttributes } from './IData';
import MajorTab from './MajorTab.vue';
import SelectVendorTab from './SelectVendorTab.vue';

const navigationItems = ref<LayoutNavigationItem[]>([
  { label: 'Select Vendor', value: 'Select Vendor' },
  { label: 'General', value: 'General' },
]);

const draft = ref<SubmissionAttributes | null>();

const langStore = useLangStore();

onMounted(async () => {
  const data = submission;
  draft.value = data;

  navigationItems.value = [
    ...toRaw(navigationItems.value),
    ...data.questionnaires.map((questionnaire, idx) => ({
      label: questionnaire.name,
      value: idx,
    })),
  ];
});
</script>
