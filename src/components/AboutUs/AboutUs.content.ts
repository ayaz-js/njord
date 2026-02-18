import { t, type Dictionary } from "intlayer";

const AboutUsContent = {
  key: "about-us",
  content: {
    title: t({
      ru: "О компании NJORD",
      en: "About NJORD",
    }),
    whoAreWe: t({
      ru: "Кто мы?",
      en: "Who are we?",
    }),
    weAre: t({
      ru: "Ваши люди в Китае для контроля, производства и логистики",
      en: "Your representatives in China for production supervision and logistics management",
    }),
    ourTeam: t({
      ru: "Наша команда",
      en: "Our team",
    }),
    ourTeamText: t({
      ru: "Наша команда — это специалисты, которые живут и работают в Китае, знают язык, рынок и реальные процессы на фабриках. Мы понимаем, как мыслят производители, как проходят переговоры и где возникают риски. За счёт этого мы помогаем клиентам избегать ошибок и получать прогнозируемый результат.",
      en: "Our team consists of professionals who live and work in China and have in-depth knowledge of the language, the market, and real factory operations. We understand how manufacturers think, how negotiations are conducted, and where potential risks arise.",
    }),
  },
} satisfies Dictionary;

export default AboutUsContent;
