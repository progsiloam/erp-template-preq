import type { FileDownload } from '@/types';
import { base64ToFile } from '@/utils/base64ToFile.utils';
import type { ResultType, UploadedFileData } from '@siloamhospitals/erp-template-vuetify-components';
import { useAxios } from './';

export function useFile() {
  const axios = useAxios();

  const uploadFile: (file: File) => Promise<ResultType<UploadedFileData>> = async (file) => {
    const url = `http://localhost:3001/api/submission/upload-file`;

    const form = new FormData();
    form.append('file', file);

    const result = await axios.postForm<UploadedFileData>(url, form);

    if (!result.is_success && !result.data) {
      throw new Error('broken');
    }

    return result;
  };

  const fetchFile = async (id: string) => {
    const url = `http://localhost:3001/api/submission/get-file/document/${id}`;

    const result = await axios.get<FileDownload>(url);

    if (!result.is_success && !result.data) {
      throw new Error('broken');
    }

    return result;
  };

  const getFile: (id: string | number) => Promise<ResultType<File>> = async (id) => {
    const result = await fetchFile(`${id}`);

    return {
      data: base64ToFile(result.data!.file_base64, result.data!.filename),
      message: result.message,
      is_success: result.is_success,
    };
  };

  const getFileData: (id: string) => Promise<ResultType<FileDownload>> = async (id) => {
    const result = await fetchFile(id);

    if (!result.is_success && !result.data) {
      throw new Error('broken');
    }
    return result;
  };

  const deleteFile: (id: string | number) => Promise<ResultType> = async (id) => {
    const url = `http://localhost:3001/api/submission/delete-file/${id}`;

    const result = await axios.post(url);

    if (!result.is_success) {
      throw new Error('broken');
    }

    return result;
  };

  return { uploadFile, getFile, getFileData, deleteFile };
}
