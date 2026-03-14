import React from "react";
import "../globals.css";
import type { NextLayoutIntlayer } from "next-intlayer";
import { getHTMLTextDir } from "intlayer";
import { Toaster } from "@/components/ui/sonner";
export { generateStaticParams } from "next-intlayer";

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)}>
      <body className="bg-gray-200">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{ classNames: { description: "text-black" } }}
        />
      </body>
    </html>
  );
};

export default LocaleLayout;
