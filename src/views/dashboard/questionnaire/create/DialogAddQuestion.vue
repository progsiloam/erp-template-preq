<template>
  <BaseDialog title="Add Question for Questionaire" width="600">
    <template v-slot:default>
      <ShgTextField v-model="searchText" label="Search Question" />
      <v-divider class="mt-2"></v-divider>
      <v-table height="300px">
        <thead>
          <tr>
            <th class="text-left h-full" style="width: 10px" scope="col"></th>
            <th class="text-left" scope="col">Question Text</th>
            <th class="text-left" scope="col">Type Question</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in questionList" :key="item._id">
            <td>
              <input
                @change="(e) => onCheckBoxChange(e, item)"
                type="checkbox"
                name=""
                id=""
                :checked="isCheckBoxChecked(item)"
              />
            </td>
            <td>{{ item.question_text.id }}, {{ item.question_text.eng }}</td>
            <td>{{ item.input_type }}</td>
          </tr>
        </tbody>
      </v-table>
    </template>

    <template v-slot:actions>
      <div class="d-flex ga-3">
        <BaseButton @click="handleCloseDialog" color="secondary">Cancel</BaseButton>
        <BaseButton @click="handleAddQuestions" color="primary">Submit</BaseButton>
      </div>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { fetchQuestionsPaginate } from '@/service/api';
import type { Question } from '@/service/fetchQuestionsPaginate.type';
import { BaseButton, BaseDialog, ShgTextField } from 'erp-template-vuetify-components';
import { onMounted, ref, watch } from 'vue';
import { closeDialog } from 'vue3-promise-dialog';

const questionList = ref<Question[]>([]);
const selectedQuestions = ref<Question[]>([]);
const searchText = ref<string>('');

const handleCloseDialog = () => {
  closeDialog(null);
};

const handleAddQuestions = () => {
  const dataToInsert = selectedQuestions.value.map((q) => {
    return {
      question_text: q.question_text,
      input_type: q.input_type,
      options: q.options,
      is_required: false,
    };
  });
  // useNewQuestionnaire.addQuestion(dataToInsert as any);

  closeDialog(dataToInsert);
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
