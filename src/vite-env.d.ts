/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** EmailJS — Service ID (voir .env.example) */
  readonly VITE_EMAILJS_SERVICE_ID: string;
  /** EmailJS — Template ID */
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  /** EmailJS — Public Key */
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
