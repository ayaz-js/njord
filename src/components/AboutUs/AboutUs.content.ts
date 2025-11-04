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
      ru: "Мы — ваши люди в Китае.",
      en: "We are your people in China.",
    }),
    independent: t({
      ru: "Независимые представители, которые заменят вам отдел закупок.",
      en: "Independent representatives who replace your in-house purchasing department.",
    }),
    ourTeam: t({
      ru: "Наша команда",
      en: "Our team",
    }),
    ourTeamText: t({
      ru: "Наша команда — это не случайные менеджеры, а люди, которые живут, учились и владеют языком и менталитетом. Объединение экспертов, которые сами строят свой бизнес с китайскими производителями. Знаем, как устроен рынок, как мыслят фабрики, и как выжать максимум условий в переговорах. У нас есть связи, опыт и уверенность в каждом шаге.",
      en: "Our team isn’t made up of random managers — we’re professionals who live in China, speak the language, understand the culture, and have built our own businesses with Chinese manufacturers. We know how the market operates, how factories think, and how to secure the best possible terms during negotiations. We have the connections, the experience, and the confidence to handle every step.",
    }),
    ourApproach: t({
      ru: "Наш подход",
      en: "Our approach",
    }),
    ourApproachText: t({
      ru: "Не берём всех подряд. Нам не нужны десятки проектов ради количества — мы работаем на качество и результат. Если берёмся за ваш бизнес — значит, он действительно стоит того, чтобы с ним работать.",
      en: "We don’t take on just anyone. We’re not chasing quantity — we focus on quality and results. If we take on your business, it means it’s truly worth it.",
    }),
    theCooperationProcess: t({
      ru: "Процесс сотрудничества",
      en: "The cooperation process",
    }),
    theCooperationProcessText: t({
      ru: "Только индивидуальный подход. Только глубокая работа, личный контроль и полное погружение. Отвечаем репутацией — а значит, позволить себе «как-нибудь» просто не можем.",
      en: "Only a personalized approach. Only deep involvement, hands-on control, and full immersion. We stand by our reputation — which means “good enough” is never an option.",
    }),
  },
} satisfies Dictionary;

export default AboutUsContent;
