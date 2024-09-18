<template>
  <ShgForm :columns="1" ref="form">
    <v-container>
      <v-row align="end" justify="end" no-gutters>
        <v-col cols="6">
          <ShgAutocomplete
            v-model="values.major_of_bussiness"
            label="Major of Bussiness"
            textPlaceholder="Please Select Major of Bussiness"
            :items="quisionerTypeList.map((q) => ({ label: q.type.toUpperCase(), value: q.type }))"
            :required="true"
          />
        </v-col>
        <v-col cols="auto">
          <div class="py-3">
            <BaseButton color="primary" @click="useNewQuestionnaire.addSections" :disabled="values.major_of_bussiness === ''"
              >Add section</BaseButton
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="mb-4" no-gutters>
        <v-col cols="12">
          <div v-for="(section, sIndex) in values.sections" :key="sIndex">
            <ShgCard title="Create Questionaire">
              <v-container>
                <v-row align="end" justify="end" no-gutters>
                  <v-col cols="6">
                    <ShgTextField
                      v-model="values.sections[sIndex].name"
                      label="Section Name"
                      :field-name="`section-name-${sIndex}`"
                      :required="true"
                    />
                  </v-col>
                  <v-col cols="auto">
                    <div class="py-3" style="margin-top: 19.95px">
                      <BaseButton @click="handleAddQuestions(`sections[${sIndex}].questions`)" color="primary"
                        >Add Question
                      </BaseButton>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <div v-for="(question, qIndex) in section.questions" class="mb-10" :key="qIndex">
                      <div class="w-100 text-end mb-4">
                        <BaseButton
                          color="danger"
                          @click="useNewQuestionnaire.deleteKeyQuestion({ sections: sIndex, question: qIndex })"
                          >Remove Question</BaseButton
                        >
                      </div>

                      <v-row align="start" no-gutters>
                        <v-col>
                          <ShgTextField
                            v-model="values.sections[sIndex].questions[qIndex].question_text.eng"
                            :label="`Question (ENG)`"
                            :field-name="`question-eng-${qIndex}`"
                            :required="true"
                          />
                        </v-col>
                        <v-col>
                          <ShgTextField
                            v-model="values.sections[sIndex].questions[qIndex].question_text.id"
                            :label="`Question (ID)`"
                            :field-name="`question-id-${qIndex}`"
                            :required="true"
                          />
                        </v-col>
                        <v-col>
                          <ShgNumeric
                            v-model="values.sections[sIndex].questions[qIndex].question_score"
                            :label="`Question Score`"
                            :field-name="`question-score-${qIndex}`"
                            :required="true"
                          />
                        </v-col>
                      </v-row>

                      <div>
                        <ShgCheckbox
                          label="Required Question"
                          v-model="values.sections[sIndex].questions[qIndex].is_required"
                          hint="Make this question required!"
                        />
                      </div>

                      <v-row no-gutters>
                        <v-col>
                          <ShgAutocomplete
                            v-model="values.sections[sIndex].questions[qIndex].input_type"
                            label="Type Question"
                            textPlaceholder="Please Select Type Question"
                            :items="inputType.map((type) => ({ label: type, value: type }))"
                          />
                        </v-col>
                      </v-row>

                      <div v-for="(option, oIndex) in question.options" :key="oIndex">
                        <v-row align="start" no-gutters>
                          <v-col>
                            <ShgTextField
                              v-model="values.sections[sIndex].questions[qIndex].options[oIndex].option_text.eng"
                              :label="`Option (ENG) ${oIndex + 1}`"
                              :field-name="`option-eng-${oIndex}`"
                              :required="true"
                            />
                          </v-col>
                          <v-col>
                            <ShgTextField
                              v-model="values.sections[sIndex].questions[qIndex].options[oIndex].option_text.id"
                              :label="`Option (ID) ${oIndex + 1}`"
                              :field-name="`option-id-${oIndex}`"
                              :required="true"
                            />
                          </v-col>
                          <v-col>
                            <ShgNumeric
                              v-model="values.sections[sIndex].questions[qIndex].options[oIndex].option_score"
                              :label="`Option Score ${oIndex + 1}`"
                              :field-name="`option-score-${oIndex}`"
                              :required="true"
                            />
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
              <template v-slot:actions>
                <BaseButton color="danger" @click="useNewQuestionnaire.deleteKeySection(sIndex)">Remove Section</BaseButton>
              </template>
            </ShgCard>
          </div>
          <div class="text-end me-4 mt-5">
            <ShgButton type="submit" @click="useNewQuestionnaire.onSubmit" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </ShgForm>
</template>

<script setup lang="ts">
import { fetchQuestionnaireTypes } from '@/service/api';
import type { QuestionnaireType } from '@/service/fetchQuestionnaireTypes.type';
import { inputType } from '@/views/type';
import {
  BaseButton,
  ShgAutocomplete,
  ShgButton,
  ShgCard,
  ShgCheckbox,
  ShgForm,
  ShgNumeric,
  ShgTextField,
} from '@siloamhospitals/erp-template-vuetify-components';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, ref } from 'vue';
import { openDialog } from 'vue3-promise-dialog';
import DialogAddQuestion from './DialogAddQuestion.vue';
import { useCreateQuestionnaire } from './useNewQuestionnaire.store';

const quisionerTypeList = ref<QuestionnaireType[]>([]);

const useNewQuestionnaire = useCreateQuestionnaire();
const { form, values } = storeToRefs(useNewQuestionnaire);

const handleAddQuestions = async (path: string) => {
  // isModalAddQuestionVisible.value = true;
  useNewQuestionnaire.activeSection = path;

  const data = await openDialog(DialogAddQuestion);

  if (!data) {
    return;
  }

  useNewQuestionnaire.addQuestion(data);
};

onMounted(async () => {
  const res = await fetchQuestionnaireTypes();
  quisionerTypeList.value = res.data;
});

onUnmounted(() => {
  useNewQuestionnaire.$dispose();
});
</script>
