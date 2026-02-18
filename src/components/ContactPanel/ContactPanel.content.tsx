import { t, type Dictionary } from "intlayer";

const ContactPanelContent = {
  key: "contact-panel",
  content: {
    title: t({
      ru: "Вы можете сразу связаться с нами в удобном мессенджере",
      en: "You can contact us directly via your preferred messenger",
    }),
    button: t({
      ru: "Начать сотрудничество",
      en: "Start Cooperation",
    }),
  },
} satisfies Dictionary;

export default ContactPanelContent;
