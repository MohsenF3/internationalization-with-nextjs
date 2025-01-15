import { DEFAULT_LANGUAGE } from "@/lib/languages";
import { Language } from "@/types/languages";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((r) => r.default),
  fa: () => import("../dictionaries/fa.json").then((r) => r.default),
  es: () => import("../dictionaries/es.json").then((r) => r.default),
};

export const getDictionary = (language: Language) => {
  const dictionary = dictionaries[language];

  return dictionary ? dictionary() : dictionaries[DEFAULT_LANGUAGE]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
