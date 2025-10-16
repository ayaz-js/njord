import { FC } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Props {
  title: string;
  text?: string;
  defaultValue: string;
  name: string;
  onValueChange?: (value: string) => void;
  radioButtons: {
    id: string;
    value: string;
    label: string;
    htmlFor: string;
  }[];
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
      defaultValue={defaultValue}
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
          <div key={radio.id} className="flex items-center space-x-2">
            <RadioGroupItem value={radio.value} id={radio.id} />
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
