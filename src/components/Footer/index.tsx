"use client";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FooterDesktop } from "@/components/Footer/FooterDesktop";
import { FooterMobile } from "@/components/Footer/FooterMobile";

export const Footer: FC = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <>
      {!matches && isClient && <FooterDesktop />}
      {matches && isClient && <FooterMobile />}
    </>
  );
};
