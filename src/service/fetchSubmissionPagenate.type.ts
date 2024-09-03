interface Option {
  option_text: string;
  require_file_attachment: boolean;
  _id: string;
}

const inputType = ['Short answer', 'Paragraph', 'Multiple choice', 'Checkboxes', 'Dropdown', 'File Upload', 'File Upload (expiry)', 'Date'] as const;

interface Question {
  question_text: string;
  input_type: (typeof inputType)[number];
  options: Option[];
  is_required: boolean;
  depend_on: string;
  depend_value: string;
  user_answer: string[];
  version: number;
  point: number;
  _id: string;
}

interface Section {
  section_name: string;
  questions: Question[];
  _id: string;
}

interface Evaluation {
  evaluation_note: string;
  point: number;
  username: string;
  _id: string;
}

interface Submission {
  _id: string;
  type: string;
  vendor_name: string;
  sections: Section[];
  version: number;
  evaluations: Evaluation[];
  __v: number;
}

export type { Submission };
