import { t, type Dictionary } from "intlayer";

const HeaderContent = {
  key: "header",
  content: {
    aboutUs: t({
      ru: "О компании",
      en: "About us",
    }),
    services: t({
      ru: "Услуги",
      en: "Services",
    }),
    contacts: t({
      ru: "Контакты",
      en: "Contacts",
    }),
    submitRequest: t({
      ru: "Заказать бесплатную консультацию",
      en: "Request a Free Consultation",
    }),
  },
} satisfies Dictionary;

export default HeaderContent;
