import type { Lang } from '@/views/type';

interface Option {
  option_text: Lang;
  child_questions: Question[];
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

interface Question {
  _id: string;
  question_text: Lang;
  input_type: (typeof inputType)[number];
  options: Option[];
}

export type { Question };
