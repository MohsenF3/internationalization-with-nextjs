"use client";

import { Language } from "@/types/languages";
import { Dictionary } from "@/utils/get-dictionary";
import React from "react";

interface LanguageProviderProps {
  children: React.ReactNode;
  language: Language;
  dictionary: Dictionary;
}

type LanguageContextType = Pick<
  LanguageProviderProps,
  "language" | "dictionary"
>;

export const languageContext = React.createContext({} as LanguageContextType);

export const LanguageProvider = ({
  children,
  language,
  dictionary,
}: LanguageProviderProps) => {
  return (
    <languageContext.Provider value={{ language, dictionary }}>
      {children}
    </languageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(languageContext);

  if (!context) {
    throw new Error(
      "LanguageContext must be used within LanguageContextProvider"
    );
  }

  return context;
};
