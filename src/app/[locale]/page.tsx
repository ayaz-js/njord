import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Features } from "@/components/Features";
import { License } from "@/components/License";
import { Footer } from "@/components/Footer";
import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import { Video } from "@/components/Video";
import { Services } from "@/components/Services";
import type { LocalPromiseParams } from "next-intlayer";
import { Metadata } from "next";
import { getIntlayer } from "intlayer";

export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  const content = getIntlayer("metadata", locale);

  return {
    metadataBase: new URL("https://njordchina.com"),
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: "/",
      languages: {
        "ru-RU": "/ru",
        "en-US": "/en",
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: "https://njordchina.com",
      siteName: "Njord China",
      images: [
        {
          url: "/images/preview.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: "website",
    },
  };
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
            <Services />
            <Features />
            <Video />
            <License />
          </main>
          <Footer />
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default Home;
