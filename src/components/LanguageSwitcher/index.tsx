"use client";
import { FC } from "react";
import { useLocale, useLocaleCookie } from "next-intlayer";
import { getLocalizedUrl } from "intlayer";
import Link from "next/link";
import { clsx } from "clsx";

interface Props {
  className?: string;
}

export const LanguageSwitcher: FC<Props> = ({ className }) => {
  const { locale, pathWithoutLocale, availableLocales } = useLocale();
  const { setLocaleCookie } = useLocaleCookie();

  return (
    <div
      className={clsx(
        "flex items-center bg-gray-300 rounded-xl w-full max-w-[136px]",
        className,
      )}
    >
      {availableLocales.map((localeItem) => (
        <Link
          key={localeItem}
          href={getLocalizedUrl(pathWithoutLocale, localeItem)}
          hrefLang={localeItem}
          onClick={() => setLocaleCookie(localeItem)}
          className={clsx(
            "flex items-center justify-center w-full h-10 transition-colors text-xs xl:text-sm font-medium",
            locale === localeItem
              ? "bg-blueBg text-white"
              : "hover:bg-blueBg hover:text-white",
            localeItem === "en"
              ? "rounded-tr-xl rounded-br-xl"
              : "rounded-tl-xl rounded-bl-xl",
          )}
        >
          <span>{localeItem.toUpperCase()}</span>
        </Link>
      ))}
    </div>
  );
};
