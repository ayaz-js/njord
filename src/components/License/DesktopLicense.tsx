"use client";
import { FC } from "react";
import { ArrowRight } from "@/components/icons";
import Image from "next/image";
import { useIntlayer } from "next-intlayer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const DesktopLicense: FC = () => {
  const content = useIntlayer("license");

  return (
    <section className="pt-44">
      <div className="max-w-baseWidth w-full mx-auto px-0">
        <div className="bg-white w-full rounded-2xl p-20">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-32">
              <div className="flex flex-col gap-8">
                <h2 className="text-5xl text-blueTextColor">{content.title}</h2>
                <p className="text-2xl max-w-[388px] text-brownTextColor font-light">
                  {content.subtitle}
                </p>
              </div>

              <Button variant="outline" size="lg" className="p-0">
                <Link
                  href="/license.pdf"
                  target="_blank"
                  className="w-full h-full flex items-center gap-2 justify-center"
                >
                  {content.openLicense}
                  <ArrowRight className="w-4 h-auto" />
                </Link>
              </Button>
            </div>
            <div>
              <Image
                width={660}
                height={476}
                alt=""
                src="/images/license.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
