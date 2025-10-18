import React from "react";

export interface Feature {
  title: string;
  sum: string;
  icon: React.ReactNode;
  text: string;
  subtext: string;
}

export interface FeaturesProps {
  featuresData: Feature[];
}
