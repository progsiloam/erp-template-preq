import type { SubmissionAttributes } from './IData';

const submission: SubmissionAttributes = {
  vendor_id: '123456',
  general_info: {
    legal_address: ['1234 Elm St'],
    operational_address: ['5678 Oak Ave'],
    director_name: ['John Doe'],
    contact_person_name: ['Jane Smith'],
    phone_number: ['+1234567890'],
    email_address: ['contact@company.com'],
    date_incorporation: ['2000-01-01'],
    last_change_organization: ['2023-01-01'],
    years_of_establishment: ['23'],
    code_of_conduct: ['Yes'],
    vrf_form: ['VRF-001'],
    surat_etika: ['SE-001'],
    npwp: ['NPWP-123456'],
    nib: ['NIB-123456'],
    akta_pendirian: ['AP-123456'],
    sppkp: ['SPPKP-123456'],
    iujk: ['IUJK-123456'],
    sbu: ['SBU-123456'],
    product_list: ['Product A', 'Product B'],
    iso: ['ISO 9001'],
    project_reference: ['Project A', 'Project B'],
    checking_account: ['Account-123456'],
    financial_statement: ['FS-2023'],
    paid_up_capital: ['1,000,000'],
    location_check: ['Checked'],
    location_verification: ['Verified'],
  },
  questionnaires: [
    {
      name: 'IT Hardware Evaluation',
      section: [
        {
          name: 'General Information',
          questions: [
            {
              question_text: { id: 'q1', eng: "What is your company's primary business?" },
              input_type: 'Short answer',
              options: [],
              question_score: 10,
              user_answer: ['Technology Services'],
              is_marked: false,
            },
            {
              question_text: { id: 'q2', eng: 'How many years have you been in operation?' },
              input_type: 'Short answer',
              options: [],
              question_score: 5,
              user_answer: ['23'],
              is_marked: false,
              comment: 'Established company',
            },
            {
              question_text: { id: 'q3', eng: 'Select your certifications' },
              input_type: 'Checkboxes',
              options: [
                { option_text: { id: 'opt1', eng: 'ISO 9001' }, option_score: 5 },
                { option_text: { id: 'opt2', eng: 'ISO 14001' }, option_score: 3 },
                { option_text: { id: 'opt3', eng: 'OHSAS 18001' }, option_score: 2 },
              ],
              question_score: 10,
              user_answer: ['ISO 9001', 'OHSAS 18001'],
              is_marked: true,
            },
          ],
        },
        {
          name: 'Product and Services',
          questions: [
            {
              question_text: { id: 'q4', eng: 'What products do you offer?' },
              input_type: 'Short answer',
              options: [],
              question_score: 8,
              user_answer: ['Laptops, Servers, Networking Equipment'],
              is_marked: false,
            },
            {
              question_text: { id: 'q5', eng: 'Upload your product catalog' },
              input_type: 'File Upload',
              options: [],
              question_score: 15,
              user_answer: ['product_catalog.pdf'],
              is_marked: false,
              comment: 'Catalog uploaded',
            },
            {
              question_text: { id: 'q6', eng: 'Rate the quality of your products' },
              input_type: 'Multiple choice',
              options: [
                { option_text: { id: 'opt1', eng: 'Excellent' }, option_score: 10 },
                { option_text: { id: 'opt2', eng: 'Good' }, option_score: 8 },
                { option_text: { id: 'opt3', eng: 'Average' }, option_score: 5 },
                { option_text: { id: 'opt4', eng: 'Poor' }, option_score: 2 },
              ],
              question_score: 10,
              user_answer: ['Excellent'],
              is_marked: true,
              comment: 'Rated as Excellent',
            },
          ],
        },
        {
          name: 'Financial and Legal Information',
          questions: [
            {
              question_text: { id: 'q7', eng: 'Do you have any outstanding legal disputes?' },
              input_type: 'Multiple choice',
              options: [
                { option_text: { id: 'opt1', eng: 'Yes' }, option_score: 0 },
                { option_text: { id: 'opt2', eng: 'No' }, option_score: 10 },
              ],
              question_score: 5,
              user_answer: ['No'],
              is_marked: true,
            },
            {
              question_text: { id: 'q8', eng: 'Upload your latest financial statement' },
              input_type: 'File Upload',
              options: [],
              question_score: 10,
              user_answer: ['financial_statement_2023.pdf'],
              is_marked: true,
              comment: 'Statement uploaded',
            },
          ],
        },
      ],
    },
    {
      name: 'Supplier Capabilities',
      section: [
        {
          name: 'Operational Capacity',
          questions: [
            {
              question_text: { id: 'q9', eng: 'What is the size of your manufacturing facility?' },
              input_type: 'Short answer',
              options: [],
              question_score: 7,
              user_answer: ['5000 sqm'],
              is_marked: false,
            },
            {
              question_text: { id: 'q10', eng: 'How many employees do you have?' },
              input_type: 'Short answer',
              options: [],
              question_score: 6,
              user_answer: ['200'],
              is_marked: false,
            },
          ],
        },
      ],
    },
  ],
  evaluations: [
    {
      username: 'evaluator_1',
      sub_major_score: 85,
      general_info_score: 90,
    },
  ],
  note: 'Submission is comprehensive and well-documented.',
  final_score: 92,
  status_submission: 'approved',
  created_on: new Date('2024-09-10'),
  version: 2,
};

export { submission };
