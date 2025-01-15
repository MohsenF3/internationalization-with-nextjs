"use client";

import { useLanguage } from "@/context/language-provider";
import { SUPPORTED_LANGUAGES } from "@/lib/languages";
import { Language } from "@/types/languages";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageChanger() {
  const { language } = useLanguage();
  const pathname = usePathname();

  const handleChangeLanguage = (language: Language) => {
    const paramsArray = pathname.split("/");
    const newParamsArray = paramsArray.map((param, index) =>
      index === 1 ? language : param
    );

    return newParamsArray.join("/");
  };

  return (
    <div className="flex flex-wrap gap-3">
      {SUPPORTED_LANGUAGES.map(({ flag, label, value }) => {
        const href = handleChangeLanguage(value as Language);

        return (
          <Link
            href={href}
            key={value}
            className={`flex gap-2 py-2 px-3 rounded ${
              value === language ? "bg-blue-400 text-white" : "bg-gray-100"
            }`}
          >
            <span>{flag}</span>
            <span>{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
