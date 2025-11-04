import { t, type Dictionary } from "intlayer";

const LicenseContent = {
  key: "license",
  content: {
    title: t({
      ru: "Лицензии",
      en: "Licenses",
    }),
    subtitle: t({
      ru: "Фото официальной регистрации компании в Китае",
      en: "Photos of official company registration in China",
    }),
    openLicense: t({
      ru: "Открыть лицензию",
      en: "Open license",
    }),
  },
} satisfies Dictionary;

export default LicenseContent;
