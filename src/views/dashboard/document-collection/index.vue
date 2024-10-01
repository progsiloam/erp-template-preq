<template>
  <!-- note tunggu compponent james -->
  <div class="mb-3">
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
  </div>

  <ShgLayout :navigation-items="navigationItems">
    <template v-slot:contents="{ activeItemValue }">
      <ShgCard title="Document Collection">
        <v-expansion-panels multiple>
          <v-expansion-panel title="General" class="mb-5" v-if="'general' === activeItemValue">
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
              <v-container class="mt-3 border-0 border-t">
                <v-row no-gutters justify="end">
                  <v-col cols="3" class="text-end">
                    <p class="font-weight-medium text-medium-emphasis">Score by system</p>
                    <p class="font-weight-bold">90</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel
            title="Contructions"
            class="mb-5"
            v-for="item in [...navigationItems].splice(1)"
            :key="item.value"
          >
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
              <v-container class="mt-3 border-0 border-t">
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
      </ShgCard>
    </template>
  </ShgLayout>
</template>

<script setup lang="ts">
import { useLangStore } from '@/pinia/lang.store';
import {
  BaseButtonIcon,
  type LayoutNavigationItem,
  ShgButton,
  ShgCard,
  ShgLayout,
} from '@siloamhospitals/erp-template-vuetify-components';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const langStore = useLangStore();
const tab = ref('General');
const router = useRouter();

const navigationItems = ref<LayoutNavigationItem[]>([
  { label: 'General', value: 'general' },
  { label: 'Detail', value: 'detail' },
]);

const toBackCollectionView = () => {
  router.push({ name: 'documentCollectionOverview' });
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
