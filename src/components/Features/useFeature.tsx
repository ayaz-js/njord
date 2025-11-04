import { useIntlayer } from "next-intlayer";
import { House, Settings, Shiping } from "@/components/icons";

export const useFeature = () => {
  const content = useIntlayer("feature");

  const featuresData = [
    {
      title: content.cards.card_1.title,
      sum: "01",
      icon: <Settings />,
      text: content.cards.card_1.text,
      subtext: content.cards.card_1.subtext,
    },
    {
      title: content.cards.card_2.title,
      sum: "02",
      icon: <House />,
      text: content.cards.card_2.text,
      subtext: content.cards.card_2.subtext,
    },
    {
      title: content.cards.card_3.title,
      sum: "03",
      icon: <Shiping />,
      text: content.cards.card_3.text,
      subtext: content.cards.card_3.subtext,
    },
  ];

  return { featuresData };
};
