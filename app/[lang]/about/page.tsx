import { PageProps } from "@/types/languages";
import { getDictionary } from "@/utils/get-dictionary";

export default async function AboutPage({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div>
      <h1>{dictionary.About.title}</h1>
    </div>
  );
}
