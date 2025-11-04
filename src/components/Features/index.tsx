"use client";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FeaturesDesktop } from "@/components/Features/FeaturesDesktop";
import { FeaturesMobile } from "@/components/Features/FeaturesMobile";
import { useFeature } from "@/components/Features/useFeature";

export const Features: FC = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const { featuresData } = useFeature();

  return (
    <>
      {!matches && isClient && <FeaturesDesktop featuresData={featuresData} />}
      {matches && isClient && <FeaturesMobile featuresData={featuresData} />}
    </>
  );
};
