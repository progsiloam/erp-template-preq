<template>
  <!-- note tunggu compponent james -->
  <div class="mb-3 mt-n3">
    <v-container fluid>
      <v-row justify="space-between" align="center">
        <v-col cols="6">
          <h2>Document Collection</h2>
        </v-col>
        <v-col cols="6">
          <div class="d-flex justify-end">
            <div class="d-flex ga-2 me-3">
              <BaseButton color="secondary">Reset</BaseButton>
              <BaseButton color="secondary">Cancel</BaseButton>
              <BaseButton color="danger">Reject</BaseButton>
            </div>
            <v-divider vertical class="me-4"></v-divider>
            <v-btn-toggle v-model="langStore.activeLang" variant="outlined" divided density="compact">
              <v-btn value="eng">eng</v-btn>
              <v-btn value="id">id</v-btn>
            </v-btn-toggle>
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
                    <th class="text-left" scope="col">Remark</th>
                    <th class="text-left" scope="col">Question</th>
                    <th class="text-left" scope="col">Answer</th>
                    <th class="text-left" scope="col">Attach</th>
                    <th class="text-left" scope="col">System Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in submission" :key="item.question">
                    <td><ShgCheckbox /></td>
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
                    <td><ShgCheckbox /></td>
                    ``
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
              <h4 class="">Notes <span class="text-danger">*</span></h4>
            </div>
            <v-textarea v-model="notes" variant="outlined" placeholder="Give notes regarding the documents"></v-textarea>
          </v-card>
        </template>
        {{ activeItemValue }}
      </ShgCard>
    </template>
  </ShgLayout>
</template>

<script setup lang="ts">
import { type LayoutNavigationItem, ShgCard, ShgLayout, BaseButton, ShgCheckbox } from 'erp-template-vuetify-components';
import { onMounted, onUnmounted, ref } from 'vue';
import { useLangStore } from '@/pinia/lang.store';

const tab = ref('General');
const notes = ref<string>('');
const langStore = useLangStore();

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
