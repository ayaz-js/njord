import { FC } from "react";
import { Box } from "@/components/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useIntlayer } from "next-intlayer";
import { ContactPanel } from "@/components/ContactPanel";

export const FeaturesMobile: FC = () => {
  const content = useIntlayer("feature");

  return (
    <section className="pt-12" id="features">
      <div className="max-w-baseWidth mx-auto bg-[url('/images/work-bg-mobile.png')] bg-cover bg-no-repeat w-full min-h-screen pb-6 sm:pb-12 px-4">
        <div className="py-4">
          <h2 className="text-xl text-white flex flex-col gap-2">
            {content.titlePrefix}
            <span className="font-shanghai text-3xl flex items-center gap-2">
              <Box className="w-10 h-10" />
              {content.work}
            </span>
          </h2>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1.8,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          centeredSlides={true}
          className="!px-0 sm:!px-12 w-full"
        >
          {content.cards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-between backdrop-blur-xl bg-white/10 rounded-2xl min-h-[422px] sm:min-h-[498px] ">
                <div className="p-6">
                  <h2 className="text-white text-xl sm:text-base flex items-center justify-between gap-1 h-16">
                    {item.title}
                    <span className="text-base text-skyblueTextColor">
                      0{index + 1}
                    </span>
                  </h2>

                  <div className="mt-8">
                    <svg
                      width="66"
                      height="66"
                      viewBox="0 0 66 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {item.icon}
                    </svg>
                  </div>

                  <div className="mt-5">
                    <p className="text-white">{item.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-4 px-4">
        <div className="border border-black rounded-2xl py-4 px-4 xl:px-6 w-full">
          <p className="text-xs xl:text-sm text-center text-blueTextColor">
            {content.serviceDeliveryOptions}
          </p>
        </div>
        <ContactPanel />
      </div>
    </section>
  );
};
