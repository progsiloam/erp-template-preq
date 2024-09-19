<template>
  <v-breadcrumbs :items="breadCrumbItems" class="mb-5 pa-0"></v-breadcrumbs>
</template>

<script setup lang="ts">
import type { Breadcrumb } from '@/types/breadcrumb';
import { toRefs } from 'vue';

const props = defineProps<{
  breadCrumbItems: Breadcrumb[];
}>();

const { breadCrumbItems } = toRefs(props);
</script>
