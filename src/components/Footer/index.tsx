"use client";
import { FC } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FooterDesktop } from "@/components/Footer/FooterDesktop";
import { FooterMobile } from "@/components/Footer/FooterMobile";

export const Footer: FC = () => {
  const matches = useMediaQuery("(max-width: 568px)");

  return (
    <>
      {!matches && <FooterDesktop />}
      {matches && <FooterMobile />}
    </>
  );
};
