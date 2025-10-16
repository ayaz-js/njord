import { FC } from "react";
import Image from "next/image";
import { Compass } from "@/components/icons";
import { FormModal } from "@/components/FormModal";

export const HeroDesktop: FC = () => {
  return (
    <section className="py-12">
      <div className="relative max-w-baseWidth w-full mx-auto flex justify-center box-border">
        <Image
          src="/images/hero-desktop.png"
          width={1800}
          height={912}
          alt=""
          className="!w-full object-contain rounded-3xl"
        />
        <div className="hidden lg:block absolute top-[14%] left-[6%]">
          <p className="text-4xl text-white max-w-[584px] w-full">
            Производители, контроль партии, брендирование —
          </p>
          <div className="flex items-center mt-1 gap-2">
            <Compass />
            <p className="font-shanghai text-white text-6xl">Весь китай</p>
          </div>
          <p className="text-2xl font-extralight text-white">
            через нашу экспертную команду
          </p>
          <p className="text-2xl text-white mt-6">
            Работая с нами, Китай работает на вас
          </p>
          <div className="backdrop-blur-xl rounded-tl-3xl rounded-br-3xl bg-white/10 flex flex-col gap-4 px-7 py-4 max-w-2xl w-full mt-6">
            <p className="text-white">
              Мы — ваш отдел закупок в Китае, только лучше.
            </p>
            <p className="text-white">
              Проводим аналитику рынка, выстраиваем стратегию закупок под ваш
              бизнес и делаем предварительный просчёт. Ищем оптимальные
              предложения от реальных производителей, проверяем фабрики и
              контролируем каждую партию. Перед отправкой лично инспектируем
              товар, чтобы исключить брак.
            </p>
            <p className="text-white">
              Тем самым сокращаем издержки, повышаем качество продукции и
              улучшаем имидж вашего бренда, усиливая его конкурентоспособность
              на рынке.
            </p>
          </div>
          <div className="mt-6">
            <FormModal />
          </div>
        </div>
      </div>
    </section>
  );
};
