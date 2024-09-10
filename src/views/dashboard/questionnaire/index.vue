<template>
  <h5 class="text-h5 font-weight-bold ms-5 mt-5">Questionnaire</h5>

  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn class="text-none mb-4 me-4" color="indigo-darken-3" variant="flat" @click="navigateToNewQuestionnaire">
        Create Questionnaire
      </v-btn>
    </v-row>
    <v-table>
      <thead>
        <tr>
          <th class="text-left" scope="col">Name</th>
          <th class="text-left" scope="col">Total Sections</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="questionnaire in questionnaires" :key="questionnaire._id">
          <td>{{ questionnaire.major_of_bussiness }}</td>
          <td>{{ questionnaire.sections.length }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
import { fetchQuistionnairesPaginate } from '@/service/api';
import type { Questionnaire } from '@/service/fetchQuistionnairesPaginate.type';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const questionnaires = ref<Questionnaire[]>([]);

const router = useRouter();
const navigateToNewQuestionnaire = () => {
  router.push({ name: 'createQuestionaire' });
};

onMounted(async () => {
  const { data } = await fetchQuistionnairesPaginate();
  questionnaires.value = data;
});
</script>
