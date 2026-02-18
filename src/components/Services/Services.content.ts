import { t, type Dictionary } from "intlayer";

export interface Content {
  title: string;
  serviceDeliveryOptions: string;
  services: {
    title: string;
    text: string;
    showFooter: boolean;
    price?: string;
    footer?: string;
  }[];
}

const ServicesContent = {
  key: "services",
  content: {
    title: t({
      ru: "Наши услуги",
      en: "Our Services",
    }),
    services: [
      {
        title: t({
          ru: "Аудит фабрики",
          en: "Factory Audit",
        }),
        text: t({
          ru: "Проверяем производителя в Китае до начала сотрудничества: юридический статус, реальное производство, оборудование, персонал и соответствие заявленным возможностям. Также помогаем провести переговоры с фабрикой, обсудить условия по вашему продукту, технические требования и формат сотрудничества, включая OEM / ODM.",

          en: "We verify the manufacturer in China before cooperation begins: legal status, actual production facilities, equipment, workforce, and compliance with declared capabilities.\nWe also assist in negotiations with the factory, discuss product specifications, technical requirements, and cooperation formats, including OEM/ODM.",
        }),
        showFooter: true,
        price: t({
          ru: "от $200",
          en: "from $200",
        }),
        footer: t({
          ru: "Аудит с выездом специалиста",
          en: "On-site audit by a specialist",
        }),
      },
      {
        title: t({
          ru: "Инспекция и контроль качества",
          en: "Inspection and Quality Control",
        }),
        text: t({
          ru: "Проводим инспекцию товара на любом этапе производства: Проверяем качество, количество, упаковку и соответствие требованиям, предоставляем фото- и видеоотчёт.",
          en: "We conduct product inspections at any stage of production: initial stage, during manufacturing, and/or before shipment of the finished batch.\nWe verify quality, quantity, packaging, and compliance with requirements and provide photo and video reports.",
        }),
        showFooter: true,
        price: t({
          ru: "от $200",
          en: "from $200",
        }),
        footer: t({
          ru: "Инспекция возможна в любой точке Китая",
          en: "Inspection is available anywhere in China",
        }),
      },
      {
        title: t({
          ru: "Поиск товара и производителя",
          en: "Product and Supplier Sourcing",
        }),
        text: t({
          ru: "Подбираем производителей под ваш запрос, ищем оптимальные варианты, ведём переговоры и согласовываем условия. Подходит как для поиска готового товара, так и для запуска производства под ваш продукт.",
          en: "We select manufacturers according to your request, identify optimal options, conduct negotiations, and agree on terms.\nSuitable both for sourcing ready-made products and launching production under your own specifications.",
        }),
        showFooter: false,
        price: t({
          ru: "",
          en: "",
        }),
        footer: t({
          ru: "Услуга поиска товара предоставляется при минимальном бюджете закупки от $1,000 и выше",
          en: "This service is available for projects with a minimum purchasing budget of USD 1,000 and above.",
        }),
      },
      {
        title: t({
          ru: "Производство под вашим брендом (OEM / ODM / White Label)",
          en: "Production Under Your Brand (OEM / ODM / White Label)",
        }),
        text: t({
          ru: "Сопровождаем запуск производства под вашей торговой маркой: OEM, ODM, White Label. Помогаем с подбором фабрики, обсуждением продукта, образцами, согласованием требований и контролем процесса до готовой партии.",
          en: "We support the launch of production under your trademark: OEM, ODM, White Label.\nWe assist with factory selection, sample approval, requirement alignment, and process control up to the release of the finished batch.",
        }),
        showFooter: false,
        price: t({
          ru: "",
          en: "",
        }),
        footer: t({
          ru: "",
          en: "",
        }),
      },
      {
        title: t({
          ru: "Логистика и экспорт",
          en: "Logistics and Export",
        }),
        text: t({
          ru: "Организуем логистику и экспорт готового груза из Китая в страну назначения. Для расчёта доставки требуется полная информация по грузу: объём, вес, упаковка и готовность товара к отгрузке.",
          en: "We organize logistics and export of finished goods from China to the destination country.\nTo calculate shipping costs, we require full cargo details: volume, weight, packaging, and readiness for shipment.",
        }),
        showFooter: false,
        price: t({
          ru: "",
          en: "",
        }),
        footer: t({
          ru: "Логистика предоставляется как отдельная услуга только для готового груза.\nПри сопровождении проекта под ключ логистика включается в общий процесс.",
          en: "Logistics is provided as a standalone service only for ready cargo. For turnkey projects, logistics is integrated into the overall process.",
        }),
      },
    ],
    serviceDeliveryOptions: t({
      ru: "Услуги можно заказывать отдельно или комбинировать в формате сопровождения под ключ — в зависимости от задачи проекта",
      en: "Services can be ordered separately or combined in a turnkey format, depending on the project objectives",
    }),
  },
} satisfies Dictionary<Content>;

export default ServicesContent;
