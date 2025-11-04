import React, { FC } from "react";
import { Input } from "@/components/ui/input";
import { IntlayerNode } from "next-intlayer";

interface Props {
  title: IntlayerNode<string>;
  text: IntlayerNode<string>;
  type: string;
  placeholder: IntlayerNode<string>;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
}

function toStringNode(node: IntlayerNode<string>): string {
  if (typeof node === "string") return node;

  if (typeof (node as { value?: unknown }).value === "string") {
    return (node as { value: string }).value;
  }
  return String(node);
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
        placeholder={toStringNode(placeholder)}
        className="w-full border rounded-lg h-10 text-black placeholder:font-light placeholder:text-xs xl:placeholder:text-sm"
      />
    </div>
  );
};
