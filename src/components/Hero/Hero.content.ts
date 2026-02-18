import { t, type Dictionary } from "intlayer";

const HeroContent = {
  key: "hero",
  content: {
    title: t({
      ru: "Бизнес с Китаем под ключ: фабрики, инспекции, логистика",
      en: "Turnkey Business with China: Factories, Inspections, Logistics",
    }),
  },
} satisfies Dictionary;

export default HeroContent;
