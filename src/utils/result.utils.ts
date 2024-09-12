export type ApiResponseType<T = undefined> = T extends undefined
  ? {
      code: number;
      message: string;
      total: number;
      error_fields?: Record<string, string>;
    }
  : {
      code: number;
      message: string;
      total: number;
      data: T;
      error_fields?: Record<string, string>;
    };

const Result = {
  success: <T extends Record<string, any>>(data: ApiResponseType<T>): { data: T; message?: string; is_success: boolean } => {
    return {
      data: data.data as T,
      message: data.message,
      is_success: true,
    };
  },
};

type User = {
  name: string;
  age: number;
};

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type Test = Prettify<ApiResponseType>;

const a: ApiResponseType = {
  code: 200,
  message: 'ok',
  total: 0,
};

const result = Result.success(a);
