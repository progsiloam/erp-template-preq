interface Lang {
  id: string;
  eng: string;
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
  'Multiple select',
] as const;

type InputType = (typeof inputType)[number];

export { inputType };
export type { InputType, Lang };
