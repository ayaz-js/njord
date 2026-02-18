import { FC } from "react";
import { Box } from "@/components/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useIntlayer } from "next-intlayer";
import { ContactPanel } from "@/components/ContactPanel";

export const FeaturesDesktop: FC = () => {
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
          {content.cards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-between backdrop-blur-xl bg-white/10 rounded-2xl min-h-[500px] h-full">
                <div className="p-8">
                  <h2 className="text-white text-xl flex  gap-1 h-16">
                    {item.title}
                    <span className="text-4xl text-skyblueTextColor">
                      0{index + 1}
                    </span>
                  </h2>

                  <div className="mt-20">
                    <svg
                      width="67"
                      height="66"
                      viewBox="0 0 67 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {item.icon}
                    </svg>
                  </div>

                  <div className="mt-8">
                    <p className="text-xl font-light text-white">{item.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-w-baseWidth w-full mx-auto mt-10">
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
