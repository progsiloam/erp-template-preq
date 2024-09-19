<template>
  <BaseDialog title="Configuration" width="600">
    <template v-slot:default>
      <ShgAutocomplete v-model="searchText" label="Major of Business" :items="major" />
      <ShgTextField label="Validity Periods (Days)" v-model="validityPeriods" />
      <ShgCheckbox label="I'm aware of the configuration I set in" v-model="isAware" />
    </template>
    <template v-slot:actions>
      <div class="d-flex ga-3">
        <ShgButton @click="handleCloseDialog" type="cancel" />
        <ShgButton @click="handleRelease" type="submit" :disabled="!isAware" />
      </div>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { fetchQuestionsPaginate } from '@/service/api';
import type { Question } from '@/service/fetchQuestionsPaginate.type';
import {
  BaseDialog,
  ShgAutocomplete,
  ShgButton,
  ShgCheckbox,
  ShgTextField,
} from '@siloamhospitals/erp-template-vuetify-components';
import { onMounted, ref, watch } from 'vue';
import { closeDialog } from 'vue3-promise-dialog';

const questionList = ref<Question[]>([]);
const selectedQuestions = ref<Question[]>([]);
const validityPeriods = ref<string>('');
const searchText = ref<string>('');
const isAware = ref<boolean>(false);
const major = [
  {
    label: 'Major 1',
    value: 'major1',
  },
  {
    label: 'Major 2',
    value: 'major2',
  },
  {
    label: 'Major 3',
    value: 'major3',
  },
];

const handleCloseDialog = () => {
  closeDialog(null);
};

const handleRelease = () => {
  closeDialog(null);
};

const onCheckBoxChange = (e: Event, item: Question) => {
  const target = e.target as HTMLInputElement;

  if (target.checked) {
    selectedQuestions.value.push(item);
  } else {
    selectedQuestions.value = selectedQuestions.value.filter((q) => q._id !== item._id);
  }
};

const isCheckBoxChecked = (item: Question) => {
  return selectedQuestions.value.some((q) => q._id === item._id);
};

const fetchQuestion = async (query: string) => {
  const res = await fetchQuestionsPaginate({ questionText: query });
  questionList.value = res.data;
};

onMounted(() => {
  fetchQuestion('');
});

watch([searchText], async ([newSearchText]) => {
  const search = newSearchText ?? '';
  fetchQuestion(search);
  selectedQuestions.value = [];
});
</script>
