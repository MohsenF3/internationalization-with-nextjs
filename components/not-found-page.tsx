"use client";

import { useLanguage } from "@/context/language-provider";
import LanguageLink from "./language-link";

export default function NotfoundPage() {
  const { dictionary } = useLanguage();

  return (
    <div className="flex items-center justify-center gap-5 h-[calc(100vh-10rem)] flex-col">
      <h2 className="text-3xl font-semibold">{dictionary.NotFound.title}</h2>

      <LanguageLink href={`/`} className="bg-sky-400 py-2 px-3 rounded">
        {dictionary.NotFound.button}
      </LanguageLink>
    </div>
  );
}
