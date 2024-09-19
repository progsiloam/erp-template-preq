<template>
  <BreadCrumbs :breadCrumbItems="breadCrumbItems" />
  <div class="mb-3 mt-n3">
    <v-container fluid>
      <v-row justify="space-between" align="center">
        <v-col cols="6">
          <h2>Document View</h2>
        </v-col>
        <v-col cols="6">
          <div class="d-flex justify-end">
            <v-btn-toggle v-model="langStore.activeLang" variant="outlined" divided density="compact">
              <v-btn value="eng">eng</v-btn>
              <v-btn value="id">id</v-btn>
            </v-btn-toggle>
            <BaseButtonIcon icon="mdi-alpha-x" color="secondary" class="ms-3" @click="toBackPreQDetailView" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <ShgLayout :navigation-items="navigationItems">
    <template v-slot:contents="{ activeItemValue }">
      <ShgCard title="Document Collection">
        <v-expansion-panels multiple>
          <v-expansion-panel id="general" title="General" class="mb-5">
            <v-expansion-panel-text>
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
                  <tr v-for="item in submission" :key="item.question">
                    <td>{{ item.question ?? '-' }}</td>
                    <td>{{ item.answer ?? '-' }}</td>
                    <td>
                      <div v-if="item.attach !== ''">
                        <v-btn size="small">view</v-btn>
                      </div>
                    </td>
                    <td>{{ item.system_score ?? '-' }}</td>
                  </tr>
                </tbody>
              </v-table>
              <v-container class="mt-3">
                <v-row no-gutters justify="end">
                  <v-col cols="3" class="text-end">
                    <p class="font-weight-medium text-medium-emphasis">Score by system</p>
                    <p class="font-weight-bold">90</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel id="contructions-panel" title="Contructions" class="mb-5">
            <v-expansion-panel-text>
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
                  <tr v-for="item in submission" :key="item.question">
                    <td>{{ item.question ?? '-' }}</td>
                    <td>{{ item.answer ?? '-' }}</td>
                    <td>
                      <div v-if="item.attach !== ''">
                        <v-btn size="small">view</v-btn>
                      </div>
                    </td>
                    <td>{{ item.system_score ?? '-' }}</td>
                  </tr>
                </tbody>
              </v-table>
              <v-container class="mt-3">
                <v-row no-gutters justify="end">
                  <v-col cols="3" class="text-end">
                    <p class="font-weight-medium text-medium-emphasis">Score by system</p>
                    <p class="font-weight-bold">90</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

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
              DOC COLLECTION SCORE <v-icon class="ml-1 text-medium-emphasis" icon="mdi-information-outline"></v-icon>
            </h5>
            <div class="d-flex flex-column ga-1 mb-3">
              <div class="d-flex flex-row justify-space-between">
                <p class="font-weight-medium text-medium-emphasis">General Section</p>
                <div class="d-flex align-center ga-1">
                  <p class="font-weight-bold">80</p>
                  <v-icon class="text-medium-emphasis" size="x-small" icon="mdi-information-outline"></v-icon>
                </div>
              </div>
              <div class="d-flex flex-row justify-space-between">
                <p class="font-weight-medium text-medium-emphasis">Contructions</p>
                <div class="d-flex align-center ga-1">
                  <p class="font-weight-bold">80</p>
                  <v-icon class="text-medium-emphasis" size="x-small" icon="mdi-information-outline"></v-icon>
                </div>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="d-flex flex-row justify-space-between mt-2">
              <p class="font-weight-medium text-medium-emphasis">Total Score</p>
              <div class="d-flex align-center ga-1">
                <p class="font-weight-bold">80</p>
                <v-icon class="text-medium-emphasis" size="x-small" icon="mdi-information-outline"></v-icon>
              </div>
            </div>
            <v-divider class="mt-3"></v-divider>
            <h5 class="my-2">
              DOCUMENT REVIEW SCORE <v-icon class="ml-1 text-medium-emphasis" icon="mdi-information-outline"></v-icon>
            </h5>
            <div class="d-flex flex-column ga-1 mb-3">
              <div class="d-flex flex-row justify-space-between">
                <p class="font-weight-medium text-medium-emphasis">Vendor Management</p>
                <div class="d-flex align-center ga-1">
                  <p class="font-weight-bold">80</p>
                  <v-icon class="text-medium-emphasis" size="x-small" icon="mdi-information-outline"></v-icon>
                </div>
              </div>
              <div class="d-flex flex-row justify-space-between">
                <p class="font-weight-medium text-medium-emphasis">SME</p>
                <div class="d-flex align-center ga-1">
                  <p class="font-weight-bold">80</p>
                  <v-icon class="text-medium-emphasis" size="x-small" icon="mdi-information-outline"></v-icon>
                </div>
              </div>
              <div class="d-flex flex-row justify-space-between">
                <p class="font-weight-medium text-medium-emphasis">Head Of VM</p>
                <div class="d-flex align-center ga-1">
                  <p class="font-weight-bold">80</p>
                  <v-icon class="text-medium-emphasis" size="x-small" icon="mdi-information-outline"></v-icon>
                </div>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="d-flex flex-row justify-space-between mt-2">
              <p class="font-weight-medium text-medium-emphasis">Total Score</p>
              <p class="font-weight-bold text-blue">170</p>
            </div>
          </v-card>
        </template>
        {{ activeItemValue }}
      </ShgCard>
    </template>
  </ShgLayout>
</template>

<script setup lang="ts">
import { useLangStore } from '@/pinia/lang.store';
import type { Breadcrumb } from '@/types/breadcrumb';
import {
  BaseButtonIcon,
  ShgCard,
  ShgLayout,
  type LayoutNavigationItem,
} from '@siloamhospitals/erp-template-vuetify-components';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const langStore = useLangStore();
const router = useRouter();
const routes = useRoute();

const navigationItems = ref<LayoutNavigationItem[]>([
  { label: 'General', value: 'general' },
  { label: 'Contruction', value: 'contruction' },
]);

const submission = [
  {
    question: 'Frozen Food',
    answer: 'Sosis Kanzler',
    attach: '',
    system_score: 159,
  },
  {
    question: 'Frozen Food',
    answer: 'Sosis Kanzler',
    attach: '',
    system_score: 159,
  },
  {
    question: 'Frozen Food',
    answer: 'Sosis Kanzler',
    attach: '',
    system_score: 159,
  },
  {
    question: 'Frozen Food',
    answer: 'Sosis Kanzler',
    attach: '4324234242',
    system_score: 159,
  },
  {
    question: 'Frozen Food',
    answer: 'Sosis Kanzler',
    attach: '4324234242',
    system_score: 159,
  },
];

const breadCrumbItems = ref<Breadcrumb[]>([
  { title: 'Master Data Vendor', href: '/vendor' },
  { title: 'Detail Pre Qualification', href: `/vendor/pre-q-detail/${routes.params.vendor_name}` },
  { title: 'Document View', href: '' },
]);

const toBackPreQDetailView = () => {
  router.push({ name: 'vendorPreQDetailOverview' });
};
</script>
