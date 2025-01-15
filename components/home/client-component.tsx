"use client";

import { useLanguage } from "@/context/language-provider";

export default function ClientComponent() {
  const { dictionary } = useLanguage();

  return (
    <div>
      <h2>{dictionary.subTitle}</h2>
    </div>
  );
}
