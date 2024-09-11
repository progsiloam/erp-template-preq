<template>
  <ShgCard title="Create Question">
    <ShgForm :columns="1" ref="form">
      <v-container>
        <v-row class="d-flex align-center" no-gutters>
          <v-col cols="6">
            <ShgTextField v-model="values.question_text.id" label="Question (ID)" :required="true" />
          </v-col>
          <v-col cols="6">
            <ShgTextField v-model="values.question_text.eng" label="Question (ENG)" :required="true" />
          </v-col>
        </v-row>
        <v-row class="d-flex align-center" no-gutters>
          <v-col>
            <ShgAutocomplete
              v-model="values.input_type"
              label="Select an Option of Input Type"
              textPlaceholder="Please select"
              :items="
                [...inputType].map((type) => ({
                  label: type,
                  value: type,
                }))
              "
            />
          </v-col>
          <v-col v-if="createQuestion.shouldRenderAddOptions()" cols="auto">
            <div class="pa-3" style="margin-top: 19.95px">
              <v-btn
                variant="tonal"
                rounded="2"
                size="small"
                class="bg-orange-darken-3"
                @click="createQuestion.addOptions()"
                style="height: 32px"
                >+ Option</v-btn
              >
            </div>
          </v-col>
        </v-row>
        <div class="mb-6 mb-md-3" v-for="(option, oIndex) in createQuestion.values.options" :key="oIndex">
          <v-row align="start" no-gutters>
            <v-col>
              <v-row no-gutters>
                <v-col cols="12" md="6">
                  <ShgTextField
                    v-model="values.options[oIndex].option_text.id"
                    :label="`Option Text (ID) - ${oIndex + 1}`"
                    :required="true"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <ShgTextField
                    v-model="values.options[oIndex].option_text.eng"
                    :label="`Option Text (ENG) - ${oIndex + 1}`"
                    :required="true"
                  />
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="auto">
              <div class="pa-3" style="margin-top: 19.95px">
                <v-btn
                  style="height: 32px"
                  variant="tonal"
                  rounded="2"
                  size="small"
                  class="bg-error"
                  @click="createQuestion.deleteKey(oIndex)"
                  >Delete</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </ShgForm>

    <template v-slot:actions>
      <div class="d-flex ga-2">
        <BaseButton @click="navigateToBackTableQuestion" color="secondary">Back</BaseButton>
        <ShgButton type="submit" @click="createQuestion.onSubmit"></ShgButton>
      </div>
    </template>
  </ShgCard>
</template>

<script setup lang="ts">
import { inputType } from '@/views/type';
import { BaseButton, ShgAutocomplete, ShgButton, ShgCard, ShgForm, ShgTextField } from 'erp-template-vuetify-components';
import { storeToRefs } from 'pinia';
import { onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNewQuestion } from './useNewQuestion.store';

const router = useRouter();

const navigateToBackTableQuestion = () => {
  router.push({ name: 'questionOverview' });
};

const createQuestion = useNewQuestion();
const { form, values } = storeToRefs(createQuestion);

onUnmounted(() => {
  createQuestion.$dispose();
});
</script>
