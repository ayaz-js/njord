"use client";
import { FC } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import dynamic from "next/dynamic";
import { HeaderSkeleton } from "@/components/Skeletons";

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
  const matches = useMediaQuery("(max-width: 1025px)");

  const headerMenuItems = [
    {
      label: "О компании",
      link: "#about-us",
    },
    {
      label: "Как мы работаем",
      link: "#features",
    },
    {
      label: "Наши партнёры",
      link: "#partners",
    },
    {
      label: "Видео",
      link: "#",
    },
    {
      label: "Контакты",
      link: "#contacts",
    },
  ];

  return (
    <>
      {!matches && <HeaderDesktop headerMenuItems={headerMenuItems} />}
      {matches && <HeaderMobile headerMenuItems={headerMenuItems} />}
    </>
  );
};
