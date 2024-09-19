<template>
  <ShgCard title="Edit Question">
    <ShgForm :columns="1" ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <ShgTextField v-model="values.question_text.id" label="Question (ID)" :required="true" class="pa-0" />
          </v-col>
          <v-col cols="12" sm="6">
            <ShgTextField v-model="values.question_text.eng" label="Question (ENG)" :required="true" class="pa-0" />
          </v-col>
        </v-row>
        <v-row align="end">
          <v-col cols="12" :sm="editQuestion.shouldRenderAddOptions() ? '10' : '12'">
            <ShgAutocomplete
              v-model="values.input_type"
              label="Select an Option of Input Type"
              textPlaceholder="Please select"
              :items="[...inputType].map((type) => ({ label: type, value: type }))"
              class="pa-0"
            />
          </v-col>
          <v-col
            v-if="editQuestion.shouldRenderAddOptions()"
            cols="12"
            :sm="editQuestion.shouldRenderAddOptions() ? '2' : '0'"
          >
            <BaseButton color="warning" rounded="2" class="bg-orange-darken-3 w-100" @click="editQuestion.addOptions()">
              + Option
            </BaseButton>
          </v-col>
        </v-row>
        <div class="mb-6 mb-md-3" v-for="(option, oIndex) in editQuestion.values.options" :key="oIndex">
          <v-row align="end">
            <v-col cols="12" sm="10">
              <v-row>
                <v-col cols="12">
                  <ShgTextField
                    v-model="values.options[oIndex].option_text.id"
                    :label="`Option Text (ID) - ${oIndex + 1}`"
                    :required="true"
                    class="pa-0"
                  />
                </v-col>
                <v-col cols="12">
                  <ShgTextField
                    v-model="values.options[oIndex].option_text.eng"
                    :label="`Option Text (ENG) - ${oIndex + 1}`"
                    :required="true"
                    class="pa-0"
                  />
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" sm="2">
              <ShgButton type="delete" rounded="2" class="bg-error w-100" @click="editQuestion.deleteKey(oIndex)" />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </ShgForm>

    <template v-slot:actions>
      <div class="d-flex ga-2">
        <BaseButton @click="navigateToBackTableQuestion" color="secondary">Back</BaseButton>
        <ShgButton type="submit" @click="editQuestion.onSubmit"></ShgButton>
      </div>
    </template>
  </ShgCard>
</template>

<script setup lang="ts">
import {
  BaseButton,
  ShgAutocomplete,
  ShgButton,
  ShgCard,
  ShgForm,
  ShgTextField,
} from '@siloamhospitals/erp-template-vuetify-components';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchQuestionById } from '../../../../service/api';
import { inputType } from '../../../type';
import { useEditQuestion } from './useEditQuestion';

const router = useRouter();
const route = useRoute();

const navigateToBackTableQuestion = () => {
  router.push({ name: 'questionOverview' });
};

const editQuestion = useEditQuestion();
const { form, values } = storeToRefs(editQuestion);

onUnmounted(() => {
  editQuestion.$dispose();
});

onMounted(async () => {
  const res = await fetchQuestionById(route.params.id as string);
  editQuestion.values = res.data;
});
</script>
