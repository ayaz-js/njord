"use client";
import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormInput } from "@/components/FormInput";
import { RadioButtons } from "@/components/RadioButtons";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { clsx } from "clsx";
import { useSubmit } from "@/hooks/useSubmit";
import { useIntlayer, useLocale } from "next-intlayer";

interface Props {
  className?: string;
}

export const FormModal: FC<Props> = ({ className }) => {
  const content = useIntlayer("form");

  const { locale } = useLocale();

  const commentPlaceholderLocalize =
    locale === "en" ? "Additional questions" : "Дополнительные вопросы";

  console.log(locale);

  const { form, isLoading, onChange, onRadioChange, onSubmit } = useSubmit();

  return (
    <Dialog>
      <DialogTrigger
        className={clsx(
          "max-w-full xl:max-w-[534px] w-full !p-3 bg-blueBg text-xs lg:text-xl text-center text-white rounded-xl",
          className,
        )}
      >
        {content.submitRequest}
      </DialogTrigger>
      <DialogContent className="max-w-[90%] xl:max-w-[92%] w-full h-[90%] overflow-auto">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col gap-3 xl:gap-5">
              <p className="text-xl xl:text-4xl self-start">{content.title}</p>
              <p className="text-xs xl:text-sm !text-brownTextColor font-extralight max-w-[418px] w-full text-left">
                {content.subtitle}
              </p>
            </div>

            <div className="w-full h-px bg-[#F7F8FC] my-6" />
          </DialogTitle>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-5">
              <div className="flex flex-col gap-6">
                <FormInput
                  value={form.name}
                  required
                  title={content.inputs.name}
                  text={content.inputs.nameLabel}
                  type="text"
                  placeholder={content.inputs.namePlaceholder}
                  name="name"
                  onChange={onChange}
                />

                <FormInput
                  value={form.company}
                  required
                  title={content.inputs.company}
                  text={content.inputs.companyLabel}
                  type="text"
                  placeholder={content.inputs.companyPlaceholder}
                  name="company"
                  onChange={onChange}
                />

                <FormInput
                  value={form.email}
                  required
                  title={content.inputs.email}
                  text={content.inputs.emailLabel}
                  type="email"
                  placeholder={content.inputs.emailPlaceholder}
                  name="email"
                  onChange={onChange}
                />

                <FormInput
                  value={form.messenger}
                  required
                  title={content.inputs.messenger}
                  text={content.inputs.messengerLabel}
                  type="text"
                  placeholder={content.inputs.messengerPlaceholder}
                  name="messenger"
                  onChange={onChange}
                />
              </div>

              <div className="flex flex-col gap-6">
                <FormInput
                  value={form.product}
                  required
                  title={content.inputs.product}
                  text={content.inputs.productLabel}
                  type="text"
                  placeholder={content.inputs.productPlaceholder}
                  name="product"
                  onChange={onChange}
                />

                <RadioButtons
                  title={content.inputs.experience}
                  defaultValue={content.inputs.experienceValueNo}
                  name="experience"
                  onValueChange={(value) => onRadioChange("experience", value)}
                  radioButtons={[
                    {
                      id: "no",
                      value: content.inputs.experienceValueNo,
                      htmlFor: "no",
                      label: content.inputs.experienceValueNo,
                    },
                    {
                      id: "yes",
                      value: content.inputs.experienceValueYes,
                      htmlFor: "yes",
                      label: content.inputs.experienceValueYes,
                    },
                  ]}
                />

                <RadioButtons
                  title={content.inputs.annualTurnover}
                  text={content.inputs.annualTurnoverLabel}
                  defaultValue={content.inputs.annualTurnoverValueUpTo}
                  name="annualTurnover"
                  onValueChange={(value) =>
                    onRadioChange("annualTurnover", value)
                  }
                  radioButtons={[
                    {
                      id: "up-to-700",
                      value: content.inputs.annualTurnoverValueUpTo,
                      htmlFor: "up-to-700",
                      label: content.inputs.annualTurnoverValueUpTo,
                    },
                    {
                      id: "from-700",
                      value: content.inputs.annualTurnoverValueFrom,
                      htmlFor: "from-700",
                      label: content.inputs.annualTurnoverValueFrom,
                    },
                  ]}
                />

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm xl:text-base text-black text-left">
                      {content.inputs.comment}
                    </span>
                    <span className="text-xs xl:text-sm font-light text-brownTextColor text-left">
                      {content.inputs.commentLabel}
                    </span>
                  </div>

                  <Textarea
                    className="text-black placeholder:font-light placeholder:text-xs xl:placeholder:text-sm"
                    placeholder={commentPlaceholderLocalize}
                    name="comment"
                    value={form.comment}
                    onChange={onChange}
                    rows={3}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 justify-between items-center gap-8 mt-4 xl:mt-8">
              <p className="text-xs xl:text-sm text-brownTextColor font-light text-left max-w-[300px] xl:max-w-full w-full">
                {content.modalFooterTitle}
                <span className="font-bold">
                  {content.modalFooterPrefix}
                </span>{" "}
                {content.modalFooterText}
              </p>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blueBg text-white"
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : content.send}
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
