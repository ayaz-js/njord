import { t, type Dictionary } from "intlayer";

const metadataContent: Dictionary = {
  key: "metadata",
  content: {
    title: t({
      ru: "Njord China — Логистика и морские перевозки из Китая",
      en: "Njord China — Logistics and Ocean Freight from China",
    }),
    description: t({
      ru: "Полный комплекс услуг: аудит фабрик, контроль качества, поиск производителей, морские, авиа и ж/д перевозки из Китая. Подробнее на нашем сайте njordchina.com, наши контакты +86 136 6088 4790 njord.madeinchina@gmail.com",
      en: "Full range of services: factory audit, quality control, supplier search, sea, air and rail freight from China. More details on our website njordchina.com, our contacts +86 136 6088 4790 njord.madeinchina@gmail.com",
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
