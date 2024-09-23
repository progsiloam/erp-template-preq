interface Content {
  id: string;
  eng: string;
}

interface Options {
  option_text: Content;
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

type MarkedQuestion = {
  approver_id: string;
  state: 'COLLECTION' | 'REVIEW';
  comment?: string; // submission
};

export interface Questions {
  question_text: Content;
  input_type: (typeof inputType)[number];
  options: Options[];
  question_score: number;
  user_answer: string[]; // cut dari question
  is_marked?: MarkedQuestion[]; // submission
  total_score?: number; // submission
  is_required: boolean;
}

interface Evaluation {
  username: string;
  sub_major_score?: number;
  general_info_score?: number;
}

// IUJK dihilangkan
// SBU dihilangkan
// data dari vob dihilangkan
interface GeneralInfo {
  date_incorporation: Questions;
  last_change_organization: Questions;
  years_of_establishment: Questions;
  code_of_conduct: Questions;
  vrf_form: Questions;
  surat_etika: Questions;
  npwp: Questions;
  nib: Questions;
  akta_pendirian: Questions;
  sppkp: Questions;
  product_list: Questions;
  iso: Questions;
  project_reference: Questions;
  checking_account: Questions;
  financial_statement: Questions;
  paid_up_capital: Questions;
  location_check: Questions;
  location_verification: Questions;
}

interface SectionQuestion {
  name: string;
  questions: Questions[];
}

interface QuestionnaireAttribute {
  name: string;
  sections: SectionQuestion[];
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
