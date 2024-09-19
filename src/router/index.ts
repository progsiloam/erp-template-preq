import AppLayout from '@/layouts/AppLayout.vue';
import AboutView from '@/views/AboutView.vue';
import ExampleFormPreQ from '@/views/ExampleFormPreQ.vue';
import HomeView from '@/views/HomeView.vue';
import Test from '@/views/Test.vue';
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
        {
          path: '/vendor',
          name: 'vendor',
          children: [
            {
              path: '',
              name: 'vendorOverview',
              component: () => import('@/views/dashboard/master-data-vendor/index.vue'),
            },
            {
              path: 'pre-q-detail/:vendor_name',
              name: 'vendorPreQDetail',
              children: [
                {
                  path: '',
                  name: 'vendorPreQDetailOverview',
                  component: () => import('@/views/dashboard/master-data-vendor/PreQDetail.vue'),
                },
                {
                  path: 'view/:vendor_name',
                  name: 'vendorPreQDetailPreQView',
                  component: () => import('@/views/dashboard/document-view/index.vue'),
                },
              ],
            },
          ],
        },
        {
          path: '/major-of-business',
          name: 'majorOfBusiness',
          component: () => import('@/views/dashboard/master-data-major/index.vue'),
        },
        {
          path: '/report',
          name: 'report',
          children: [
            {
              path: '',
              name: 'reportOverview',
              component: () => import('@/views/dashboard/report/index.vue'),
            },
            {
              path: 'report-action-history/:id',
              name: 'reportActionHistory',
              component: () => import('@/views/dashboard/report/action-history.vue'),
            },
          ],
        },
        {
          path: '/document-collection',
          name: 'documentCollection',
          children: [
            {
              path: 'view',
              name: 'documentCollectionOverview',
              component: () => import('@/views/dashboard/document-collection/index.vue'),
            },
            {
              path: 'approve',
              name: 'approveDocumentCollection',
              component: () => import('@/views/dashboard/document-collection/approve.vue'),
            },
            {
              path: 'revise',
              name: 'reviseDocumentCollection',
              component: () => import('@/views/dashboard/document-collection/revise.vue'),
            },
            {
              path: 'reject',
              name: 'rejectDocumentCollection',
              component: () => import('@/views/dashboard/document-collection/reject.vue'),
            },
          ],
        },
        {
          path: '/test',
          name: 'Example Form PreQ',
          component: Test,
        },
        {
          path: '/document-pre-scoring-vm',
          name: 'documentPreScoringVM',
          children: [
            {
              path: '',
              name: 'documentPreScoringVMOverview',
              component: () => import('@/views/dashboard/document-pre-scoring/VM/index.vue'),
            },
            {
              path: ':doc_id',
              name: 'documentPreScoringVMDetail',
              component: () => import('@/views/dashboard/document-pre-scoring/VM/Vmscoring.vue'),
            },
          ],
        },
        {
          path: '/document-pre-scoring-sme',
          name: 'documentPreScoringSME',
          children: [
            {
              path: '',
              name: 'documentPreScoringSMEOverview',
              component: () => import('@/views/dashboard/document-pre-scoring/SME/index.vue'),
            },
            {
              path: ':doc_id',
              name: 'documentPreScoringSMEDetail',
              component: () => import('@/views/dashboard/document-pre-scoring/SME/Smescoring.vue'),
            },
          ],
        },
        {
          path: '/document-pre-scoring-hm',
          name: 'documentPreScoringHM',
          children: [
            {
              path: '',
              name: 'documentPreScoringHMOverview',
              component: () => import('@/views/dashboard/document-pre-scoring/HM/index.vue'),
            },
            {
              path: ':doc_id',
              name: 'documentPreScoringHMDetail',
              component: () => import('@/views/dashboard/document-pre-scoring/HM/Hmscoring.vue'),
            },
          ],
        },
        {
          path: '/preq-release',
          name: 'preQRelease',
          component: () => import('@/views/dashboard/preq-release/index.vue'),
        },
        {
          path: '/pre-q-score',
          name: 'preQScore',
          component: () => import('@/views/dashboard/config/pre-q-score/index.vue'),
        },
        {
          path: '/pre-q-validity',
          name: 'preQValidity',
          component: () => import('@/views/dashboard/config/pre-q-validity/index.vue'),
        },
      ],
    },
  ],
});

export default router;
