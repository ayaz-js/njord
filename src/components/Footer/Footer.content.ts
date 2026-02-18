import { t, type Dictionary } from "intlayer";

const FooterContent = {
  key: "footer",
  content: {
    contacts: t({
      ru: "Контакты",
      en: "Contacts",
    }),
    ourOffice: t({
      ru: "Наш офис в Китае:",
      en: "Our office in China:",
    }),
    submitRequest: t({
      ru: "Заказать бесплатную консультацию",
      en: "Request a Free Consultation",
    }),
  },
} satisfies Dictionary;

export default FooterContent;
