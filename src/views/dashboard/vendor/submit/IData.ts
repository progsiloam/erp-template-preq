interface Language {
  id: string;
  eng: string;
}

interface Options {
  option_text: Language;
  option_score: number;
}

const inputType = [
  'Short answer',
  'Paragraph',
  'Multiple choice',
  'Checkboxes',
  'Dropdown',
  'File Upload',
  'File Upload (expiry)',
  'Date',
] as const;

interface QuestionAttributes {
  question_text: Language;
  input_type: (typeof inputType)[number];
  options: Options[];
  question_score: number;
  user_answer: string[];
  is_marked?: boolean;
  comment?: string;
  total_score?: number;
}

interface Evaluation {
  username: string;
  sub_major_score?: number;
  general_info_score?: number;
}

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
  vrf_form: string[];
  surat_etika: string[];
  npwp: string[];
  nib: string[];
  akta_pendirian: string[];
  sppkp: string[];
  iujk: string[];
  sbu: string[];
  product_list: string[];
  iso: string[];
  project_reference: string[];
  checking_account: string[];
  financial_statement: string[];
  paid_up_capital: string[];
  location_check: string[];
  location_verification: string[];
}

interface SectionQuestion {
  name: string;
  questions: QuestionAttributes[];
}

interface QuestionnaireAttribute {
  name: string;
  section: SectionQuestion[];
}

interface SubmissionAttributes {
  vendor_id: string;
  general_info: GeneralInfo;
  questionnaires: QuestionnaireAttribute[];
  evaluations: Evaluation[];
  note: string;
  final_score: number;
  status_submission: string;
  created_on: Date;
  version: number;
}

export type { SubmissionAttributes };
