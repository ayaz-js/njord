"use client";
import { FC } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import dynamic from "next/dynamic";

const HeaderDesktop = dynamic(
  () => import("@/components/Header/HeaderDesktop"),
  {
    ssr: false,
  },
);

const HeaderMobile = dynamic(() => import("@/components/Header/HeaderMobile"), {
  ssr: false,
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
