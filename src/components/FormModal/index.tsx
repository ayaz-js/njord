"use client";
import React, { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormInput } from "@/components/FormInput";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { clsx } from "clsx";
import { useSubmit } from "@/hooks/useSubmit";
import { IntlayerNode, useIntlayer, useLocale } from "next-intlayer";
import { Checkboxes } from "@/components/Checkboxes";
import { FieldLegend, FieldSet } from "@/components/ui/field";

interface Props {
  className?: string;
  label?: IntlayerNode<string>;
}

export const FormModal: FC<Props> = ({ className, label }) => {
  const content = useIntlayer("form");

  const { locale } = useLocale();

  const commentPlaceholderLocalize =
    locale === "en" ? "Additional questions" : "Дополнительные вопросы";

  const { form, isLoading, onCheckboxChange, onChange, onSubmit } = useSubmit();

  const servicesList = [
    {
      id: "factory_audit",
      value: "Аудит / проверка фабрики",
      label: content.inputs.factoryAudit,
    },
    {
      id: "batch_inspection",
      value: "Инспекция партии товара на фабрике",
      label: content.inputs.batchInspectionAtTheFactory,
    },
    {
      id: "product",
      value: "Поиск товара / производителя",
      label: content.inputs.product,
    },
    {
      id: "branded_production",
      value: "OEM / ODM / White Label (производство под бренд)",
      label: content.inputs.brandedProduction,
    },
    {
      id: "logistics_and_export",
      value: "Логистика и экспорт готового груза",
      label: content.inputs.logisticsAndExport,
    },
    {
      id: "other",
      value: "Другое",
      label: content.inputs.other,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger
        className={clsx(
          "max-w-full xl:max-w-[534px] w-full !p-3 bg-blueBg text-xs lg:text-xl text-center text-white rounded-xl",
          className,
        )}
      >
        {label || content.submitRequest}
      </DialogTrigger>
      <DialogContent className="max-w-[375px] xl:max-w-[642px] w-full h-[90%] overflow-auto !rounded-3xl">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col gap-3 xl:gap-5">
              <p className="text-xl xl:text-2xl self-start">{content.title}</p>
              <p className="text-xs xl:text-sm !text-brownTextColor font-extralight max-w-[418px] w-full text-left">
                {content.subtitle}
              </p>
            </div>
          </DialogTitle>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 justify-between gap-5 mt-6">
              <div className="flex flex-col gap-6">
                <FieldSet>
                  <FieldLegend className="mb-6 text-left" variant="legend">
                    {content.whichServiceDoYouNeed}
                  </FieldLegend>
                  {servicesList.map((service) => (
                    <Checkboxes
                      key={service.value}
                      id={service.id}
                      value={service.value}
                      label={service.label}
                      checked={form.services.includes(service.value)}
                      onCheckedChange={onCheckboxChange}
                    />
                  ))}
                </FieldSet>

                <FormInput
                  value={form.name}
                  required
                  title={content.inputs.name}
                  type="text"
                  placeholder={content.inputs.namePlaceholder}
                  name="name"
                  onChange={onChange}
                />

                <FormInput
                  value={form.messenger}
                  required
                  title={content.inputs.messenger}
                  type="text"
                  placeholder={content.inputs.messengerPlaceholder}
                  name="messenger"
                  onChange={onChange}
                />

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm xl:text-base text-black text-left">
                      {content.inputs.comment}
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

            <div className="grid grid-cols-1 justify-between items-center gap-4 mt-4 xl:mt-8">
              <p className="text-xs xl:text-sm text-brownTextColor font-light text-left max-w-[300px] xl:max-w-full w-full">
                {content.modalFooterTitle}
              </p>
              <Button
                type="submit"
                size="lg"
                className="rounded-2xl w-full bg-blueBg text-white"
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
