import { Dictionary } from "@/utils/get-dictionary";

type NavigationItem = {
  label: string;
  href: string;
};

type buildLanguageNavigation = (dictionary: Dictionary) => NavigationItem[];

export const buildLanguageNavigation: buildLanguageNavigation = (
  dictionary
) => [
  {
    label: dictionary.Header.links.Home,
    href: "/",
  },
  {
    label: dictionary.Header.links.About,
    href: "/about",
  },
  {
    label: dictionary.Header.links.Contact,
    href: "/contact",
  },
];
