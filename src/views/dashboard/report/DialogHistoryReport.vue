<template>
  <BaseDialog :title="`${_id}`">
    <template v-slot:default>
      <v-container style="max-width: 600px">
        <v-timeline density="compact" side="end">
          <!-- Document Full Approved -->
          <v-timeline-item dot-color="success" size="small">
            <h4>Document Fully Approved</h4>
          </v-timeline-item>
          <v-timeline-item hide-dot>
            <p class="mt-n7">Doc fully approved by Vendor Management, SME and Head of Vendor Management</p>
            <v-row class="mt-1">
              <v-col cols="3">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="3">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="3">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
            </v-row>
            <p class="mt-4">08/19/2022 09:06:42</p>
          </v-timeline-item>

          <!-- Document Approved (Document Review) -->
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <template v-slot:icon>
              <v-icon icon="mdi-check" size="x-small" />
            </template>
            <h4>Document Approved (Document Review)</h4>
          </v-timeline-item>
          <v-timeline-item hide-dot>
            <p class="mt-n7">Document approved by Vendor Management and SME</p>
            <p class="mt-4">08/19/2022 09:06:42</p>
          </v-timeline-item>

          <!-- Document Approved (Document Review) -->
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <template v-slot:icon>
              <v-icon icon="mdi-check" size="x-small" />
            </template>
            <h4>Document Approved (Document Review)</h4>
          </v-timeline-item>
          <v-timeline-item hide-dot>
            <p class="mt-n7">Document approved by Vendor Management and SME</p>
            <p class="mt-4">08/19/2022 09:06:42</p>
          </v-timeline-item>

          <!-- Document In-Review (Document Review) -->
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <template v-slot:icon>
              <v-icon icon="mdi-check" size="x-small" />
            </template>
            <h4>Document In-Review (Document Review)</h4>
          </v-timeline-item>
          <v-timeline-item hide-dot>
            <p class="mt-n7">08/19/2022 09:06:42</p>
          </v-timeline-item>

          <!-- Document Approved (Document Collection) -->
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <template v-slot:icon>
              <v-icon icon="mdi-check" size="x-small" />
            </template>
            <h4>Document Approved (Document Collection)</h4>
          </v-timeline-item>
          <v-timeline-item hide-dot>
            <v-row class="mt-n7">
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
            </v-row>
            <div class="mt-3 bg-grey-lighten-4 pa-3 rounded">
              <h5 class="mb-2">Approver's Note</h5>
              <p>All the documents are completed</p>
            </div>
            <p class="mt-4">08/19/2022 09:06:42</p>
          </v-timeline-item>

          <!-- Document In-Review (Document Collection) -->
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <template v-slot:icon>
              <v-icon icon="mdi-check" size="x-small" />
            </template>
            <h4>Document In-Review (Document Collection)</h4>
          </v-timeline-item>
          <v-timeline-item hide-dot>
            <p class="mt-n7">Documents are currently reviewed</p>
            <v-row class="mt-1">
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
            </v-row>
            <p class="mt-5">08/19/2022 09:06:42</p>
          </v-timeline-item>

          <!-- Revisions -->
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <template v-slot:icon>
              <v-icon icon="mdi-check" size="x-small" />
            </template>
            <h4>Revisions</h4>
          </v-timeline-item>
          <v-timeline-item hide-dot>
            <p class="mt-n7">Documents sent back to the requester due to the need of revisions</p>
            <v-row class="mt-1">
              <v-col cols="3">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="3">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="3">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
            </v-row>
            <p class="mt-5">08/19/2022 09:06:42</p>
          </v-timeline-item>

          <!-- Document In-Review (Document Collection) -->
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <template v-slot:icon>
              <v-icon icon="mdi-check" size="x-small" />
            </template>
            <h4>Document In-Review (Document Collection)</h4>
          </v-timeline-item>
          <v-timeline-item hide-dot>
            <p class="mt-n7">Documents are currently reviewed</p>
            <v-row class="mt-1">
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
            </v-row>
            <p class="mt-5">08/19/2022 09:06:42</p>
          </v-timeline-item>

          <!-- Document Submited -->
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <template v-slot:icon>
              <v-icon icon="mdi-check" size="x-small" />
            </template>
            <h4>Document Submited</h4>
          </v-timeline-item>
          <v-timeline-item hide-dot>
            <p class="mt-n7">Document has been submitted : P0001</p>
            <v-row class="mt-1">
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
              <v-col cols="4">
                <div class="bg-light-blue-lighten-5 rounded text-center pa-1">Gilanghadi</div>
              </v-col>
            </v-row>
            <p class="mt-5">08/19/2022 09:06:42</p>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </template>
    <template v-slot:actions>
      <BaseButton @click="handleCloseDialog" color="primary" text="Okay" />
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { fetchQuestionsPaginate } from '@/service/api';
import type { Question } from '@/service/fetchQuestionsPaginate.type';
import { BaseButton, BaseDialog } from '@siloamhospitals/erp-template-vuetify-components';
import { onMounted, ref, toRefs } from 'vue';
import { closeDialog } from 'vue3-promise-dialog';

const props = defineProps<{
  _id?: number;
}>();
const { _id } = toRefs(props);

const questionList = ref<Question[]>([]);
const selectedQuestions = ref<Question[]>([]);

const timeline = ref<Array<{ id: number; text: string; time: string }>>([]);

const input = ref<string>('');
const comment = () => {
  if (input.value) {
    timeline.value.push({
      id: timeline.value.length + 1,
      text: input.value,
      time: new Date().toLocaleTimeString(),
    });
    input.value = '';
  }
};

const handleCloseDialog = () => {
  closeDialog(null);
};

const handleRelease = () => {
  closeDialog(null);
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
</script>
