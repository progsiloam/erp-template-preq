import type { UploadedFileData } from '@siloamhospitals/erp-template-vuetify-components';
import { useAxios } from './axios.composable';

export function usePreQFileUpload() {
  const axios = useAxios();
  const uploadFileWithExpired = async (file: File, date: string) => {
    const url = `http://localhost:3001/api/submission/upload-file-with-expired`;

    const form = new FormData();
    form.append('file', file);
    form.append('expired_at', date);

    const result = await axios.postForm<UploadedFileData>(url, form);

    if (!result.is_success && !result.data) {
      throw new Error('broken');
    }

    return result;
  };

  const updateExpiredFile = async (id: string, date: string) => {
    const url = `http://localhost:3001/api/submission/preview-file`;
    const result = await axios.post(url, { _id: id, expired_at: date });

    if (!result.is_success) {
      throw new Error('broken');
    }

    return result;
  };

  return { uploadFileWithExpired, updateExpiredFile };
}
