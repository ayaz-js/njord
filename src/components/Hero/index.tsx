"use client";
import { FC } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HeroSkeleton } from "@/components/Skeletons/HeroSkeleton";
import dynamic from "next/dynamic";

const HeroDesktop = dynamic(() => import("@/components/Hero/HeroDesktop"), {
  ssr: false,
  loading: () => <HeroSkeleton />,
});

const HeroMobile = dynamic(() => import("@/components/Hero/HeroMobile"), {
  ssr: false,
  loading: () => <HeroSkeleton />,
});

export const Hero: FC = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {!matches && <HeroDesktop />}

      {matches && <HeroMobile />}
    </>
  );
};
