"use client";

import { useLanguage } from "@/context/language-provider";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

interface LanguageLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children: React.ReactNode;
}

export default function LanguageLink({
  href,
  children,
  ...props
}: LanguageLinkProps) {
  const { language } = useLanguage();

  const localizedHref =
    typeof href === "string" ? `/${language}${href === "/" ? "" : href}` : href;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
