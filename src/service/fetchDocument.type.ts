interface Document {
  _id: string;
  filename: string;
  file_path: string;
  expired_at?: string;
}

export type { Document };
