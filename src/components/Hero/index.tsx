"use client";
import { FC } from "react";
import { HeroDesktop } from "@/components/Hero/HeroDesktop";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HeroMobile } from "@/components/Hero/HeroMobile";

export const Hero: FC = () => {
  const matches = useMediaQuery("(max-width: 568px)");

  return (
    <>
      {!matches && <HeroDesktop />}

      {matches && <HeroMobile />}
    </>
  );
};
