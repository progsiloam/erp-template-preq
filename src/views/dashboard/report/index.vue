<template>
  <h2 class="mb-4">Report</h2>
  <v-container>
    <v-row>
      <v-col cols="2" md="4">
        <v-card :to="{ name: 'reportActionHistory', params: { id: 1 } }" link>
          <v-card-title><BaseButtonIcon class="mt-3" icon="mdi-medal-outline" /></v-card-title>
          <v-card-text class="mt-3">
            <h4>Report Action History Pre-Qualification</h4>
            <p class="text-blue-lighten-1">2 Data Available</p>
            <div class="bg-grey-lighten-4 mt-4 rounded pa-3">
              <p class="text-grey-darken-3">This is the list of all the action history log for Vendor Pre-Qualification</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { BaseButtonIcon } from '@siloamhospitals/erp-template-vuetify-components';
</script>
