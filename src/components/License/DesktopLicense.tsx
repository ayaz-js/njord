import { FC } from "react";
import { ArrowRight } from "@/components/icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const DesktopLicense: FC = () => {
  return (
    <section className="pt-44">
      <div className="max-w-baseWidth w-full mx-auto px-0">
        <div className="bg-white w-full rounded-2xl p-20">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-32">
              <div className="flex flex-col gap-8">
                <h2 className="text-5xl text-blueTextColor">Лицензия</h2>
                <p className="text-2xl max-w-[388px] text-brownTextColor font-light">
                  Официальная регистрация компании в Китае
                </p>
              </div>

              <Button variant="outline" size="lg">
                Открыть лицензию <ArrowRight className="w-4 h-auto" />
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
