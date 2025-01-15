// A set containing the list of languages that use a right-to-left (RTL) text direction.
const rtlLanguages: Set<string> = new Set([
  "ar",
  "he",
  "fa",
  "ur",
  "dv",
  "ku",
  "sd",
  "ug",
  "yi",
]);

export const getLanguageDirection = (language: string): "rtl" | "ltr" => {
  const normalizedLanguage = language.toLowerCase();

  return rtlLanguages.has(normalizedLanguage) ? "rtl" : "ltr";
};
