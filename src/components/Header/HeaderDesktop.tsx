import { FC } from "react";
import Link from "next/link";
import { Logo, Whatsapp, Telegram } from "@/components/icons";
import { HeaderProps } from "@/components/Header/types";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { FormModal } from "@/components/FormModal";

const HeaderDesktop: FC<HeaderProps> = ({ headerMenuItems, label }) => {
  return (
    <header className="hidden lg:block pt-12">
      <div className="max-w-baseWidth w-full mx-auto flex justify-between items-center px-4 xl:px-0">
        <div className="flex gap-8 items-center">
          <Link href="/" aria-label="Go to homepage">
            <Logo className="max-w-[184px] w-full" />
          </Link>
          <ul className="flex gap-6">
            {headerMenuItems.map((item) => (
              <li
                key={item.link}
                className="text-brownTextColor text-xs xl:text-sm"
              >
                <Link href={item.link || ""}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6 justify-end">
          <div className="flex flex-col">
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
          <div className="flex items-center gap-2">
            <Link href="/">
              <Whatsapp />
            </Link>

            <Link href="/">
              <Telegram />
            </Link>
          </div>
          <FormModal
            label={label}
            className="xl:!max-w-full !min-w-[300px] !rounded-2xl !text-xs"
          />

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
