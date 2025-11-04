import { t, type Dictionary } from "intlayer";

const HeaderContent = {
  key: "header",
  content: {
    aboutUs: t({
      ru: "О компании",
      en: "About us",
    }),
    howWeWork: t({
      ru: "Как мы работаем",
      en: "How we work",
    }),
    ourPartners: t({
      ru: "Наши партнёры",
      en: "Our partners",
    }),
    video: t({
      ru: "Видео",
      en: "Video",
    }),
    contacts: t({
      ru: "Контакты",
      en: "Contacts",
    }),
  },
} satisfies Dictionary;

export default HeaderContent;
