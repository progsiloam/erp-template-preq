<template>
  <h5 class="text-h5 font-weight-bold ms-5 mt-5">Question</h5>

  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn class="text-none mb-4 me-4" color="indigo-darken-3" variant="flat" @click="navigateToNewQuestion">
        Create Question
      </v-btn>
    </v-row>
    <v-table>
      <thead>
        <tr>
          <th class="text-left" scope="col">No</th>
          <th class="text-left" scope="col">Text</th>
          <th class="text-left" scope="col">Type</th>
          <th class="text-left" scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(question, index) in questions" :key="question.question_text.id">
          <td>{{ index + 1 }}</td>
          <td>{{ question.question_text.id }}</td>
          <td>{{ question.input_type }}</td>
          <td>
            <v-btn size="small" variant="text" icon="mdi-pen" @click="navigateEditQuestion(question._id)"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
import { fetchQuestionsPaginate } from '@/service/api';
import type { Question } from '@/service/fetchQuestionsPaginate.type';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToNewQuestion = () => {
  router.push({ name: 'create' });
};

const navigateEditQuestion = (id: string) => {
  router.push({ name: 'editQuestion', params: { id } });
};

const questions = ref<Question[]>([]);

onMounted(async () => {
  try {
    const res = await fetchQuestionsPaginate();
    questions.value = res.data;
  } catch (error) {
    console.log(error);
  }
});
</script>
