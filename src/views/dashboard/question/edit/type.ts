import type { InputType, Lang } from '@/views/type';

interface Option {
  option_text: Lang;
}

interface UpdateQuestionDTO {
  question_text: Lang;
  input_type: InputType;
  options: Option[];
  _id?: string;
}

export type { UpdateQuestionDTO };
