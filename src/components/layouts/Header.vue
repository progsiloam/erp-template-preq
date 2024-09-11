<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="navStore.expandMenu"></v-app-bar-nav-icon>

    <v-app-bar-title>
      <v-row align="center">
        <v-col>
          <v-menu>
            <template v-slot:activator="{ props }">
              <BaseButton color="secondary" v-bind="props" prepend-icon="mdi-account-circle-outline">
                {{ authStore.activeUser }}
              </BaseButton>
            </template>

            <v-list>
              <v-list-item @click="authStore.activeUser = user" v-for="user in authStore.userList" :key="user">
                <v-list-item-title>{{ user }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/pinia/auto.store';
import { useNavStore } from '@/stores';
import { BaseButton } from 'erp-template-vuetify-components';
import { ref } from 'vue';

const navStore = useNavStore();

const authStore = useAuthStore();

const editProfile = () => {
  alert('Edit Profile');
};

const changePassword = () => {
  alert('Change Password');
};

const logout = () => {
  alert('Logout');
};
</script>
