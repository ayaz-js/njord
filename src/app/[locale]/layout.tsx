import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import type { NextLayoutIntlayer } from "next-intlayer";
import { getHTMLTextDir } from "intlayer";

export { generateStaticParams } from "next-intlayer";

export const metadata: Metadata = {
  title: "Njord",
  description: "",
};

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)}>
      <body className="bg-gray-200">{children}</body>
    </html>
  );
};

export default LocaleLayout;
