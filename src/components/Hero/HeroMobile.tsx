"use client";
import { FC } from "react";
import Image from "next/image";
import { FormModal } from "@/components/FormModal";
import { useIntlayer } from "next-intlayer";

const HeroMobile: FC = () => {
  const content = useIntlayer("hero");

  return (
    <section>
      <div className="px-4">
        <div className="flex flex-col gap-2">
          <h1>{content.title}</h1>
        </div>

        <div className="mt-6">
          <FormModal />
        </div>

        <div>
          <Image
            src="/images/hero-mobile.png"
            width={352}
            height={524}
            alt=""
            className="!w-full object-contain mt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
