"use client";
import { FC } from "react";
import { Settings, House, Shiping } from "@/components/icons";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FeaturesDesktop } from "@/components/Features/FeaturesDesktop";
import { FeaturesMobile } from "@/components/Features/FeaturesMobile";

export const Features: FC = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  const featuresData = [
    {
      title: "Стратегия и расчёт",
      sum: "01",
      icon: <Settings />,
      text: "Онлайн-консультация, анализ рынка, построение закупочной модели.",
      subtext:
        "Разбираем ваш запрос, оцениваем нишу, изучаем предложения на рынке Китая и рассчитываем предварительный бюджет.",
    },
    {
      title: "Производство и брендирование",
      sum: "02",
      icon: <House />,
      text: "White Label / OEM / ODM под ваш бизнес. Подбираем производителя,",
      subtext:
        "проводим переговоры учитывая ваши требования и сопровождаем весь цикл запуска — от чертежей до готовой партии.",
    },
    {
      title: "Контроль, отгрузка, экспорт",
      sum: "03",
      icon: <Shiping />,
      text: "Проверка партии, контроль отгрузки и логистика.",
      subtext:
        "Проводим инспекции на фабрике, проверяем качество, готовим экспортные документы, контролируем погрузку и координируем доставку.",
    },
  ];

  return (
    <>
      {!matches && <FeaturesDesktop featuresData={featuresData} />}
      {matches && <FeaturesMobile featuresData={featuresData} />}
    </>
  );
};
