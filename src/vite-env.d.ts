/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_ENV: string;
  readonly VITE_KEY_1: string;
  readonly VITE_IS_ITCHY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
