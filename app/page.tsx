import { DEFAULT_LANGUAGE } from "@/lib/languages";
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect(DEFAULT_LANGUAGE);
}
