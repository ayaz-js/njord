import { t, type Dictionary } from "intlayer";

const FormContent = {
  key: "form",
  content: {
    title: t({
      ru: "Связь с нами",
      en: "Contact us",
    }),
    subtitle: t({
      ru: "Заполните короткую форму ниже, чтобы мы могли быстро оценить ваш проект.",
      en: "Please fill out the short form below so we can quickly assess your project.",
    }),
    inputs: {
      name: t({
        ru: "Ваше имя, город и страна (обязательно)",
        en: "Your name, city, and country (required)",
      }),
      nameLabel: t({
        ru: "Чтобы мы знали, как к вам обращаться и с какой страны идёт запрос.",
        en: "So we know how to address you and from which country the inquiry is coming.",
      }),
      namePlaceholder: t({
        ru: "Имя",
        en: "Name",
      }),
      company: t({
        ru: "Название вашей компании",
        en: "Company name",
      }),
      companyLabel: t({
        ru: "Если вы представляете бизнес — укажите также свою должность.",
        en: "If you represent a business, please include your position.",
      }),
      companyPlaceholder: t({
        ru: "Компания",
        en: "Company",
      }),
      email: t({
        ru: "E-mail",
        en: "Email",
      }),
      emailLabel: t({
        ru: "Для отправки коммерческого предложения и связи.",
        en: "For sending commercial offers and communication.",
      }),
      emailPlaceholder: t({
        ru: "Эл.почта",
        en: "Email",
      }),
      messenger: t({
        ru: "Мессенджер (обязательно)",
        en: "Messenger (required)",
      }),
      messengerLabel: t({
        ru: "Укажите удобный способ связи: WhatsApp, Telegram, WeChat и т.д.",
        en: "Please indicate your preferred contact method: WhatsApp, Telegram, WeChat, etc.",
      }),
      messengerPlaceholder: t({
        ru: "WhatsApp, Telegram, WeChat и т.д.",
        en: "WhatsApp, Telegram, WeChat, etc.",
      }),
      product: t({
        ru: "Какой товар или услуга вас интересует? (обязательно)",
        en: "What product or service are you interested in? (required)",
      }),
      productLabel: t({
        ru: "Кратко опишите категорию, примерный объём и требования к продукту или услуге.",
        en: "Briefly describe the category, approximate volume, and requirements for your product or service.",
      }),
      productPlaceholder: t({
        ru: "Категория товара, примерный объем",
        en: "Product category, approximate volume",
      }),
      experience: t({
        ru: "Опыт работы с Китаем (выбор: Да / Нет)",
        en: "Experience working with China (choose: Yes / No)",
      }),
      experienceValueYes: t({
        ru: "Да",
        en: "Yes",
      }),
      experienceValueNo: t({
        ru: "Нет",
        en: "No",
      }),
      annualTurnover: t({
        ru: "Годовой оборот вашей компании (выбор: до $700,000 / от $700,000 и выше)",
        en: "Your company’s annual turnover (choose: below $700,000 / above $700,000)",
      }),
      annualTurnoverLabel: t({
        ru: "Информация поможет нам оценить формат и глубину возможного сотрудничества.",
        en: "This information helps us determine the best cooperation format.",
      }),
      annualTurnoverValueUpTo: t({
        ru: "до $700,000",
        en: "up to $700,000",
      }),
      annualTurnoverValueFrom: t({
        ru: "от $700,000 и выше",
        en: "from $700,000 and above",
      }),
      comment: t({
        ru: "Комментарий или вопрос (необязательно)",
        en: "Comment or question (optional)",
      }),
      commentLabel: t({
        ru: "Если есть детали, которые вы хотите уточнить заранее — напишите здесь.",
        en: "If you’d like to clarify any details in advance, feel free to write them here.",
      }),
      commentPlaceholder: t({
        ru: "Дополнительные вопросы",
        en: "Additional questions",
      }),
    },
    modalFooterTitle: t({
      ru: "Далее мы свяжемся с вами, чтобы согласовать время для онлайн-встречи.",
      en: "We’ll contact you to schedule an online meeting.",
    }),
    modalFooterPrefix: t({
      ru: "Напоминаем:",
      en: "Please note:",
    }),
    modalFooterText: t({
      ru: "предварительный расчёт и консультация бесплатны для компаний с оборотом от $700,000 в год. Для компаний с меньшим оборотом услуги предварительного просчёта предоставляются на платной основе.",
      en: "the preliminary calculation and consultation are free for companies with an annual turnover of $700,000 or more. For companies with a smaller turnover, preliminary calculation services are provided on a paid basis.",
    }),
    submitRequest: t({
      ru: "Оставить заявку",
      en: "Submit a Request",
    }),
    send: t({
      ru: "Отправить",
      en: "Send",
    }),
  },
} satisfies Dictionary;

export default FormContent;
