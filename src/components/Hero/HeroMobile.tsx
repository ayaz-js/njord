"use client";
import { FC } from "react";
import { CompassBlack } from "@/components/icons";
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
          <div className="flex items-center gap-2">
            <CompassBlack />

            <p className="font-shanghai text-3xl">{content.allOfChina}</p>
          </div>
          <p className="text-sm text-blueTextColor font-light">
            {content.throughOurExpertTeam}
          </p>
        </div>

        <div className="relative">
          <Image
            src="/images/hero-mobile.png"
            width={352}
            height={524}
            alt=""
            className="!w-full object-contain mt-4"
          />

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 backdrop-blur-sm rounded-tl-3xl rounded-br-3xl bg-white/10 flex flex-col gap-4 py-4 max-w-72 w-full">
            <p className="flex flex-col items-center justify-center text-white text-center">
              Работая с нами, <span>Китай работает на вас</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <p className="text-xs text-blueTextColor font-light">
            {content.weAreYourPurchasing}
          </p>
          <p className="text-xs text-blueTextColor font-light">
            {content.weAnalyzeTheMarket}
          </p>
          <p className="text-xs text-blueTextColor font-light">
            {content.thisWay}
          </p>
        </div>

        <div className="mt-6">
          <FormModal />
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
