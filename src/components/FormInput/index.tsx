import React, { FC } from "react";
import { Input } from "@/components/ui/input";

interface Props {
  title: string;
  text: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
}

export const FormInput: FC<Props> = ({
  title,
  text,
  type,
  placeholder,
  required,
  onChange,
  value,
  name,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <span className="text-sm xl:text-base text-black text-left">
          {title}
        </span>
        <span className="text-xs xl:text-sm font-light text-brownTextColor text-left">
          {text}
        </span>
      </div>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full border rounded-lg h-10 text-black placeholder:font-light placeholder:text-xs xl:placeholder:text-sm"
      />
    </div>
  );
};
