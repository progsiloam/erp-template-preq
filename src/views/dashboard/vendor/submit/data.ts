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
      name: 'Consulting',
      sections: [
        {
          name: 'Operational Capacity',
          questions: [
            {
              is_required: true,
              question_text: {
                id: 'Berapa ukuran fasilitas manufaktur Anda?',
                eng: 'What is the size of your manufacturing facility?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Small', id: 'Kecil' } },
                { option_score: 10, option_text: { eng: 'Medium', id: 'Menengah' } },
                { option_score: 10, option_text: { eng: 'Large', id: 'Besar' } },
              ],
              question_score: 7,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apa hobi Anda?',
                eng: 'What are your hobbies?',
              },
              input_type: 'Checkboxes',
              options: [
                { option_score: 5, option_text: { eng: 'Reading', id: 'Membaca' } },
                { option_score: 5, option_text: { eng: 'Traveling', id: 'Bepergian' } },
                { option_score: 5, option_text: { eng: 'Cooking', id: 'Memasak' } },
                { option_score: 5, option_text: { eng: 'Sports', id: 'Olahraga' } },
                { option_score: 5, option_text: { eng: 'Other', id: 'Lainnya' } },
              ],
              question_score: 5,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: true,
              question_text: {
                id: 'Kapan fasilitas manufaktur Anda mulai beroperasi?',
                eng: 'When did your manufacturing facility start operating?',
              },
              input_type: 'Date',
              options: [],
              question_score: 8,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: true,
              question_text: {
                id: 'Apa jenis industri utama dari fasilitas manufaktur Anda?',
                eng: 'What is the primary industry type of your manufacturing facility?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Automotive', id: 'Otomotif' } },
                { option_score: 10, option_text: { eng: 'Electronics', id: 'Elektronik' } },
                { option_score: 10, option_text: { eng: 'Textiles', id: 'Tekstil' } },
                { option_score: 10, option_text: { eng: 'Food & Beverage', id: 'Makanan & Minuman' } },
                { option_score: 10, option_text: { eng: 'Other', id: 'Lainnya' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
          ],
        },
        {
          name: 'Financial Details',
          questions: [
            {
              is_required: true,
              question_text: {
                id: 'Apa total pendapatan tahunan perusahaan Anda?',
                eng: "What is your company's total annual revenue?",
              },
              input_type: 'Short answer',
              options: [],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apakah perusahaan Anda terdaftar di bursa saham?',
                eng: 'Is your company listed on the stock exchange?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 5, option_text: { eng: 'Yes', id: 'Ya' } },
                { option_score: 5, option_text: { eng: 'No', id: 'Tidak' } },
              ],
              question_score: 5,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: true,
              question_text: {
                id: 'Berapa jumlah karyawan di perusahaan Anda?',
                eng: 'How many employees does your company have?',
              },
              input_type: 'Short answer',
              options: [],
              question_score: 8,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: true,
              question_text: {
                id: 'Apa sumber utama pendapatan perusahaan Anda?',
                eng: "What is your company's primary source of revenue?",
              },
              input_type: 'Checkboxes',
              options: [
                { option_score: 5, option_text: { eng: 'Product Sales', id: 'Penjualan Produk' } },
                { option_score: 5, option_text: { eng: 'Service Fees', id: 'Biaya Layanan' } },
                { option_score: 5, option_text: { eng: 'Consulting', id: 'Konsultasi' } },
                { option_score: 5, option_text: { eng: 'Licensing', id: 'Lisensi' } },
              ],
              question_score: 8,
              user_answer: [],
              is_marked: false,
            },
          ],
        },
        {
          name: 'Compliance and Certifications',
          questions: [
            {
              is_required: true,
              question_text: {
                id: 'Apakah perusahaan Anda memiliki sertifikasi ISO?',
                eng: 'Does your company have ISO certifications?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Yes', id: 'Ya' } },
                { option_score: 0, option_text: { eng: 'No', id: 'Tidak' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Jenis sertifikasi lain apa yang dimiliki perusahaan Anda?',
                eng: 'What other certifications does your company have?',
              },
              input_type: 'Checkboxes',
              options: [
                { option_score: 5, option_text: { eng: 'ISO 9001', id: 'ISO 9001' } },
                { option_score: 5, option_text: { eng: 'ISO 14001', id: 'ISO 14001' } },
                { option_score: 5, option_text: { eng: 'OHSAS 18001', id: 'OHSAS 18001' } },
              ],
              question_score: 7,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: true,
              question_text: {
                id: 'Kapan audit terakhir yang dilakukan?',
                eng: 'When was the last audit conducted?',
              },
              input_type: 'Date',
              options: [],
              question_score: 8,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apakah perusahaan Anda memiliki lisensi lokal?',
                eng: 'Does your company have local licenses?',
              },
              input_type: 'Checkboxes',
              options: [
                { option_score: 5, option_text: { eng: 'Business License', id: 'Lisensi Bisnis' } },
                { option_score: 5, option_text: { eng: 'Health & Safety', id: 'Kesehatan & Keselamatan' } },
              ],
              question_score: 6,
              user_answer: [],
              is_marked: false,
            },
          ],
        },
        {
          name: 'Sustainability Practices',
          questions: [
            {
              is_required: true,
              question_text: {
                id: 'Apakah perusahaan Anda memiliki kebijakan keberlanjutan?',
                eng: 'Does your company have a sustainability policy?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Yes', id: 'Ya' } },
                { option_score: 0, option_text: { eng: 'No', id: 'Tidak' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apa langkah-langkah keberlanjutan yang diambil oleh perusahaan Anda?',
                eng: 'What sustainability measures has your company implemented?',
              },
              input_type: 'Short answer',
              options: [],
              question_score: 8,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: true,
              question_text: {
                id: 'Berapa banyak limbah yang didaur ulang perusahaan Anda setiap tahun?',
                eng: 'How much waste does your company recycle annually?',
              },
              input_type: 'Short answer',
              options: [],
              question_score: 7,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apa kebijakan perusahaan Anda terkait penggunaan energi terbarukan?',
                eng: "What is your company's policy on renewable energy usage?",
              },
              input_type: 'Checkboxes',
              options: [
                { option_score: 5, option_text: { eng: 'Solar Energy', id: 'Energi Surya' } },
                { option_score: 5, option_text: { eng: 'Wind Energy', id: 'Energi Angin' } },
                { option_score: 5, option_text: { eng: 'Hydro Energy', id: 'Energi Hidro' } },
                { option_score: 5, option_text: { eng: 'Geothermal Energy', id: 'Energi Geotermal' } },
              ],
              question_score: 6,
              user_answer: [],
              is_marked: false,
            },
          ],
        },
      ],
    },
    {
      name: 'Pharmacy',
      sections: [
        {
          name: 'Service Quality',
          questions: [
            {
              is_required: true,
              question_text: {
                id: 'Seberapa puas Anda dengan kualitas layanan yang diberikan?',
                eng: 'How satisfied are you with the quality of the service provided?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Very Satisfied', id: 'Sangat Puas' } },
                { option_score: 8, option_text: { eng: 'Satisfied', id: 'Puas' } },
                { option_score: 5, option_text: { eng: 'Neutral', id: 'Netral' } },
                { option_score: 2, option_text: { eng: 'Dissatisfied', id: 'Tidak Puas' } },
                { option_score: 0, option_text: { eng: 'Very Dissatisfied', id: 'Sangat Tidak Puas' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apa yang dapat kami tingkatkan?',
                eng: 'What can we improve?',
              },
              input_type: 'Short answer',
              options: [],
              question_score: 5,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: true,
              question_text: {
                id: 'Apakah Anda akan merekomendasikan layanan kami?',
                eng: 'Would you recommend our service?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Yes', id: 'Ya' } },
                { option_score: 0, option_text: { eng: 'No', id: 'Tidak' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apa alasan Anda merekomendasikan layanan kami?',
                eng: 'What is your reason for recommending our service?',
              },
              input_type: 'Short answer',
              options: [],
              question_score: 6,
              user_answer: [],
              is_marked: false,
            },
          ],
        },
        {
          name: 'Product Feedback',
          questions: [
            {
              is_required: true,
              question_text: {
                id: 'Seberapa puas Anda dengan produk kami?',
                eng: 'How satisfied are you with our product?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Very Satisfied', id: 'Sangat Puas' } },
                { option_score: 8, option_text: { eng: 'Satisfied', id: 'Puas' } },
                { option_score: 5, option_text: { eng: 'Neutral', id: 'Netral' } },
                { option_score: 2, option_text: { eng: 'Dissatisfied', id: 'Tidak Puas' } },
                { option_score: 0, option_text: { eng: 'Very Dissatisfied', id: 'Sangat Tidak Puas' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apa fitur yang paling Anda suka?',
                eng: 'What feature do you like the most?',
              },
              input_type: 'Short answer',
              options: [],
              question_score: 5,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: true,
              question_text: {
                id: 'Apakah Anda mengalami masalah dengan produk kami?',
                eng: 'Have you encountered any issues with our product?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Yes', id: 'Ya' } },
                { option_score: 0, option_text: { eng: 'No', id: 'Tidak' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apa saran Anda untuk perbaikan produk kami?',
                eng: 'What is your suggestion for improving our product?',
              },
              input_type: 'Short answer',
              options: [],
              question_score: 6,
              user_answer: [],
              is_marked: false,
            },
          ],
        },
        {
          name: 'Customer Support',
          questions: [
            {
              is_required: true,
              question_text: {
                id: 'Seberapa cepat tim dukungan kami merespons permintaan Anda?',
                eng: 'How quickly did our support team respond to your request?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Very Quick', id: 'Sangat Cepat' } },
                { option_score: 8, option_text: { eng: 'Quick', id: 'Cepat' } },
                { option_score: 5, option_text: { eng: 'Average', id: 'Rata-rata' } },
                { option_score: 2, option_text: { eng: 'Slow', id: 'Lambat' } },
                { option_score: 0, option_text: { eng: 'Very Slow', id: 'Sangat Lambat' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Bagaimana kualitas dukungan yang Anda terima?',
                eng: 'How would you rate the quality of the support you received?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Excellent', id: 'Sangat Baik' } },
                { option_score: 8, option_text: { eng: 'Good', id: 'Baik' } },
                { option_score: 5, option_text: { eng: 'Average', id: 'Rata-rata' } },
                { option_score: 2, option_text: { eng: 'Poor', id: 'Buruk' } },
                { option_score: 0, option_text: { eng: 'Very Poor', id: 'Sangat Buruk' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: true,
              question_text: {
                id: 'Apakah tim dukungan kami membantu menyelesaikan masalah Anda?',
                eng: 'Did our support team help resolve your issue?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Yes', id: 'Ya' } },
                { option_score: 0, option_text: { eng: 'No', id: 'Tidak' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apa saran Anda untuk meningkatkan layanan dukungan kami?',
                eng: 'What suggestions do you have for improving our support service?',
              },
              input_type: 'Short answer',
              options: [],
              question_score: 6,
              user_answer: [],
              is_marked: false,
            },
          ],
        },
        {
          name: 'Pricing and Value',
          questions: [
            {
              is_required: true,
              question_text: {
                id: 'Bagaimana Anda menilai nilai produk kami dibandingkan dengan harga?',
                eng: 'How would you rate the value of our product relative to its price?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Excellent', id: 'Sangat Baik' } },
                { option_score: 8, option_text: { eng: 'Good', id: 'Baik' } },
                { option_score: 5, option_text: { eng: 'Average', id: 'Rata-rata' } },
                { option_score: 2, option_text: { eng: 'Poor', id: 'Buruk' } },
                { option_score: 0, option_text: { eng: 'Very Poor', id: 'Sangat Buruk' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apa pendapat Anda tentang struktur harga kami?',
                eng: 'What do you think about our pricing structure?',
              },
              input_type: 'Short answer',
              options: [],
              question_score: 5,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: true,
              question_text: {
                id: 'Apakah Anda merasa mendapatkan nilai yang baik dari produk kami?',
                eng: 'Do you feel you are getting good value from our product?',
              },
              input_type: 'Dropdown',
              options: [
                { option_score: 10, option_text: { eng: 'Yes', id: 'Ya' } },
                { option_score: 0, option_text: { eng: 'No', id: 'Tidak' } },
              ],
              question_score: 10,
              user_answer: [],
              is_marked: false,
            },
            {
              is_required: false,
              question_text: {
                id: 'Apa saran Anda untuk perbaikan harga produk kami?',
                eng: 'What is your suggestion for improving our product pricing?',
              },
              input_type: 'Short answer',
              options: [],
              question_score: 6,
              user_answer: [],
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
