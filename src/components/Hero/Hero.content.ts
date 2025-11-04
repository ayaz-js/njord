import { t, type Dictionary } from "intlayer";

const HeroContent = {
  key: "hero",
  content: {
    title: t({
      ru: "Производители, контроль партии, брендирование и логистика —",
      en: "Manufacturers, quality control, branding, and logistics —",
    }),
    allOfChina: t({
      ru: "весь Китай",
      en: "all of China",
    }),
    throughOurExpertTeam: t({
      ru: "через нашу экспертную команду",
      en: "through our expert team",
    }),
    workingWithUs: t({
      ru: "Работая с нами, Китай работает на вас",
      en: "Working with us means China works for you",
    }),
    workingWithUsPrefix: t({
      ru: "Работая с нами",
      en: "Working with us",
    }),
    workingWithUsEnd: t({
      ru: "Китай работает на вас.",
      en: "means China works for you.",
    }),
    weAreYourPurchasing: t({
      ru: "Мы — ваш отдел закупок в Китае, только лучше.",
      en: "We are your purchasing department in China — only better.",
    }),
    weAnalyzeTheMarket: t({
      ru: "Проводим аналитику рынка, выстраиваем стратегию закупок под ваш бизнес и делаем предварительный просчёт. Ищем оптимальные предложения от реальных производителей, проверяем фабрики и контролируем каждую партию. Перед отправкой лично инспектируем товар, чтобы исключить брак.",
      en: "We analyze the market, build a purchasing strategy tailored to your business, and provide a preliminary cost estimate. We source the best offers directly from verified manufacturers, audit factories, and supervise every production batch. Before shipment, we personally inspect the goods to eliminate defects.",
    }),
    thisWay: t({
      ru: "Тем самым сокращаем издержки, повышаем качество продукции и улучшаем имидж вашего бренда, усиливая его конкурентоспособность на рынке.",
      en: "This way, we reduce your costs, improve product quality, and enhance your brand image — strengthening your competitiveness in the market.",
    }),
  },
} satisfies Dictionary;

export default HeroContent;
