import LanguageChanger from "./language-changer";
import NavigationLinks from "./navigation-links";

export default function Header() {
  return (
    <header className="flex items-center flex-wrap gap-5 justify-between p-5  bg-gray-300 mb-5">
      <NavigationLinks />

      <LanguageChanger />
    </header>
  );
}
