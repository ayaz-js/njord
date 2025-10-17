"use client"
import React, { useState } from "react";

export const useSubmit = () => {
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
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    };

    return {
        form,
        isLoading,
        onChange,
        onRadioChange,
        onSubmit
    }
}
