"use client";
import React, { useState } from "react";
import { toast } from "sonner"
import { useIntlayer } from "next-intlayer";

export const useSubmit = () => {
  const content = useIntlayer("form");

  const BASE_URL =
    "https://script.google.com/macros/s/AKfycbxNhL4YclZI3auzd3sfDxV7dk_GZ9hH97aeP9Jo9OXg3H7kqnsRwZyfGe4nf0tjLaxt/exec";

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    services: [] as string[],
    name: "",
    messenger: "",
    comment: "",
  });

  const resetForm = () => {
    setForm({
      services: [],
      name: "",
      messenger: "",
      comment: "",
    });
  };

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
      const _formData = new FormData();

      form.services.forEach((service) => _formData.append("Услуги", service));
      _formData.append("Имя", form.name);
      _formData.append("Месседжер", form.messenger);
      _formData.append("Дополнительные вопросы", form.comment);

      await fetch(BASE_URL, {
        method: "POST",
        body: _formData,
      });

      toast.success(content.successTitle, {
        description: content.successDescription
      })

      resetForm();
    } catch (error) {
      console.log(error);
      toast.error(content.errorTitle, {
        description: content.errorDescription
      })
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
  };
};
