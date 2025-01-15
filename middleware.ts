import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LANGUAGE, languages } from "./lib/languages";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Extract the first part of the path ("en" from "/en/some-path")
  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1];

  // Derive browser language
  const browserLanguage =
    request.headers.get("accept-language")?.split("-")[0] || DEFAULT_LANGUAGE;

  const language =
    languages.find((lang) => lang === browserLanguage) || DEFAULT_LANGUAGE;

  // Check if the current pathname already includes a supported locale
  const isLocalizedPath = languages.some((lang) => currentLocale === lang);

  if (!isLocalizedPath) {
    const newPathname = `/${language}${pathname === "/" ? "" : pathname}`;
    request.nextUrl.pathname = newPathname;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
