import { t, type Dictionary } from "intlayer";

const FormContent = {
  key: "form",
  content: {
    title: t({
      ru: "Начать сотрудничество",
      en: "Start Cooperation",
    }),
    subtitle: t({
      ru: "Заполните короткую форму, чтобы мы могли быстро понять ваш запрос и связаться с вами для бесплатной консультации.",
      en: "Fill out the short form so we can quickly understand your request and contact you for a free consultation.",
    }),
    whichServiceDoYouNeed: t({
      ru: "Какая услуга вам нужна?",
      en: "Which service do you need?",
    }),
    inputs: {
      factoryAudit: t({
        ru: "Аудит / проверка фабрики",
        en: "Factory Audit / Verification",
      }),
      batchInspectionAtTheFactory: t({
        ru: "Инспекция партии товара на фабрике",
        en: "Batch Inspection at the Factory",
      }),
      product: t({
        ru: "Поиск товара / производителя",
        en: "Product / Supplier Sourcing",
      }),
      brandedProduction: t({
        ru: "OEM / ODM / White Label (производство под бренд)",
        en: "OEM / ODM / White Label (Branded Production)",
      }),
      logisticsAndExport: t({
        ru: "Логистика и экспорт готового груза",
        en: "Logistics and Export of Finished Goods",
      }),
      other: t({
        ru: "Другое",
        en: "Other",
      }),
      name: t({
        ru: "Ваше имя / Название компании",
        en: "Your Name / Company Name",
      }),
      namePlaceholder: t({
        ru: "Имя",
        en: "Name",
      }),
      messenger: t({
        ru: "Ваши контакты (WhatsApp / Telegram / WeChat)",
        en: "Your Contact Details (WhatsApp / Telegram / WeChat)",
      }),
      messengerPlaceholder: t({
        ru: "WhatsApp, Telegram, WeChat",
        en: "WhatsApp, Telegram, WeChat",
      }),
      comment: t({
        ru: "Комментарий (по желанию)",
        en: "Comment (Optional)",
      }),
      commentPlaceholder: t({
        ru: "Дополнительные вопросы",
        en: "Additional questions",
      }),
    },
    modalFooterTitle: t({
      ru: "Минимальный бюджет для поиска товара — от 1 000 USD и выше.",
      en: "Minimum sourcing budget — from USD 1,000 and above.",
    }),
    submitRequest: t({
      ru: "Начать сотрудничество",
      en: "Start Cooperation",
    }),
    send: t({
      ru: "Отправить",
      en: "Send",
    }),
    successTitle: t({
      ru: "Готово! Ваша заявка отправлена 🚀",
      en: "All set! Your request has been sent 🚀",
    }),
    successDescription: t({
      ru: "Скоро свяжемся с вами.",
      en: "We’ll be in touch soon.",
    }),
    errorTitle: t({
      ru: "Упс! Что-то пошло не так.",
      en: "Oops! Something went wrong.",
    }),
    errorDescription: t({
      ru: "Попробуйте ещё раз 🙏",
      en: "Please try again 🙏",
    }),
  },
} satisfies Dictionary;

export default FormContent;
