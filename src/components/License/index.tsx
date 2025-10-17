"use client";
import { FC } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DesktopLicense } from "@/components/License/DesktopLicense";
import { MobileLicense } from "@/components/License/MobileLicense";

export const License: FC = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {!matches && <DesktopLicense />}
      {matches && <MobileLicense />}
    </>
  );
};
