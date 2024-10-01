<template>
  <div class="mb-3 mt-n3">
    <v-container fluid>
      <v-row justify="space-between" align="center">
        <v-col cols="6">
          <h2>Document Collection</h2>
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
            <BaseButtonIcon icon="mdi-alpha-x" color="secondary" class="ms-3" @click="toBackCollectionView" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <PreqLayoutDropdown
    :navigationItems="navigationItems"
    cardTitle="Document Collection"
    :itemMajor="['general', 'contruction']"
  >
    <template v-slot:contents>
      <v-table>
        <thead>
          <tr>
            <th class="text-left" scope="col">Question</th>
            <th class="text-left" scope="col">Answer</th>
            <th class="text-left" scope="col">Attach</th>
            <th class="text-left" scope="col">System Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 50" :key="i">
            <td>Apa itu Pertanyaan ?</td>
            <td>Jawaban apa ini ?</td>
            <td><ShgButton type="view" /></td>
            <td>10</td>
          </tr>
        </tbody>
      </v-table>
    </template>

    <template v-slot:score-system>
      <v-container class="mt-3 border-0 border-t">
        <v-row no-gutters justify="end">
          <v-col cols="3" class="text-end">
            <p class="font-weight-medium text-medium-emphasis">Score by system</p>
            <p class="font-weight-bold">90</p>
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template v-slot:options>
      <v-card class="pa-4">
        <div class="mb-2">
          <h5>
            Where the score coming from?
            <v-icon class="ml-1 text-medium-emphasis" icon="mdi-information-outline"></v-icon>
          </h5>
        </div>
        <v-divider></v-divider>
        <h5 class="my-2">
          SCORE BY SYSTEM <v-icon class="ml-1 text-medium-emphasis" icon="mdi-information-outline"></v-icon>
        </h5>
        <div class="d-flex flex-column ga-1 mb-3">
          <div class="d-flex flex-row justify-space-between">
            <p class="font-weight-medium text-medium-emphasis">General Section</p>
            <p class="font-weight-bold">90</p>
          </div>
          <div class="d-flex flex-row justify-space-between">
            <p class="font-weight-medium text-medium-emphasis">Contructions</p>
            <p class="font-weight-bold">80</p>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="d-flex flex-row justify-space-between mt-2">
          <p class="font-weight-medium text-medium-emphasis">Total Score</p>
          <p class="font-weight-bold text-blue">170</p>
        </div>
      </v-card>
    </template>
  </PreqLayoutDropdown>
</template>

<script setup lang="ts">
import PreqLayoutDropdown from '@/components/PreQLayoutDropdown.vue';
import { useLangStore } from '@/pinia/lang.store';
import { BaseButtonIcon, ShgButton, type LayoutNavigationItem } from '@siloamhospitals/erp-template-vuetify-components';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const langStore = useLangStore();
const router = useRouter();

const navigationItems = ref<LayoutNavigationItem[]>([
  { label: 'General', value: 'general' },
  { label: 'Contruction', value: 'contruction' },
]);

const toBackCollectionView = () => {
  router.push({ name: 'documentCollectionOverview' });
};
</script>
