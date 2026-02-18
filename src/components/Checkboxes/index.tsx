import { FC } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { IntlayerNode } from "next-intlayer";

interface Props {
  id: string;
  value: string;
  label: IntlayerNode<string>;
  checked: boolean;
  onCheckedChange: (
    name: string,
    checked: boolean | "indeterminate",
    value: IntlayerNode<string>,
  ) => void;
}

export const Checkboxes: FC<Props> = ({
  id,
  value,
  label,
  checked,
  onCheckedChange,
}) => {
  return (
    <FieldGroup>
      <Field className="flex flex-row">
        <Checkbox
          id={id}
          checked={checked}
          className="!w-5 !h-5"
          onCheckedChange={(checked) => onCheckedChange(value, checked, label)}
        />
        <FieldLabel htmlFor={id} className="text-left w-full font-normal">
          {label}
        </FieldLabel>
      </Field>
    </FieldGroup>
  );
};
