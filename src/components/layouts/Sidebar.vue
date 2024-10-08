<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail && !mobile"
    :permanent="!mobile"
    :mobile="mobile"
    :expand-on-hover="!mobile"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- Logo -->
    <template v-slot:prepend>
      <div class="justify-center" style="height: 64px">
        <v-img v-if="!rail || isHover" :src="Logo" />
        <v-img v-else :src="Submark" />
      </div>
    </template>

    <!-- Menu -->
    <SidebarNavigationMenu :items="navigationMenuItems" />

    <!-- Footer -->
    <template v-slot:append>
      <div class="text-center text-caption">
        {{ footer }}
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useNavStore } from '@/stores';
import type { NavigationMenu } from '@/types/navigationMenu.type';
import { Logo, Submark } from '@siloamhospitals/erp-template-vuetify-components';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useDisplay } from 'vuetify';
import SidebarNavigationMenu from './SidebarNavigationMenu.vue';

const appVersion = import.meta.env.VITE_APP_VERSION;

const { mobile } = useDisplay();
const navStore = useNavStore();
const { drawer, rail } = storeToRefs(navStore);

const isHover = ref(false);

const footer = computed(() => {
  if (rail.value && !isHover.value) {
    return appVersion;
  }

  return `Siloam Hospitals @ ${new Date().getFullYear()} (${appVersion})`;
});

const navigationMenuItems = ref<NavigationMenu[]>([
  { name: 'DASHBOARD' },
  { name: 'Dashboard', path: '/', icon: 'mdi-view-dashboard-outline' },
  { name: 'About', path: '/about', icon: 'mdi-information' },
  { name: 'Report', path: '/report', icon: 'mdi-file-document-outline' },
  {
    name: 'Config',
    children: [
      { name: 'PreQ Score', path: '/pre-q-score', icon: 'mdi-list-box-outline' },
      { name: 'PreQ Validity', path: '/pre-q-validity', icon: 'mdi-list-box-outline' },
    ],
  },
  {
    name: 'Master',
    children: [
      { name: 'Question', path: '/question', icon: 'mdi-list-box-outline' },
      { name: 'Questionaire', path: '/questionaire', icon: 'mdi-list-box-outline' },
      { name: 'Vendor', path: '/vendor', icon: 'mdi-list-box-outline' },
      { name: 'Major Of Business', path: '/major-of-business', icon: 'mdi-list-box-outline' },
    ],
  },
  {
    name: 'Vendor',
    children: [{ name: 'Create PQ', path: '/questionaire/submit', icon: 'mdi-list-box-outline' }],
  },
  {
    name: 'Form',
    children: [{ name: 'Example Form PreQ', path: '/form-preq', icon: 'mdi-list-box-outline' }],
  },
  {
    name: 'Document Collection',
    children: [
      { name: 'View Mode', path: '/document-collection/view', icon: 'mdi-file-document-outline' },
      { name: 'Approve', path: '/document-collection/approve', icon: 'mdi-file-document-outline' },
      { name: 'Revise', path: '/document-collection/revise', icon: 'mdi-file-document-outline' },
      { name: 'Reject', path: '/document-collection/reject', icon: 'mdi-file-document-outline' },
    ],
  },
  {
    name: 'Document Pre Scoring',
    children: [
      { name: 'VM Scoring view', path: '/document-pre-scoring-vm', icon: 'mdi-file-document-outline' },
      { name: 'SME Scoring view', path: '/document-pre-scoring-sme', icon: 'mdi-file-document-outline' },
      { name: 'HM Scoring view', path: '/document-pre-scoring-hm', icon: 'mdi-file-document-outline' },
    ],
  },
  { name: 'Pre-Q Release', path: '/preq-release', icon: 'mdi-file-document-outline' },
  { name: 'Google', path: 'https://www.google.com', icon: 'mdi-google', asHref: true },
]);
</script>
