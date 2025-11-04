"use client";
import { FC } from "react";
import { Patterns, CompassBlack } from "@/components/icons";
import Image from "next/image";
import { useIntlayer } from "next-intlayer";

export const AboutUs: FC = () => {
  const content = useIntlayer("about-us");

  return (
    <section className="pt-12 xl:pt-20" id="about-us">
      <div className="max-w-baseWidth w-full mx-auto px-4 xl:px-0">
        <div className="flex justify-between items-center">
          <CompassBlack />
          <Patterns className="max-w-36 w-full xl:max-w-full" />
          <CompassBlack />
        </div>

        <div className="mt-8 2xl:mt-20">
          <h2 className="text-xl xl:text-5xl text-center text-blueTextColor">
            {content.title}
          </h2>
          <p className="flex flex-col font-light text-xs xl:text-2xl text-center text-brownTextColor mt-3 2xl:mt-6">
            NJORD INTERNATIONAL TRADE CO., LTD.
            <span>尼奥尔德（厦门）国际贸易有限公司</span>
          </p>
        </div>

        <div className="mt-8 2xl:mt-20 flex flex-col lg:grid lg:grid-cols-2 gap-4 2xl:gap-14 items-center content-center">
          <Image src="/images/peoples.png" width="664" height="374" alt="" />

          <div>
            <h2>{content.whoAreWe}</h2>
            <p className="mt-3 2xl:mt-6 text-xs lg:text-base 2xl:text-xl font-light flex flex-col max-w-2xl">
              {content.weAre}
              <span>{content.independent}</span>
            </p>

            <div className="mt-6 2xl:mt-12">
              <h2>{content.ourTeam}</h2>
              <p className="mt-3 2xl:mt-6 text-xs lg:text-base 2xl:text-xl font-light max-w-2xl">
                {content.ourTeamText}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 2xl:mt-20 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 2xl:gap-14 items-center content-center">
          <div>
            <h2>{content.ourApproach}</h2>
            <p className="mt-3 2xl:mt-6 text-xs lg:text-base 2xl:text-xl font-light flex flex-col max-w-2xl">
              {content.ourApproachText}
            </p>

            <div className="mt-6 2xl:mt-12">
              <h2>{content.theCooperationProcess}</h2>
              <p className="mt-3 2xl:mt-6 text-xs lg:text-base 2xl:text-xl font-light max-w-2xl">
                {content.theCooperationProcessText}
              </p>
            </div>
          </div>
          <Image
            src="/images/about-us-pic.png"
            width="664"
            height="374"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
