import { FC } from "react";
import Image from "next/image";
import { FormModal } from "@/components/FormModal";
import { useIntlayer } from "next-intlayer";

const HeroDesktop: FC = () => {
  const content = useIntlayer("hero");

  return (
    <section className="pt-12">
      <div className="relative max-w-baseWidth w-full mx-auto flex justify-center box-border">
        <Image
          src="/images/hero-desktop.png"
          width={1366}
          height={500}
          alt=""
        />
        <div className="hidden lg:flex flex-col absolute top-[10%] left-[4%] justify-between h-[80%]">
          <p className="text-4xl text-white max-w-[584px] w-full">
            {content.title}
          </p>

          <FormModal className="bg-white !max-w-xs !w-full !h-14 !text-center !text-black" />
        </div>
      </div>
    </section>
  );
};

export default HeroDesktop;
