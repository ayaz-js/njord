import { FC } from "react";
import { Box } from "@/components/icons";
import { FeaturesProps } from "@/components/Features/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useIntlayer } from "next-intlayer";

export const FeaturesDesktop: FC<FeaturesProps> = ({ featuresData }) => {
  const content = useIntlayer("feature");

  return (
    <section className="pt-40" id="features">
      <div className="flex flex-col justify-between lg:justify-stretch max-w-baseWidth rounded-3xl w-full mx-auto bg-[url('/images/work-bg.png')] bg-cover min-h-min h-full">
        <div className="p-12">
          <h2 className="text-[50px] text-white flex flex-col">
            {content.titlePrefix}
            <span className="font-shanghai flex items-center gap-2">
              <Box />
              {content.work}
            </span>
          </h2>
          <div className="max-w-[600px] w-full mt-6">
            <p className="text-white">{content.weTakeFullControl}</p>
            <p className="font-light text-white">
              {content.fromStrategyAndNegotiations}
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={1.8}
          breakpoints={{
            768: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
            1026: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="!p-12 w-full"
        >
          {featuresData.map((item) => (
            <SwiperSlide key={item.sum}>
              <div className="flex flex-col justify-between backdrop-blur-xl bg-white/10 rounded-2xl min-h-[474px] h-full">
                <div className="p-8">
                  <h2 className="text-white text-2xl flex items-center gap-1 h-16">
                    {item.title}
                    <span className="text-4xl text-skyblueTextColor">
                      {item.sum}
                    </span>
                  </h2>

                  <div className="mt-20">{item.icon}</div>

                  <div className="mt-8">
                    <p className="text-white">
                      {item.text}
                      <span className="font-light">{item.subtext}</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
