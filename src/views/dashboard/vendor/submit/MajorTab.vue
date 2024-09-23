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
            :field-name="`${values.name}-section[${Sindex}]-questions[${Qindex}]`"
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
            :field-name="`${values.name}-section[${Sindex}]-questions[${Qindex}]`"
            :required="question.is_required"
            v-if="question.input_type === 'Checkboxes'"
          />
          <ShgDatePicker
            v-model="values.sections[Sindex].questions[Qindex].user_answer[0]"
            :label="question.question_text[langStore.activeLang]"
            :field-name="`${values.name}-section[${Sindex}]-questions[${Qindex}]`"
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
            :field-name="`${values.name}-section[${Sindex}]-questions[${Qindex}]`"
            :required="question.is_required"
            v-if="question.input_type === 'Dropdown'"
          />
          <PreQFileUploadWithExpiry
            v-model="values.sections[Sindex].questions[Qindex].user_answer"
            :required="question.is_required"
            :label="question.question_text[langStore.activeLang]"
            :field-name="`${values.name}-section[${Sindex}]-questions[${Qindex}]`"
            v-if="question.input_type === 'File Upload (expiry)'"
          />
          <PreQFileUpload
            v-model="values.sections[Sindex].questions[Qindex].user_answer[0]"
            :required="question.is_required"
            :label="question.question_text[langStore.activeLang]"
            :field-name="`${values.name}-section[${Sindex}]-questions[${Qindex}]`"
            v-if="question.input_type === 'File Upload'"
          />
        </template>
      </template>
    </ShgForm>

    <template v-slot:actions>
      <ShgButton type="submit" @click="onSubmit"></ShgButton>
    </template>
  </ShgCard>
</template>

<script lang="ts" setup>
import PreQFileUpload from '@/components/PreQFileUpload.vue';
import PreQFileUploadWithExpiry from '@/components/PreQFileUploadWithExpiry.vue';
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
} from '@siloamhospitals/erp-template-vuetify-components';
import { onMounted, onUnmounted, toRaw, watch } from 'vue';
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

watch(
  () => langStore.activeLang,
  (newLang, oldLang) => {
    let newValues = toRaw(values.value);

    newValues.sections = newValues.sections.map((section) => {
      section.questions = section.questions.map((question) => {
        const isQuestionHaveOption = question.options && question.options.length > 0;

        if (!isQuestionHaveOption) {
          return question;
        }

        const alreadyAnswered = question.user_answer.length > 0;

        if (!alreadyAnswered) {
          return question;
        }

        question.user_answer = question.user_answer.map((ans) => {
          const option = question.options.find((opt) => {
            const text = opt.option_text[oldLang];
            return text === ans;
          });

          return option ? option.option_text[newLang] : ans;
        });

        return question;
      });

      return section;
    });

    values.value.sections = newValues.sections;
  },
);
</script>
