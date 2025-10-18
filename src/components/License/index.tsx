"use client";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DesktopLicense } from "@/components/License/DesktopLicense";
import { MobileLicense } from "@/components/License/MobileLicense";

export const License: FC = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <>
      {!matches && isClient && <DesktopLicense />}
      {matches && isClient && <MobileLicense />}
    </>
  );
};
