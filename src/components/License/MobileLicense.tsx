import { FC } from "react";
import { ArrowRight } from "@/components/icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const MobileLicense: FC = () => {
  return (
    <section className="pt-12">
      <div className="max-w-baseWidth w-full mx-auto px-4">
        <div className="w-full rounded-2xl p-6 bg-white">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl text-blueTextColor">Лицензия</h2>
                <p className="text-sm max-w-[300px] text-brownTextColor font-light">
                  Официальная регистрация компании в Китае
                </p>
              </div>
              <Image
                width={660}
                height={476}
                alt=""
                src="/images/license.png"
              />
            </div>
          </div>
        </div>
        <Button variant="secondary" size="lg" className="mt-3 w-full text-xs">
          Открыть лицензию <ArrowRight className="w-4 h-auto" />
        </Button>
      </div>
    </section>
  );
};
