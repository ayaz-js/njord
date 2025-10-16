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
import { RadioButtons } from "@/components/RadioButtons";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

export const FormModal: FC = () => {
  const BASE_URL =
    "https://script.google.com/macros/s/AKfycbxNhL4YclZI3auzd3sfDxV7dk_GZ9hH97aeP9Jo9OXg3H7kqnsRwZyfGe4nf0tjLaxt/exec";

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    messenger: "",
    product: "",
    comment: "",
    experience: "",
    annualTurnover: "",
  });

  const resetForm = () => {
    setForm({
      name: "",
      company: "",
      email: "",
      messenger: "",
      product: "",
      comment: "",
      experience: "",
      annualTurnover: "",
    });
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  const onRadioChange = (name: string, value: string) => {
    setForm((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const _formData = new FormData();

    _formData.append("Имя", form.name);
    _formData.append("Компания", form.company);
    _formData.append("Почта", form.email);
    _formData.append("Месседжер", form.messenger);
    _formData.append("Товар", form.product);
    _formData.append("Дополнительные вопросы", form.comment);
    _formData.append("Опыт работы с Китаем", form.experience);
    _formData.append("Годовой оборот вашей компании", form.annualTurnover);

    fetch(BASE_URL, {
      method: "POST",
      body: _formData,
    })
      .then(() => resetForm())
      .then(() => toast.success("Event has been created"))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <Dialog>
      <DialogTrigger
        className="max-w-wull xl:max-w-[534px] w-full
             !p-4 lg:!p-6 bg-blueBg text-xs lg:text-xl text-center xl:text-left !text-wrap text-white rounded-xl"
      >
        Оставить заявку и получить предварительный просчёт закупки
      </DialogTrigger>
      <DialogContent className="max-w-[90%] xl:max-w-[92%] w-full h-[90%] overflow-auto">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col gap-3 xl:gap-5">
              <p className="text-xl xl:text-4xl self-start">Связь с нами</p>
              <p className="text-xs xl:text-sm !text-brownTextColor font-extralight max-w-[418px] w-full text-left">
                (Заполните короткую форму ниже, чтобы мы могли быстро оценить
                ваш проект)
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
                  title="Ваше имя, город и страна (обязательно)"
                  text="Чтобы мы знали, как к вам обращаться и с какой страны идёт запрос."
                  type="text"
                  placeholder="Имя"
                  name="name"
                  onChange={onChange}
                />

                <FormInput
                  value={form.company}
                  required
                  title="Название вашей компании (обязательно)"
                  text="Если вы представляете бизнес — укажите также свою должность."
                  type="text"
                  placeholder="Компания"
                  name="company"
                  onChange={onChange}
                />

                <FormInput
                  value={form.email}
                  required
                  title="E-mail (обязательно)"
                  text="Для отправки коммерческого предложения и связи."
                  type="email"
                  placeholder="Эл.почта"
                  name="email"
                  onChange={onChange}
                />

                <FormInput
                  value={form.messenger}
                  required
                  title="Мессенджер (обязательно)"
                  text="Укажите удобный способ связи"
                  type="text"
                  placeholder="WhatsApp, Telegram, WeChat и т.д."
                  name="messenger"
                  onChange={onChange}
                />
              </div>

              <div className="flex flex-col gap-6">
                <FormInput
                  value={form.product}
                  required
                  title="Какой товар вас интересует? (обязательно)"
                  text="Кратко опишите категорию, примерный объём и требования к продукту."
                  type="text"
                  placeholder="Категория товара, примерный объем"
                  name="product"
                  onChange={onChange}
                />

                <RadioButtons
                  title="Опыт работы с Китаем"
                  defaultValue="Нет"
                  name="experience"
                  onValueChange={(value) => onRadioChange("experience", value)}
                  radioButtons={[
                    {
                      id: "no",
                      value: "Нет",
                      htmlFor: "no",
                      label: "Нет",
                    },
                    {
                      id: "yes",
                      value: "Да",
                      htmlFor: "yes",
                      label: "Да",
                    },
                  ]}
                />

                <RadioButtons
                  title="Годовой оборот вашей компании"
                  text="Информация поможет нам оценить формат и глубину возможного сотрудничества."
                  defaultValue="до $700,000"
                  name="annualTurnover"
                  onValueChange={(value) =>
                    onRadioChange("annualTurnover", value)
                  }
                  radioButtons={[
                    {
                      id: "up-to-700",
                      value: "до $700,000",
                      htmlFor: "up-to-700",
                      label: "до $700,000",
                    },
                    {
                      id: "from-700",
                      value: "от $700,000 и выше",
                      htmlFor: "from-700",
                      label: "от $700,000 и выше",
                    },
                  ]}
                />

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm xl:text-base text-black text-left">
                      Комментарий или вопрос (необязательно)
                    </span>
                    <span className="text-xs xl:text-sm font-light text-brownTextColor text-left">
                      Если есть детали, которые вы хотите уточнить заранее —
                      напишите здесь.
                    </span>
                  </div>

                  <Textarea
                    className="text-black placeholder:font-light placeholder:text-xs xl:placeholder:text-sm"
                    placeholder="Дополнительные вопросы"
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
                Далее мы свяжемся с вами, чтобы согласовать время для
                онлайн-встречи. <span className="font-bold">Напоминаем:</span>{" "}
                предварительный расчёт и консультация бесплатны для компаний с
                оборотом от $700,000 в год. Для компаний с меньшим оборотом
                услуги предварительного просчёта предоставляются на платной
                основе.
              </p>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blueBg text-white"
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : "Отправить"}
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
