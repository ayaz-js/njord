"use client";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FeaturesDesktop } from "@/components/Features/FeaturesDesktop";
import { FeaturesMobile } from "@/components/Features/FeaturesMobile";
import { featuresData } from "@/components/Features/data";

export const Features: FC = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <>
      {!matches && isClient && <FeaturesDesktop featuresData={featuresData} />}
      {matches && isClient && <FeaturesMobile featuresData={featuresData} />}
    </>
  );
};
