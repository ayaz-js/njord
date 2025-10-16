"use client";
import { FC } from "react";
import { CompassBlack } from "@/components/icons";
import Image from "next/image";
import { FormModal } from "@/components/FormModal";

export const HeroMobile: FC = () => {
  return (
    <section>
      <div className="px-4">
        <div className="flex flex-col gap-2">
          <h1>Производители, контроль партии, брендирование —</h1>
          <div className="flex items-center gap-2">
            <CompassBlack />

            <p className="font-shanghai text-3xl">Весь китай</p>
          </div>
          <p className="text-sm text-blueTextColor font-light">
            через нашу экспертную команду
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
            Мы — ваш отдел закупок в Китае, только лучше.
          </p>
          <p className="text-xs text-blueTextColor font-light">
            Проводим аналитику рынка, выстраиваем стратегию закупок под ваш
            бизнес и делаем предварительный просчёт. Ищем оптимальные
            предложения от реальных производителей, проверяем фабрики и
            контролируем каждую партию. Перед отправкой лично инспектируем
            товар, чтобы исключить брак.
          </p>
          <p className="text-xs text-blueTextColor font-light">
            Тем самым сокращаем издержки, повышаем качество продукции и улучшаем
            имидж вашего бренда, усиливая его конкурентоспособность на рынке.
          </p>
        </div>

        <div className="mt-6">
          <FormModal />
        </div>
      </div>
    </section>
  );
};
