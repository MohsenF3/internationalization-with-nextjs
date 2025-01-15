import Header from "@/components/header";
import { LanguageProvider } from "@/context/language-provider";
import { Language } from "@/types/languages";
import { getDictionary } from "@/utils/get-dictionary";
import { getLanguageDirection } from "@/utils/get-language-direction";
import React from "react";

interface BaseLayoutProps {
  children: React.ReactNode;
  lang: Language;
}

export default async function BaseLayout({ children, lang }: BaseLayoutProps) {
  const dictionary = await getDictionary(lang);
  const direction = getLanguageDirection(lang);

  return (
    <html lang={lang} dir={direction} suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider language={lang} dictionary={dictionary}>
          <Header />
          <main className="p-5">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
