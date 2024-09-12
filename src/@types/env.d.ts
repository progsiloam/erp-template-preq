/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string;
  readonly VITE_ENCRYPTION_SECRET_LS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
