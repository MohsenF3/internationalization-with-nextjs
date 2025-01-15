import { PageProps } from "@/types/languages";
import { getDictionary } from "@/utils/get-dictionary";

export default async function ContactPage({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div>
      <h1>{dictionary.Contact.title}</h1>
    </div>
  );
}
