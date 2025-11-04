import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Features } from "@/components/Features";
import { Partners } from "@/components/Partners";
import { License } from "@/components/License";
import { Footer } from "@/components/Footer";
import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

export const metadata = {
  title: "Главная — Njord",
  description:
    "Добро пожаловать на Njord - работая с нами, Китай работает на вас",
  keywords: ["Njord"],
  openGraph: {
    title: "Njord — Мы — ваши люди в Китае.",
    description:
      "Независимые представители, которые заменят вам отдел закупок.",
    url: "https://njord-five.vercel.app/",
    siteName: "Njord",
    locale: "ru_RU",
    type: "website",
  },
};

const Home: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <div id="outer-container">
          <Header />
          <main id="page-wrap">
            <Hero />
            <AboutUs />
            <Features />
            <Partners />
            <License />
          </main>
          <Footer />
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default Home;
