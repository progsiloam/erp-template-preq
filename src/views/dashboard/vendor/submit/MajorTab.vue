<template>
  <ShgCard :title="questionnaire.name">
    <ShgForm :columns="1" ref="form">
      <template v-for="(section, Sindex) in questionnaire.sections" :key="Sindex">
        <v-col cols="12">
          <h3 class="">
            {{ section.name }}
          </h3>
        </v-col>

        <template v-for="(question, Qindex) in section.questions" :key="Qindex">
          <ShgTextField
            v-model="values.sections[Sindex].questions[Qindex].user_answer[0]"
            :label="question.question_text[langStore.activeLang]"
            :field-name="`${question.question_text}+${Qindex}`"
            :required="question.is_required"
            v-if="question.input_type === 'Short answer'"
          />
          <ShgCheckboxMulti
            v-model="values.sections[Sindex].questions[Qindex].user_answer"
            :items="
              question.options.map((option) => ({
                label: option.option_text[langStore.activeLang],
                value: option.option_text[langStore.activeLang],
              }))
            "
            :label="question.question_text[langStore.activeLang]"
            :field-name="`${question.question_text}+${Qindex}`"
            :required="question.is_required"
            v-if="question.input_type === 'Checkboxes'"
          />
          <ShgDatePicker
            v-model="values.sections[Sindex].questions[Qindex].user_answer[0]"
            :label="question.question_text[langStore.activeLang]"
            :field-name="`${question.question_text}+${Qindex}`"
            :required="question.is_required"
            v-if="question.input_type === 'Date'"
          />
          <ShgAutocomplete
            v-model="values.sections[Sindex].questions[Qindex].user_answer[0]"
            :items="
              question.options.map((option) => ({
                label: option.option_text[langStore.activeLang],
                value: option.option_text[langStore.activeLang],
              }))
            "
            :label="question.question_text[langStore.activeLang]"
            :field-name="`${question.question_text}+${Qindex}`"
            :required="question.is_required"
            v-if="question.input_type === 'Dropdown'"
          />
        </template>
      </template>
    </ShgForm>

    <template> tester </template>

    <template v-slot:actions>
      <ShgButton type="submit" @click="onSubmit"></ShgButton>
    </template>
  </ShgCard>
</template>

<script lang="ts" setup>
import ShgUseForm from '@/hooks';
import { useLangStore } from '@/pinia/lang.store';
import {
  ShgAutocomplete,
  ShgButton,
  ShgCard,
  ShgCheckboxMulti,
  ShgDatePicker,
  ShgForm,
  ShgTextField,
} from 'erp-template-vuetify-components';
import { onMounted, onUnmounted } from 'vue';
import type { SubmissionAttributes } from './IData';

const props = defineProps<{ questionnaire: SubmissionAttributes['questionnaires'][number] }>();

const { form, handleSubmit, values } = ShgUseForm<SubmissionAttributes['questionnaires'][number]>({
  initialValues: props.questionnaire,
});

const langStore = useLangStore();

const onSubmit = handleSubmit((value) => {
  console.log(value);
});

onMounted(() => {
  console.log('mounted ' + props.questionnaire.name);
});

onUnmounted(() => {
  console.log('unMounted ' + props.questionnaire.name);
});
</script>
