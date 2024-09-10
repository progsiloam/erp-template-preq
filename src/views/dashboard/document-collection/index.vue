<template>
  <!-- <v-container class="my-10">
    <v-row justify="center">
      <v-col cols="2">
        <div class="position-sticky fixed-tabs">
          <div class="bg-white rounded-sm shadow">
            <v-tabs v-model="tab" color="primary" direction="vertical">
              <v-tab class="font-weight-medium text-capitalize" text="General" value="General"></v-tab>
              <v-tab class="font-weight-medium text-capitalize" text="Contructions" value="Contructions"></v-tab>
            </v-tabs>
          </div>
          <div class="bg-grey-lighten-4 pa-4 mt-4 rounded-sm shadow">
            <p>This is the main content of alert and can be used to inform some certain information</p>
          </div>
        </div>
      </v-col>
      <v-col>
        <ShgCard title="Document Collection">
          <v-card-text class="bg-grey-lighten-5 pt-4">
            <v-expansion-panels multiple>
              <v-expansion-panel id="general-panel" title="General" class="mb-5">
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
          </v-card-text>
        </ShgCard>
      </v-col>
      <v-col cols="3">
        <div class="bg-white rounded-sm pa-4 shadow position-sticky fixed-tabs">
          <div class="mb-2">
            <h5>
              Where the score coming from? <v-icon class="ml-1 text-medium-emphasis" icon="mdi-information-outline"></v-icon>
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
        </div>
      </v-col>
    </v-row>
  </v-container> -->
  <ShgLayout :navigation-items="navigationItems">
    <template v-slot:contents="{ activeItemValue }">
      <div v-if="'general' === activeItemValue">
        <GeneralTab />
      </div>

      <div v-if="'select-vendor' === activeItemValue">
        <SelectVendorTab />
      </div>

      <ShgCard title="Document Collection">
        <v-expansion-panels multiple>
          <v-expansion-panel id="general-panel" title="General" class="mb-5">
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
          <v-card>
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
import { type LayoutNavigationItem, ShgCard, ShgLayout } from 'erp-template-vuetify-components';
import { onMounted, onUnmounted, ref } from 'vue';

const tab = ref('General');

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
      if (entry.isIntersecting) {
        if (entry.target.id === 'general-panel') {
          tab.value = 'General';
        } else if (entry.target.id === 'contructions-panel') {
          tab.value = 'Contructions';
        }
      }
    });
  }, options);

  const generalPanel = document.getElementById('general-panel');
  const contructionsPanel = document.getElementById('contructions-panel');

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
