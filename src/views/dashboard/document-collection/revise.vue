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
            <BaseButton color="secondary">Reset</BaseButton>
            <ShgButton type="cancel" />
            <ShgButton type="revise" />
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
  ShgButton,
  ShgCard,
  ShgCheckbox,
  ShgLayout,
} from '@siloamhospitals/erp-template-vuetify-components';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const tab = ref('General');
const langStore = useLangStore();
const router = useRouter();
const isMarked = ref<boolean>(false);

const toBackCollectionView = () => {
  router.push({ name: 'documentCollectionOverview' });
};

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
