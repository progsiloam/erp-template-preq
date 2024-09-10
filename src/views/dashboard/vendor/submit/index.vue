<template>
  <pre>
		{{ navigationItems }}
	</pre
  >

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
          <MajorTab :name="item.label" />
        </div>
      </div>
    </template>
  </ShgLayout>
</template>

<script setup lang="ts">
import { ShgLayout, type LayoutNavigationItem } from 'erp-template-vuetify-components';
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

const draft = ref<Partial<SubmissionAttributes>>({});

onMounted(async () => {
  const data = submission;
  draft.value = data;

  navigationItems.value = [
    ...toRaw(navigationItems.value),
    ...data.questionnaires.map((questionnaire, idx) => ({
      label: questionnaire.name,
      value: `'${idx}'`,
    })),
  ];
});
</script>
