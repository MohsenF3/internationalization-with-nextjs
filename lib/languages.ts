import { Language } from "@/types/languages";

export type language = {
  label: string;
  value: Language;
  flag: string;
};

export const SUPPORTED_LANGUAGES = [
  {
    label: "English",
    value: "en",
    flag: "🇺🇸",
  },
  {
    label: "Español",
    value: "es",
    flag: "🇪🇸",
  },
  {
    label: "فارسی",
    value: "fa",
    flag: "🇮🇷",
  },
];

export const languages = ["en", "fa", "es"] as const;
export const DEFAULT_LANGUAGE = "en";
