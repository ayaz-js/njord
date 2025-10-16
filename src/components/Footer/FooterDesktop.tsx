import { FC } from "react";
import Link from "next/link";

export const FooterDesktop: FC = () => {
  return (
    <footer className="mt-44 bg-[#d0d6de]" id="contacts">
      <div className="max-w-baseWidth w-full mx-auto py-20 flex gap-20">
        <div className="flex flex-col justify-between gap-32 shrink flex-1">
          <h2 className="text-5xl">Контакты</h2>
          <div className="flex gap-14">
            <p className="text-sm font-light items-end">
              © {new Date().getFullYear()}
            </p>
            <p className="max-w-sm w-full text-sm font-light">
              NJORD INTERNATIONAL TRADE CO., LTD.
              尼奥尔德（厦门）国际贸易有限公司
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-2xl">Наш офис в Китае:</p>
            <p className="text-xl font-light">厦门市海沧区新景西里341号301室</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl">WeChat / Telegram:</p>
            <p className="text-xl font-light">+86 195 4049 6531</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-2xl">Email:</p>
            <Link
              href="mailto:njord.madeinchina@gmail.com"
              className="text-xl font-light"
            >
              njord.madeinchina@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl">WhatsApp:</p>
            <Link
              href="https://wa.me/8613660884790"
              className="text-xl font-light"
            >
              +86 136 6088 4790
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
