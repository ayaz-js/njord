"use client";
import { FC, useState } from "react";
import { HeaderProps } from "@/components/Header/types";
import Link from "next/link";
import { Logo, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
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
        <div className="!flex flex-col justify-between h-full">
          <Link href="/">
            <Logo className="max-w-44 w-full" />
          </Link>

          <ul className="!flex flex-col !gap-8">
            {headerMenuItems.map((item) => (
              <li key={item.label}>
                <Link
                  onClick={handleClose}
                  id={item.link}
                  className="text-brownTextColor menu-item"
                  href={item.link || ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />
        </div>
      </Menu>
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <Logo className="max-w-52 w-full" />
        </Link>
        <Button variant="ghost" size="icon" onClick={handleOpen}>
          <MenuIcon className="" />
        </Button>
      </div>
    </header>
  );
};

export default HeaderMobile;
