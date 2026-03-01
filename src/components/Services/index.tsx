"use client";
import { FC } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntlayer } from "next-intlayer";
import { Separator } from "@/components/ui/separator";
import { ContactPanel } from "@/components/ContactPanel";

export const Services: FC = () => {
  const content = useIntlayer("services");

  return (
    <section id="services" className="pt-12 xl:pt-20">
      <div className="max-w-baseWidth w-full mx-auto px-4 xl:px-0">
        <h2 className="text-xl xl:text-5xl text-center text-blueTextColor">
          {content.title}
        </h2>

        <div className="flex flex-col mt-8 xl:mt-12">
          {content.services.map((item, index) => (
            <Collapsible
              key={index}
              className="data-[state=open]:bg-muted rounded-3xl data-[state=open]:mb-3"
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="data-[state=open]:bg-muted bg-white group w-full rounded-2xl xl:rounded-[32px] h-14 xl:h-28 px-3 xl:px-8"
                >
                  <div className="flex items-center w-full gap-5">
                    <div className="text-xs xl:text-xl py-2 xl:py-3 max-w-12 xl:max-w-14 w-full rounded-xl bg-blueBg text-white">
                      0{index + 1}
                    </div>
                    <p className="text-sm xl:text-2xl text-blueTextColor text-left !whitespace-normal !break-words">
                      {item.title}
                    </p>
                  </div>
                  <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="flex flex-col items-start gap-2 p-3 xl:p-8 pt-0 text-sm">
                <p className="mt-4 xl:mt-0 text-xs xl:text-xl font-light whitespace-pre-line">
                  {item.text}
                </p>

                {item.footer && (
                  <div className="w-full mt-6">
                    <Separator />
                    <div className="mt-6 flex items-center gap-1">
                      <p className="text-xs xl:text-sm text-blueTextColor opacity-60 whitespace-pre-line">
                        {item.footer}
                      </p>
                      {item.price && item.showFooter && (
                        <p className="text-xs xl:text-sm text-center text-blueTextColor bg-gray-200 py-3 xl:p-3 rounded-2xl max-w-20 xl:max-w-full w-full xl:w-auto">
                          {item.price}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          ))}

          <div className="border border-black rounded-2xl py-4 px-4 xl:px-6 w-full">
            <p className="text-xs xl:text-sm text-center text-blueTextColor">
              {content.serviceDeliveryOptions}
            </p>
          </div>

          <ContactPanel />
        </div>
      </div>
    </section>
  );
};
