"use client";
import { FC } from "react";
import { useLocale, useLocaleCookie } from "next-intlayer";
import { getLocalizedUrl } from "intlayer";
import Link from "next/link";
import { clsx } from "clsx";

export const LanguageSwitcher: FC = () => {
  const { locale, pathWithoutLocale, availableLocales } = useLocale();
  const { setLocaleCookie } = useLocaleCookie();

  return (
    <div className="flex items-center bg-gray-300 rounded-xl w-full max-w-[136px]">
      {availableLocales.map((localeItem) => (
        <Link
          key={localeItem}
          href={getLocalizedUrl(pathWithoutLocale, localeItem)}
          hrefLang={localeItem}
          onClick={() => setLocaleCookie(localeItem)}
          className={clsx(
            "flex items-center justify-center w-full rounded-xl h-10 transition-colors text-sm font-medium",
            locale === localeItem
              ? "bg-blueBg text-white"
              : "hover:bg-blueBg hover:text-white",
          )}
        >
          <span>{localeItem.toUpperCase()}</span>
        </Link>
      ))}
    </div>
  );
};
