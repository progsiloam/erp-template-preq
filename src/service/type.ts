interface ApiResponse<T> {
  code: number;
  message: string;
  total: number;
  data: T;
}

export type { ApiResponse };
