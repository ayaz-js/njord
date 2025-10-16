import { FC } from "react";
import { Patterns, CompassBlack } from "@/components/icons";
import Image from "next/image";

export const AboutUs: FC = () => {
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
            О компании
          </h2>
          <p className="flex flex-col font-light text-xs xl:text-2xl text-center text-brownTextColor mt-3 2xl:mt-6">
            NJORD INTERNATIONAL TRADE CO., LTD.
            <span>尼奥尔德（厦门）国际贸易有限公司</span>
          </p>
        </div>

        <div className="mt-8 2xl:mt-20 flex flex-col lg:grid lg:grid-cols-2 gap-4 2xl:gap-14 items-center content-center">
          <Image src="/images/peoples.png" width="664" height="374" alt="" />

          <div>
            <h2>Кто мы?</h2>
            <p className="mt-3 2xl:mt-6 text-xs lg:text-base 2xl:text-xl font-light flex flex-col max-w-2xl">
              Мы — ваши люди в Китае.
              <span>
                Независимые представители, которые заменят вам отдел закупок.
              </span>
            </p>

            <div className="mt-6 2xl:mt-12">
              <h2>Наша команда</h2>
              <p className="mt-3 2xl:mt-6 text-xs lg:text-base 2xl:text-xl font-light max-w-2xl">
                Наша команда — это не случайные менеджеры, а люди, которые
                живут, учились и владеют языком и менталитетом. Объединение
                экспертов, которые сами строят свой бизнес с китайскими
                производителями. Знаем, как устроен рынок, как мыслят фабрики, и
                как выжать максимум условий в переговорах. У нас есть связи,
                опыт и уверенность в каждом шаге.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 2xl:mt-20 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 2xl:gap-14 items-center content-center">
          <div>
            <h2>Наш подход</h2>
            <p className="mt-3 2xl:mt-6 text-xs lg:text-base 2xl:text-xl font-light flex flex-col max-w-2xl">
              Не берём всех подряд. Нам не нужны десятки проектов ради
              количества — мы работаем на качество и результат. Если берёмся за
              ваш бизнес — значит, он действительно стоит того, чтобы с ним
              работать.
            </p>

            <div className="mt-6 2xl:mt-12">
              <h2>Процесс сотрудничества</h2>
              <p className="mt-3 2xl:mt-6 text-xs lg:text-base 2xl:text-xl font-light max-w-2xl">
                Только индивидуальный подход. Только глубокая работа, личный
                контроль и полное погружение. Отвечаем репутацией — а значит,
                позволить себе «как-нибудь» просто не можем. Нас не надо
                обучать. Нас надо подключать. И тогда Китай начнёт работать на
                вас.
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
