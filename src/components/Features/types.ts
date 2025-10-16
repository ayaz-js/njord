import React from "react";

export interface FeaturesProps {
  featuresData: {
    title: string;
    sum: string;
    icon: React.ReactNode;
    text: string;
    subtext: string;
  }[];
}
