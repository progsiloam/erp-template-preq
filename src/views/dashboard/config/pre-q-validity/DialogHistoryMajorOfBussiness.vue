<template>
  <BaseDialog title="Update History" width="600">
    <template v-slot:default>
      <ShgTable :columns="columns" :items="items"> </ShgTable>
    </template>
    <template v-slot:actions>
      <div class="d-flex ga-3">
        <BaseButton @click="handleCloseDialog" color="primary">Okay</BaseButton>
      </div>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { BaseButton, BaseDialog, ShgTable } from '@siloamhospitals/erp-template-vuetify-components';
import { closeDialog } from 'vue3-promise-dialog';

// const questionList = ref<Question[]>([]);
// const selectedQuestions = ref<Question[]>([]);
// const searchText = ref<string>('');

const columns = [
  {
    label: 'Update ID',
    value: 'update_id',
  },
  {
    label: 'Latest Update By',
    value: 'latest_update_by',
  },
  {
    label: 'Last Change Date',
    value: 'last_change_date',
  },
];

const items = [
  {
    update_id: 'TP0001',
    latest_update_by: 'Gilang',
    last_change_date: '2021-10-10',
  },
];

const handleCloseDialog = () => {
  closeDialog(null);
};

// const handleRelease = () => {
//   closeDialog(null);
// };

// const onCheckBoxChange = (e: Event, item: Question) => {
//   const target = e.target as HTMLInputElement;

//   if (target.checked) {
//     selectedQuestions.value.push(item);
//   } else {
//     selectedQuestions.value = selectedQuestions.value.filter((q) => q._id !== item._id);
//   }
// };

// const isCheckBoxChecked = (item: Question) => {
//   return selectedQuestions.value.some((q) => q._id === item._id);
// };

// const fetchQuestion = async (query: string) => {
//   const res = await fetchQuestionsPaginate({ questionText: query });
//   questionList.value = res.data;
// };

// onMounted(() => {
//   fetchQuestion('');
// });

// watch([searchText], async ([newSearchText]) => {
//   const search = newSearchText ?? '';
//   // fetchQuestion(search);
//   selectedQuestions.value = [];
// });
</script>
