import ClientComponent from "@/components/home/client-component";
import { PageProps } from "@/types/languages";
import { getDictionary } from "@/utils/get-dictionary";

export default async function HomePage({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="">
      <h1>{dictionary.title}</h1>

      <ClientComponent />
    </div>
  );
}
