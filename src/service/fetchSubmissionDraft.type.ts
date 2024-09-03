import type { InputType } from '@/views/type';

interface GeneralInfo {
  legal_address: string[];
  operational_address: string[];
  director_name: string[];
  contact_person_name: string[];
  phone_number: string[];
  email_address: string[];
  date_incorporation: string[];
  last_change_organization: string[];
  years_of_establishment: string[];
  code_of_conduct: string[];
  vrf_form: [string, string];
  surat_etika: [string, string];
  npwp: [string, string];
  nib: [string, string];
  akta_pendirian: [string, string];
  sppkp: [string, string];
  iujk: [string, string];
  sbu: string[];
  product_list: [string, string];
  iso: string[];
  project_reference: string[];
  checking_account: string[];
  financial_statement: [string, string];
  paid_up_capital: string[];
  location_check: string[];
  location_verification: string[];
}

interface OptionText {
  id: string;
  eng: string;
}

interface Option {
  option_text: OptionText;
  option_score: number;
}

interface QuestionText {
  id: string;
  eng: string;
}

interface Question {
  question_text: QuestionText;
  input_type: InputType;
  options: Option[];
  question_score: number;
  is_required: boolean;
  user_answer: string[];
}

interface Section {
  name: string;
  questions: Question[];
}

interface Evaluation {
  username: string;
}

interface Submission {
  sub_major: string;
  sections: Section[];
  evaluations: Evaluation[];
  version: number;
}

interface SubmissionDraft {
  _id: string;
  vendor_id: string;
  major_of_business_ids: string[];
  general_info: GeneralInfo;
  submissions: Submission[];
  __v: number;
}

export type { SubmissionDraft };
