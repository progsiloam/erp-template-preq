<template>
  <ShgCard title="Edit Question">
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
            <div class="mx-2">
              <ShgAutocomplete
                v-model="values.input_type"
                label="Select an Option of Input Type"
                textPlaceholder="Please select"
                :items="[...inputType]"
              />
            </div>
          </v-col>
          <v-col v-if="editQuestion.shouldRenderAddOptions()" cols="auto">
            <v-btn
              variant="tonal"
              rounded="2"
              size="small"
              class="bg-orange-darken-3 mt-4"
              @click="editQuestion.addOptions()"
              >+ Option</v-btn
            >
          </v-col>
        </v-row>
        <div class="mb-6 mb-md-3" v-for="(option, oIndex) in editQuestion.values.options" :key="oIndex">
          <v-row align="center" no-gutters>
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
              <div class="mx-2">
                <v-btn variant="tonal" rounded="2" size="small" class="bg-error" @click="editQuestion.deleteKey(oIndex)"
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
        <ShgButton type="submit" @click="editQuestion.onSubmit"></ShgButton>
      </div>
    </template>
  </ShgCard>
</template>

<script setup lang="ts">
import { BaseButton, ShgAutocomplete, ShgButton, ShgCard, ShgForm, ShgTextField } from 'erp-template-vuetify-components';
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
