<template>
  <v-col :id="id" cols="12" :md="columnSize">
    <v-label v-if="label" class="mb-1">
      {{ label }}
    </v-label>
    <br />

    <!-- when file exist, show this detail -->
    <div class="bg-grey-lighten-5 rounded py-1 px-2" style="width: fit-content" v-if="fileDetail?.id">
      <v-row no-gutters justify="center" align="center">
        <v-col cols="auto">
          <v-row no-gutters justify="center" align="center" class="flex-nowrap">
            <v-col cols="auto">
              <div class="mx-1">
                <v-icon class="text-medium-emphasis">mdi-clock-time-four-outline</v-icon>
              </div>
            </v-col>
            <v-col cols="auto">
              <div class="text-subtitle-2 text-medium-emphasis">
                {{ moment(model![0]).format('DD MMM YYYY') }}
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="auto">
          <span class="mx-1"> | </span>
        </v-col>

        <v-col cols="auto">
          <div class="bg-blue-lighten-5 text-blue-darken-1 px-1 py-1 rounded-sm">
            <v-row no-gutters justify="center" align="center" class="flex-nowrap">
              <v-col>
                <div class="mx-1">
                  <v-icon class="">mdi-paperclip-check</v-icon>
                </div>
              </v-col>
              <v-col>
                <div class="text-subtitle-2">
                  {{ shortenFilename(fileDetail.file_name) }}
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col cols="auto">
          <div class="mx-1">
            <ShgButton type="edit" icon-only @click="handleUpdateExpiredDate" />
          </div>
        </v-col>

        <v-col cols="auto">
          <div class="mx-1">
            <ShgButton type="delete" icon-only @click="handleDeleteDocument" />
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- when no file, trigger upload modal -->
    <VeeField :name="fieldName || label" v-model="model" :rules="validationRules" v-slot="{ errorMessage }">
      <BaseButton color="primary" @click="handleFileUpload" v-if="!fileDetail?.id">
        <template v-slot:default>
          <v-row no-gutters justify="center" align="center" class="flex-nowrap">
            <v-col>
              <div class="mx-1">
                <v-icon class="">mdi-paperclip-check</v-icon>
              </div>
            </v-col>
            <v-col>
              <div class="text-subtitle-2">Add File</div>
            </v-col>
          </v-row>
        </template>
      </BaseButton>

      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>
    </VeeField>
  </v-col>
</template>

<script setup lang="ts">
import { useFile } from '@/composables';
import { shortenFilename } from '@/utils';
import { BaseButton, ShgButton, useInput, type UploadedFileData } from '@siloamhospitals/erp-template-vuetify-components';
import moment from 'moment';
import { onMounted, ref } from 'vue';
import { openDialog } from 'vue3-promise-dialog';
import ShgFileUploadWithExpiryUpdate from './PreQFileUploadWithExpiryUpdate.vue';
import ShgFileUploadWithExpiryUpload from './PreQFileUploadWithExpiryUpload.vue';

const componentName = 'ShgFileUploadWithExpiry';
defineOptions({
  name: componentName,
});

type Props = {
  fieldName?: string;
  required: boolean;
  label: string;
};

const props = defineProps<Props>();

const { id, validationRules, columnSize } = useInput(componentName, props);

const model = defineModel<string[]>();
const fileDetail = ref<UploadedFileData | null>();

const handleFileUpload = async () => {
  type Response = {
    id: string;
    date: string;
    fileName: string;
  };

  const data = (await openDialog(ShgFileUploadWithExpiryUpload)) as Response | undefined;

  if (!data) {
    return;
  }

  model.value = [data.date, data.id];

  fileDetail.value = {
    file_name: data.fileName,
    id: data.id,
  };
};

const handleUpdateExpiredDate = async () => {
  type RetData = {
    date: string;
  };

  const data = (await openDialog(ShgFileUploadWithExpiryUpdate, {
    fileId: `${fileDetail.value!.id}`,
    date: model.value![0],
  })) as RetData | undefined;

  if (!data) {
    return;
  }

  model.value![0] = data.date;
};

const { deleteFile, getFileData } = useFile();

const handleDeleteDocument = async () => {
  await deleteFile(fileDetail.value!.id);

  fileDetail.value = null;

  model.value = [];
};

const getDocument = async () => {
  if (!model.value?.[1]) {
    return;
  }

  const result = await getFileData(model.value[1]);

  fileDetail.value = {
    file_name: result.data!.filename,
    id: result.data!.id,
  };

  model.value = [result.data!.expired_at!, result.data!.id];
};

onMounted(async () => {
  getDocument();
});
</script>

<style scoped>
.error-message {
  color: #b34c5f;
  font-size: 12px;
  margin-top: 6px;
  margin-left: 16px;
}
</style>
