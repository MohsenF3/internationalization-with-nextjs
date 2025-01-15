import BaseLayout from "@/components/base-layout";
import NotfoundPage from "@/components/not-found-page";
import { DEFAULT_LANGUAGE } from "@/lib/languages";

export default function NotFound() {
  return (
    <BaseLayout lang={DEFAULT_LANGUAGE}>
      <NotfoundPage />
    </BaseLayout>
  );
}
