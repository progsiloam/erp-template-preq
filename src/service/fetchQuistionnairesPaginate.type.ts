import { InputType, Lang } from '@/views/type';

interface Option {
  option_text: Lang;
  option_score: number;
}

interface Question {
  question_text: Lang;
  input_type: InputType;
  question_score: number;
  options: Option[];
  is_required: boolean;
}

interface Section {
  name: string;
  questions: Question[];
}

interface Questionnaire {
  _id: string;
  sub_major: string;
  sections: Section[];
  evaluators: string[];
  version: number;
}

export type { Questionnaire };
