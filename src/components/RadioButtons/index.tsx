import { FC } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { IntlayerNode } from "next-intlayer";

interface Props {
  title: IntlayerNode<string>;
  text?: IntlayerNode<string>;
  defaultValue: IntlayerNode<string>;
  name: string;
  onValueChange?: (value: string) => void;
  radioButtons: {
    id: string;
    value: IntlayerNode<string>;
    label: IntlayerNode<string>;
    htmlFor: string;
  }[];
}

function toStringNode(node: IntlayerNode<string>): string {
  if (typeof node === "string") {
    return node;
  }

  if (typeof (node as { value?: unknown }).value === "string") {
    return (node as { value: string }).value;
  }

  return String(node);
}

export const RadioButtons: FC<Props> = ({
  title,
  text,
  defaultValue,
  radioButtons,
  name,
  onValueChange,
}) => {
  return (
    <RadioGroup
      name={name}
      defaultValue={toStringNode(defaultValue)}
      onValueChange={onValueChange}
    >
      <span className="text-sm xl:text-base text-black text-left">{title}</span>
      {text && (
        <span className="text-xs xl:text-sm font-light text-brownTextColor text-left">
          {text}
        </span>
      )}
      <div className="flex gap-4 xl:gap-8 mt-1">
        {radioButtons.map((radio) => (
          <div key={radio.id} className="flex items-center gap-1">
            <RadioGroupItem value={toStringNode(radio.value)} id={radio.id} />
            <Label
              htmlFor={radio.htmlFor}
              className="cursor-pointer text-xs xl:text-sm"
            >
              {radio.label}
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
};
