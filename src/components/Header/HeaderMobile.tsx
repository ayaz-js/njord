"use client";
import { FC, useState } from "react";
import { HeaderProps } from "@/components/Header/types";
import Link from "next/link";
import { Logo, MenuIcon, Telegram, Whatsapp } from "@/components/icons";
import { push as Menu } from "react-burger-menu";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { FormModal } from "@/components/FormModal";

const HeaderMobile: FC<HeaderProps> = ({ headerMenuItems, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <header>
      <Menu
        right
        isOpen={isOpen}
        width="80%"
        burgerButtonClassName="hidden"
        onClose={handleClose}
        className="py-6 px-4 bg-white"
        outerContainerId="outer-container"
      >
        <div className="!flex flex-col justify-between h-full">
          <div>
            <Link href="/">
              <Logo className="max-w-44 w-full" />
            </Link>

            <div className="mt-8">
              <ul className="!flex flex-col gap-4 xl:!gap-8">
                {headerMenuItems.map((item) => (
                  <li key={item.link}>
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

              {/*<Button*/}
              {/*  size="lg"*/}
              {/*  className="w-full rounded-2xl bg-blueBg text-xs px-4 mt-8"*/}
              {/*>*/}
              {/*  Заказать бесплатную консультацию*/}
              {/*</Button>*/}

              <FormModal
                handleClose={handleClose}
                label={label}
                className="!mt-8 !max-w-full !rounded-2xl !text-xs"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <Link href="tel:+8613660884790" className="text-xs font-medium">
                +86 136 6088 4790
              </Link>
              <Link
                href="mailto:njord.madeinchina@gmail.com"
                className="text-xs font-medium"
              >
                njord.madeinchina@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href="https://wa.me/8613660884790">
                <Whatsapp />
              </Link>

              <Link href="https://t.me/+8613660884790">
                <Telegram />
              </Link>
            </div>
          </div>

          <LanguageSwitcher />
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
