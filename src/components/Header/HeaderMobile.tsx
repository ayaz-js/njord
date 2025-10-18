"use client";
import { FC, useState } from "react";
import { HeaderProps } from "@/components/Header/types";
import Link from "next/link";
import { Logo, MenuIcon } from "@/components/icons";
import { push as Menu } from "react-burger-menu";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const HeaderMobile: FC<HeaderProps> = ({ headerMenuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <header>
      <Menu
        right
        isOpen={isOpen}
        width="50%"
        burgerButtonClassName="hidden"
        onClose={handleClose}
        className="p-6 bg-white"
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
      >
        <div className="!flex flex-col h-full">
          <Link href="/">
            <Logo className="max-w-44 w-full" />
          </Link>

          <ul className="!flex flex-col gap-4 xl:!gap-8 mt-8">
            {headerMenuItems.map((item) => (
              <li key={item.label}>
                <Link
                  onClick={handleClose}
                  id={item.link}
                  className="text-brownTextColor menu-item text-sm xl:text-base"
                  href={item.link || ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <LanguageSwitcher className="mt-auto" />
        </div>
      </Menu>
      <div className="flex items-center justify-between p-4">
        <Link href="/" aria-label="Go to homepage">
          <Logo className="max-w-44 w-full" />
        </Link>
        <button onClick={handleOpen} role="button" aria-label="Menu button">
          <MenuIcon className="w-6" />
        </button>
      </div>
    </header>
  );
};

export default HeaderMobile;
