import AppLayout from '@/layouts/AppLayout.vue';
import AboutView from '@/views/AboutView.vue';
import ExampleFormPreQ from '@/views/ExampleFormPreQ.vue';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'New Template',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/about',
          name: 'About',
          component: AboutView,
        },
        {
          path: 'question',
          redirect: { name: 'questionOverview' },
          name: 'question',
          children: [
            {
              path: '',
              name: 'questionOverview',
              component: () => import('@/views/dashboard/question/index.vue'),
            },
            {
              path: 'create',
              name: 'create',
              component: () => import('@/views/dashboard/question/create/index.vue'),
            },
            {
              path: 'edit/:id',
              name: 'editQuestion',
              component: () => import('@/views/dashboard/question/edit/index.vue'),
            },
          ],
        },
        {
          path: '/questionaire',
          redirect: { name: 'questionaire' },
          name: 'questionaire',
          children: [
            {
              path: '',
              name: 'questionaireOverview',
              component: () => import('@/views/dashboard/questionnaire/index.vue'),
            },
            {
              path: 'createQuestionaire',
              name: 'createQuestionaire',
              component: () => import('@/views/dashboard/questionnaire/create/index.new.vue'),
            },
            {
              path: 'submit',
              name: 'submitQuestionaire',
              component: () => import('@/views/dashboard/vendor/submit/index.vue'),
            },
          ],
        },
        {
          path: '/form-preq',
          name: 'Example Form PreQ',
          component: ExampleFormPreQ,
        },
      ],
    },
  ],
});

export default router;
