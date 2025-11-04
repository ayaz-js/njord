import { FC } from "react";
import Image from "next/image";
import { Compass } from "@/components/icons";
import { FormModal } from "@/components/FormModal";
import { useIntlayer } from "next-intlayer";

const HeroDesktop: FC = () => {
  const content = useIntlayer("hero");

  return (
    <section className="py-12">
      <div className="relative max-w-baseWidth w-full mx-auto flex justify-center box-border">
        <Image
          src="/images/hero-desktop.png"
          width={1366}
          height={840}
          alt=""
          className="rounded-3xl"
        />
        <div className="hidden lg:block absolute top-[8%] left-[4%]">
          <p className="text-4xl text-white max-w-[584px] w-full">
            {content.title}
          </p>
          <div className="flex items-center mt-1 gap-2">
            <Compass />
            <p className="font-shanghai text-white text-6xl">
              {content.allOfChina}
            </p>
          </div>
          <p className="text-2xl font-extralight text-white">
            {content.throughOurExpertTeam}
          </p>
          <p className="text-2xl text-white mt-6">{content.workingWithUs}</p>
          <div className="backdrop-blur-xl rounded-tl-3xl rounded-br-3xl bg-white/10 flex flex-col gap-4 px-7 py-4 max-w-2xl w-full mt-6">
            <p className="text-white">{content.weAreYourPurchasing}</p>
            <p className="text-white">{content.weAnalyzeTheMarket}</p>
            <p className="text-white">{content.thisWay}</p>
          </div>
          <div className="mt-6">
            <FormModal className="bg-white !max-w-2xl !w-full !text-center !text-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDesktop;
