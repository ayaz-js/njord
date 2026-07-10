"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { useIntlayer } from "next-intlayer";

const BASE_URL =
  "https://script.google.com/macros/s/AKfycbxNhL4YclZI3auzd3sfDxV7dk_GZ9hH97aeP9Jo9OXg3H7kqnsRwZyfGe4nf0tjLaxt/exec";

type FormState = {
  services: string[];
  name: string;
  messenger: string;
  comment: string;
};

const initialForm: FormState = {
  services: [],
  name: "",
  messenger: "",
  comment: "",
};

export const useSubmit = () => {
  const content = useIntlayer("form");

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);

  const handleOpen = () => setOpen((prev) => !prev);

  const resetForm = () => setForm(initialForm);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  const onCheckboxChange = (
    value: string,
    checked: boolean | "indeterminate",
  ) => {
    setForm((state) => ({
      ...state,
      services:
        checked === true
          ? [...state.services, value]
          : state.services.filter((item) => item !== value),
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();

      form.services.forEach((service) => formData.append("Услуги", service));
      formData.append("Имя", form.name);
      formData.append("Месседжер", form.messenger);
      formData.append("Дополнительные вопросы", form.comment);

      await fetch(BASE_URL, { method: "POST", body: formData });

      toast.success(content.successTitle, {
        description: content.successDescription,
      });

      resetForm();
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error(content.errorTitle, {
        description: content.errorDescription,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    onCheckboxChange,
    onChange,
    onSubmit,
    open,
    handleOpen,
  };
};
