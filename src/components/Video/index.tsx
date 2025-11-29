"use client";
import { FC } from "react";
import { useIntlayer } from "next-intlayer";

export const Video: FC = () => {
  const content = useIntlayer("video");

  return (
    <section className="pt-12 xl:pt-44" id="video">
      <div className="max-w-baseWidth w-full mx-auto px-4 xl:px-0">
        <div>
          <h2 className="text-xl xl:text-5xl text-left xl:text-center text-blueTextColor">
            {content.title}
          </h2>
        </div>

        <div className="mt-8 xl:mt-16">
          <div className="bg-[#dbdee3] w-full h-[300px] xl:h-[800px] rounded-3xl p-4 xl:p-8">
            <iframe
              src="https://www.youtube.com/embed/iww2ri2QOnQ?si=c19Tucek5dbPwQs4"
              title="njord video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="max-w-full w-full h-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
