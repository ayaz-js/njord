import { t, type Dictionary } from "intlayer";

const metadataContent: Dictionary = {
  key: "metadata",
  content: {
    title: t({
      ru: "Njord China — Логистика и морские перевозки из Китая",
      en: "Njord China — Logistics and Ocean Freight from China",
    }),
    description: t({
      ru: "Полный комплекс логистических услуг: морские, авиа и ж/д перевозки из Китая.",
      en: "Full range of logistics services: sea, air and rail freight from China.",
    }),
    keywords: t({
      ru: [
        "Njord China",
        "логистика из Китая",
        "морские перевозки Китай",
        "международная доставка грузов",
        "экспедирование грузов",
        "контейнерные перевозки",
      ],
      en: [
        "Njord China",
        "logistics from China",
        "sea freight China",
        "international cargo delivery",
        "cargo forwarding",
        "container shipping",
      ],
    }),
  },
};

export default metadataContent;
