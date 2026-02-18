"use client";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FooterDesktop } from "@/components/Footer/FooterDesktop";
import { FooterMobile } from "@/components/Footer/FooterMobile";
import { useIntlayer } from "next-intlayer";

export const Footer: FC = () => {
  const content = useIntlayer("footer");

  const matches = useMediaQuery("(max-width: 768px)");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <>
      {!matches && isClient && <FooterDesktop label={content.submitRequest} />}
      {matches && isClient && <FooterMobile label={content.submitRequest} />}
    </>
  );
};
