<template>
  <!-- note tunggu compponent james -->
  <div class="mb-3 mt-n3">
    <v-container fluid>
      <v-row justify="space-between" align="center">
        <v-col cols="6">
          <h2>Document Review</h2>
        </v-col>
        <v-col cols="6">
          <div class="d-flex justify-end">
            <div class="d-flex ga-2 me-3">
              <BaseButton color="primary">Submit Score</BaseButton>
            </div>
            <v-divider vertical class="me-4"></v-divider>
            <v-btn-toggle v-model="langStore.activeLang" variant="outlined" divided density="compact">
              <v-btn value="eng">eng</v-btn>
              <v-btn value="id">id</v-btn>
            </v-btn-toggle>
            <BaseButtonIcon icon="mdi-alpha-x" color="secondary" class="ms-3" @click="toBackCollectionReviewView" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <ShgLayout :navigation-items="navigationItems">
    <template v-slot:contents="{ activeItemValue }">
      <ShgCard title="Document Review">
        <v-expansion-panels multiple>
          <v-expansion-panel id="general" title="General" class="mb-5">
            <v-expansion-panel-text>
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left" scope="col">Remark</th>
                    <th class="text-left" scope="col">Question</th>
                    <th class="text-left" scope="col">Answer</th>
                    <th class="text-left" scope="col">Attach</th>
                    <th class="text-left" scope="col">System Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in submission" :key="item.question">
                    <td><ShgCheckbox v-model="isMarked" field-name="1" label="" /></td>
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
                    <th class="text-left" scope="col">Remark</th>
                    <th class="text-left" scope="col">Question</th>
                    <th class="text-left" scope="col">Answer</th>
                    <th class="text-left" scope="col">Attach</th>
                    <th class="text-left" scope="col">System Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in submission" :key="item.question">
                    <td><ShgCheckbox v-model="isMarked" field-name="2" label="" /></td>
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
            <v-divider class="mt-2"></v-divider>
            <div class="mt-3 bg-blue-lighten-5 pa-3 rounded">
              <h5>Notes from Document Collection</h5>
              <p class="text-subtitle-2">Vendor sudah mengisi semua dokumen dengan baik</p>
            </div>
            <v-divider class="mt-2"></v-divider>
            <ShgTextField label="Contruction" v-model="contruction" />
          </v-card>
        </template>
        {{ activeItemValue }}
      </ShgCard>
    </template>
  </ShgLayout>
</template>

<script setup lang="ts">
import { useLangStore } from '@/pinia/lang.store';
import {
  BaseButton,
  BaseButtonIcon,
  type LayoutNavigationItem,
  ShgCard,
  ShgCheckbox,
  ShgLayout,
  ShgTextField,
} from '@siloamhospitals/erp-template-vuetify-components';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const langStore = useLangStore();
const tab = ref('General');
const router = useRouter();
const isMarked = ref<boolean>(false);
const contruction = ref<string>('');
const notes = ref<string>('');

const navigationItems = ref<LayoutNavigationItem[]>([
  { label: 'General', value: 'general' },
  { label: 'Contruction', value: 'contruction' },
]);

const toBackCollectionReviewView = () => {
  router.push({ name: 'documentPreScoringHMOverview' });
};

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

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        if (entry.target.id === 'general') {
          tab.value = 'general';
        } else if (entry.target.id === 'contruction') {
          tab.value = 'contruction';
        }
      }
    });
  }, options);

  const generalPanel = document.getElementById('general');
  const contructionsPanel = document.getElementById('contruction');

  if (generalPanel) observer.observe(generalPanel);
  if (contructionsPanel) observer.observe(contructionsPanel);

  onUnmounted(() => {
    if (generalPanel) observer.unobserve(generalPanel);
    if (contructionsPanel) observer.unobserve(contructionsPanel);
  });
});
</script>

<style scoped>
.fixed-tabs {
  top: 20px;
  z-index: 100;
}
</style>
