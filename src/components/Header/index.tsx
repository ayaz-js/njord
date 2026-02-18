"use client";
import { FC } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import dynamic from "next/dynamic";
import { HeaderSkeleton } from "@/components/Skeletons";
import { useIntlayer } from "next-intlayer";

const HeaderDesktop = dynamic(
  () => import("@/components/Header/HeaderDesktop"),
  {
    ssr: false,
    loading: () => <HeaderSkeleton />,
  },
);

const HeaderMobile = dynamic(() => import("@/components/Header/HeaderMobile"), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});

export const Header: FC = () => {
  const content = useIntlayer("header");
  const matches = useMediaQuery("(max-width: 1025px)");

  const headerMenuItems = [
    {
      label: content.aboutUs,
      link: "#about-us",
    },
    {
      label: content.services,
      link: "#services",
    },
    {
      label: content.contacts,
      link: "#contacts",
    },
  ];

  return (
    <>
      {!matches && (
        <HeaderDesktop
          label={content.submitRequest}
          headerMenuItems={headerMenuItems}
        />
      )}
      {matches && (
        <HeaderMobile
          label={content.submitRequest}
          headerMenuItems={headerMenuItems}
        />
      )}
    </>
  );
};
