import { FC } from "react";
import Link from "next/link";
import { Logo } from "@/components/icons";
import { HeaderProps } from "@/components/Header/types";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const HeaderDesktop: FC<HeaderProps> = ({ headerMenuItems }) => {
  return (
    <header className="hidden lg:block pt-12">
      <div className="max-w-baseWidth w-full mx-auto flex justify-between items-center gap-8 xl:gap-12 px-4 xl:px-0">
        <Link href="/" aria-label="Go to homepage">
          <Logo className="max-w-32 w-full xl:max-w-full xl:w-full" />
        </Link>
        <ul className="flex gap-8 lg:gap-12">
          {headerMenuItems.map((item) => (
            <li
              key={item.label}
              className="text-brownTextColor text-xs xl:text-base"
            >
              <Link href={item.link || ""}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default HeaderDesktop;
