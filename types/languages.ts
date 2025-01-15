import { languages } from "@/lib/languages";

export type Language = (typeof languages)[number];

export type PageProps<T = unknown> = {
  params: {
    lang: Language;
  } & T;
};
