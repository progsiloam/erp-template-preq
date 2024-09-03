import { useAuthStore } from '@/pinia/auto.store';
import type { Document } from './fetchDocument.type';
import type { QuestionnaireType } from './fetchQuestionnaireTypes.type';
import type { Question } from './fetchQuestionsPaginate.type';
import type { Questionnaire } from './fetchQuistionnairesPaginate.type';
import type { Rule } from './fetchRulesPaginate.type';
import type { SubmissionDraft } from './fetchSubmissionDraft.type';
import type { Submission } from './fetchSubmissionPagenate.type';
import type { ApiResponse } from './type';

async function fetchFromApi<T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
  try {
    const apiUrl = new URL(url);

    // Append query parameters if provided
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (Array.isArray(value)) {
          // If the value is an array, append each item individually
          value.forEach((val) => apiUrl.searchParams.append(key, val));
        } else {
          // Otherwise, append the value directly
          apiUrl.searchParams.append(key, value);
        }
      });
    }

    const response = await fetch(apiUrl.toString());
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for handling in the calling code
  }
}

export function fetchQuestionsPaginate(params?: { questionText?: string }): Promise<ApiResponse<Question[]>> {
  return fetchFromApi<Question[]>('http://localhost:3001/api/question', params);
}

export function fetchQuestionnaireTypes(): Promise<ApiResponse<QuestionnaireType[]>> {
  return fetchFromApi<QuestionnaireType[]>('http://localhost:3001/api/major-of-bussiness/list');
}

export function fetchQuistionnairesPaginate(): Promise<ApiResponse<Questionnaire[]>> {
  return fetchFromApi<Questionnaire[]>('http://localhost:3001/api/question-questionnaire');
}

export function fetchQuistionnairesById(id: string): Promise<ApiResponse<Questionnaire>> {
  return fetchFromApi<Questionnaire>(`http://localhost:3001/api/question-questionnaire/${id}`);
}

export function fetchSubmissionPaginate(): Promise<ApiResponse<Submission[]>> {
  const evaluatorName = useAuthStore().activeUser;
  return fetchFromApi<Submission[]>(`http://localhost:3001/api/submission/evaluator/${evaluatorName}`);
}

export function fetchSubmissionById(id: string): Promise<ApiResponse<Submission>> {
  return fetchFromApi<Submission>(`http://localhost:3001/api/submission/${id}`);
}

export function fetchRulesPaginate(): Promise<ApiResponse<Rule[]>> {
  return fetchFromApi<Rule[]>('http://localhost:3001/api/rules');
}

export function fetchQuestionById(id: string): Promise<ApiResponse<Question>> {
  return fetchFromApi<Question>(`http://localhost:3001/api/question/${id}`);
}

export function fetchDocumentById(id: string): Promise<ApiResponse<Document>> {
  return fetchFromApi<Document>(`http://localhost:3001/api/submission/get-file/document/${id}`);
}

export function fetchSubmissionDraftById(id: string): Promise<ApiResponse<SubmissionDraft>> {
  return fetchFromApi<SubmissionDraft>(`http://localhost:3001/api/submission/draft/vendor/${id}`);
}
