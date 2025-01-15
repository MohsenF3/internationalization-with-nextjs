import BaseLayout from "@/components/base-layout";
import { languages } from "@/lib/languages";
import { Language } from "@/types/languages";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Internationalization with Next.js",
  description: "implementing internationalization with next.js",
};

interface LanguageLayoutProps {
  children: React.ReactNode;
  params: { lang: Language };
}

export default async function LanguageLayout({
  children,
  params: { lang },
}: LanguageLayoutProps) {
  if (!languages.includes(lang)) {
    notFound();
  }

  return <BaseLayout lang={lang}>{children}</BaseLayout>;
}
