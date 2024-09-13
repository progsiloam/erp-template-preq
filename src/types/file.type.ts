export type FileDownload = {
  id: string;
  filename: string;
  file_path: string;
  file_base64: string;
  is_success: boolean;
  expired_at?: string;
};
