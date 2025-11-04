import { t, type Dictionary } from "intlayer";

const Partners = {
  key: "partners",
  content: {
    titlePrefix: t({
      ru: "Наши партнёры",
      en: "Our Partners",
    }),
    title: t({
      ru: "производят для лидеров рынка",
      en: "Manufacture for Global Market Leaders",
    }),
    subtitle: t({
      ru: "Фабрики, с которыми мы сотрудничаем, работают с крупнейшими мировыми брендами в сфере моды, техники, FMCG, авто и ритейла. Это означает, что вы получаете доступ к производственным мощностям с высочайшими стандартами качества, проверенными глобальным рынком.",
      en: "The factories we cooperate with produce for the world’s most renowned brands in fashion, electronics, FMCG, automotive, and retail sectors. This means you gain access to top-tier production facilities that meet the highest global quality standards.",
    }),
    brandsInclude: t({
      ru: "Среди брендов, для которых они производят:",
      en: "Brands they work with include:",
    }),
    givesYouAccess: t({
      ru: "NJORD открывает доступ к этим же производственным мощностям — только с вашей торговой маркой, вашими условиями и полным контролем со стороны нашей команды.",
      en: "NJORD gives you access to the same manufacturing capabilities — under your brand name, your conditions, and with complete control by our team.",
    }),
  },
} satisfies Dictionary;

export default Partners;
