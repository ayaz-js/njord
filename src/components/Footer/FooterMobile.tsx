import { FC } from "react";
import Link from "next/link";
import { useIntlayer } from "next-intlayer";

export const FooterMobile: FC = () => {
  const content = useIntlayer("footer");

  return (
    <footer className="mt-12 bg-[#d0d6de]" id="contacts">
      <div className="max-w-baseWidth w-full mx-auto py-14 flex flex-col gap-6 px-4">
        <h2 className="text-xl">{content.contacts}</h2>

        <div className="w-full h-px bg-[#192E41] opacity-10" />

        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-base">{content.ourOffice}</p>
            <p className="text-xs text-brownTextColor font-light">
              厦门市海沧区新景西里341号301室
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base">WeChat / Telegram:</p>
            <p className="text-xs text-brownTextColor font-light">
              +86 136 6088 4790
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-base">Email:</p>
            <Link
              href="mailto:njord.madeinchina@gmail.com"
              className="text-xs text-brownTextColor font-light"
            >
              njord.madeinchina@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base">WhatsApp:</p>
            <Link
              href="https://wa.me/8613660884790"
              className="text-xs text-brownTextColor font-light"
            >
              +86 136 6088 4790
            </Link>
          </div>
        </div>

        <div className="w-full h-px bg-[#192E41] opacity-10" />

        <div className="flex justify-between items-center">
          <p className="text-[10px] font-light">
            © {new Date().getFullYear()}
          </p>
          <p className="max-w-56 w-full text-[10px] font-light text-right">
            NJORD INTERNATIONAL TRADE CO., LTD. 尼奥尔德（厦门）国际贸易有限公司
          </p>
        </div>
      </div>
    </footer>
  );
};
