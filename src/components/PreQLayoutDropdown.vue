<template>
  <div :id="componentName" class="pe-4">
    <v-row class="shg-layout">
      <v-col cols="12" md="2">
        <v-list :border="true" :rounded="true" class="py-2">
          <v-list-item v-for="item in navigationItems" :key="item.value" :active="item.value === activeItemValue">
            {{ item.label }}
          </v-list-item>
        </v-list>
      </v-col>

      <v-col cols="12" md="10">
        <ShgCard :title="cardTitle">
          <v-expansion-panels multiple>
            <v-expansion-panel
              v-for="(item, index) in itemMajor"
              :key="index"
              :id="item"
              :title="navigationItems[index].label"
              class="mb-5"
            >
              <v-expansion-panel-text>
                <div v-if="$slots['contents']">
                  <slot name="contents"></slot>
                </div>
                <div v-if="$slots['score-system']">
                  <slot name="score-system"></slot>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <template v-slot:options v-if="$slots['options']">
            <slot name="options"></slot>
          </template>
        </ShgCard>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ShgCard, type LayoutNavigationItem } from '@siloamhospitals/erp-template-vuetify-components';
import { onMounted, onUnmounted, ref, toRefs } from 'vue';

const componentName = 'PreQLayoutDropdown';
defineOptions({
  name: componentName,
});

const props = defineProps<{
  navigationItems: LayoutNavigationItem[];
  cardTitle: string;
  itemMajor: string[];
}>();

const { navigationItems, cardTitle, itemMajor } = toRefs(props);

const activeItemValue = ref<string | number>('');

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeItemValue.value = entry.target.id;
      }
    });
  }, options);

  const panels = itemMajor.value.map((item) => document.getElementById(item));
  panels.forEach((panel) => {
    if (panel) observer.observe(panel);
  });

  onUnmounted(() => {
    panels.forEach((panel) => {
      if (panel) observer.unobserve(panel);
    });
  });
});
</script>
