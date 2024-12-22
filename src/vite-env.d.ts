/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly APP_ENV: string;
  readonly KEY_1: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
