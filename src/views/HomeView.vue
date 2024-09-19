<template>
  <div>
    <h1>This is an home page</h1>
    lorem10000
    <ShgButton type="revise" icon-only />
    <ShgButton type="revise" />
    <ShgButton type="revise" icon-only size="small" />
    <ShgButton type="revise" size="small" />
    <ShgButton type="view" icon-only />
    <ShgButton type="view" icon-only override-color="primary" />
    <!-- <BaseButton color="warning" icon="mdi-camera-wireless-outline" /> -->
    <BaseButtonIcon color="warning" icon="mdi-camera-wireless-outline" />
  </div>
</template>

<script setup lang="ts">
import { BaseButtonIcon, ShgButton } from '@siloamhospitals/erp-template-vuetify-components';
</script>
