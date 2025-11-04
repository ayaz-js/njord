import React from "react";
import { IntlayerNode } from "next-intlayer";

export interface Feature {
  title: IntlayerNode<string>;
  sum: string;
  icon: React.ReactNode;
  text: IntlayerNode<string>;
  subtext: IntlayerNode<string>;
}

export interface FeaturesProps {
  featuresData: Feature[];
}
