import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.RUSSIAN, Locales.ENGLISH],
    defaultLocale: Locales.RUSSIAN,
  },
};

export default config;
