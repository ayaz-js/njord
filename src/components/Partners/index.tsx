"use client";
import { FC } from "react";
import Image from "next/image";
import { FormModal } from "@/components/FormModal";
import { useIntlayer } from "next-intlayer";

export const Partners: FC = () => {
  const content = useIntlayer("partners");

  const logoCount = 29;
  const logos = Array.from({ length: logoCount }, (_, i) => i + 1);

  return (
    <section className="pt-12 xl:pt-44" id="partners">
      <div className="max-w-baseWidth w-full mx-auto px-4 xl:px-0">
        <div>
          <h2 className="text-xl lg:text-5xl text-blueTextColor flex flex-col">
            {content.titlePrefix}
            <span>{content.title}</span>
          </h2>
          <p className="mt-8 text-brownTextColor font-light">
            {content.subtitle}{" "}
            <span className="font-bold">{content.brandsInclude}</span>
          </p>
        </div>

        <div className="mt-12">
          <ul className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-9 gap-2">
            {logos.map((logo) => (
              <li key={logo}>
                <Image
                  src={`/images/logos/${logo}.svg`}
                  width={140}
                  height={114}
                  alt={`Логотип ${logo}`}
                  className="w-full h-full"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col xl:flex-row gap-4 md:gap-6 items-center justify-between mt-6 lg:mt-16">
          <p className="max-w-full xl:max-w-3xl text-xs lg:text-2xl font-light text-brownTextColor">
            {content.givesYouAccess}
          </p>

          <FormModal />
        </div>
      </div>
    </section>
  );
};
