import { FC } from "react";
import { useIntlayer } from "next-intlayer";
import Link from "next/link";
import { Telegram, Whatsapp, Email, Wechat } from "@/components/icons";
import { FormModal } from "@/components/FormModal";

export const ContactPanel: FC = () => {
  const content = useIntlayer("contact-panel");

  return (
    <div className="flex items-center justify-center w-full mt-5 xl:mt-12">
      <div className="flex flex-col items-center gap-5 xl:gap-10">
        <FormModal className="max-w-full xl:!max-w-[356px] !rounded-2xl !text-sm xl:!text-xl" />

        <div>
          <p className="flex flex-col items-center text-center text-sm text-blueTextColor">
            {content.title}
            <Link href="/">+86 136 6088 4790</Link>
          </p>

          <div className="flex justify-center items-center gap-6 mt-4">
            <Link href="/">
              <Whatsapp />
            </Link>

            <Link href="/">
              <Telegram />
            </Link>

            <Link href="/">
              <Wechat />
            </Link>

            <Link href="/">
              <Email />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
