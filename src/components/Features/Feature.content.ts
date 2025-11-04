import { t, type Dictionary } from "intlayer";

const Feature = {
  key: "feature",
  content: {
    titlePrefix: t({
      ru: "Как мы",
      en: "How We",
    }),
    work: t({
      ru: "работаем",
      en: "Work",
    }),
    weTakeFullControl: t({
      ru: "Полностью берём Китай на себя.",
      en: "We take full control of your operations in China.",
    }),
    fromStrategyAndNegotiations: t({
      ru: "От стратегии и переговоров — до проверки товара и доставки. Без посредников. Без рисков. Только результат.",
      en: "From strategy and negotiations — to inspection and delivery. No middlemen. No risks. Only results.",
    }),
    cards: {
      card_1: {
        title: t({
          ru: "Стратегия и расчёт",
          en: "Strategy & Cost Estimate",
        }),
        text: t({
          ru: "Онлайн-консультация, анализ рынка, построение закупочной модели",
          en: "Online consultation, market analysis, and purchasing model development",
        }),
        subtext: t({
          ru: "Онлайн-консультация, анализ рынка, построение закупочной модели",
          en: "Online consultation, market analysis, and purchasing model development",
        }),
      },
      card_2: {
        title: t({
          ru: "Производство и брендирование",
          en: "Manufacturing & Branding",
        }),
        text: t({
          ru: "White Label / OEM / ODM под ваш бизнес",
          en: "White Label / OEM / ODM solutions for your business",
        }),
        subtext: t({
          ru: "Подбираем производителя, проводим переговоры учитывая ваши требования и сопровождаем весь цикл запуска — от чертежей до готовой партии.",
          en: "We select the right manufacturer, negotiate based on your requirements, and manage the entire production cycle — from design drafts to the finished product.",
        }),
      },
      card_3: {
        title: t({
          ru: "Контроль, отгрузка, экспорт",
          en: "Quality Control, Shipment & Export",
        }),
        text: t({
          ru: "Проверка партии, контроль отгрузки и логистика",
          en: "Batch inspection, shipping supervision, and logistics",
        }),
        subtext: t({
          ru: "Проводим инспекции на фабрике, проверяем качество, готовим экспортные документы, контролируем погрузку и координируем доставку.",
          en: "We conduct on-site factory inspections, check product quality, prepare export documents, supervise loading, and coordinate international delivery.",
        }),
      },
    },
  },
} satisfies Dictionary;

export default Feature;
