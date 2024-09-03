import type { InputType, Lang } from '@/views/type';

interface Options {
  option_text: Lang;
  option_score?: number;
}

interface QuestionDTO {
  question_text: Lang;
  input_type: InputType;
  options: Options[];
  question_score: number;
  is_required: boolean;
}

interface SectionDTO {
  name: string;
  questions: QuestionDTO[];
}

interface CreateQuestionnaireDTO {
  sub_major: string;
  sections: SectionDTO[];
}

export type { CreateQuestionnaireDTO };
