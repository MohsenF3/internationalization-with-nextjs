"use client";

import { useLanguage } from "@/context/language-provider";
import { usePathname } from "next/navigation";
import LanguageLink from "../language-link";
import { buildLanguageNavigation } from "./navigation-data";

export default function NavigationLinks() {
  const { language, dictionary } = useLanguage();
  const pathname = usePathname();

  const localeLinks = buildLanguageNavigation(dictionary);

  const isActive = (href: string) => {
    const localizedHref = href === "/" ? `/${language}` : `/${language}${href}`;
    return pathname === localizedHref || pathname === `/${language}/`;
  };

  return (
    <ul className="flex flex-wrap gap-3">
      {localeLinks.map(({ label, href }) => {
        return (
          <li
            key={label}
            className={`py-2 px-3 rounded ${
              isActive(href) ? "text-blue-400 underline" : ""
            }`}
          >
            <LanguageLink href={href}>{label}</LanguageLink>
          </li>
        );
      })}
    </ul>
  );
}
