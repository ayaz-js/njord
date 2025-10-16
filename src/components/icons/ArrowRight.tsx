import { FC } from "react";
import { IconProps } from "@/components/icons/types";

export const ArrowRight: FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      className={className}
    >
      <path
        style={{ fill: "#192E41" }}
        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
        data-name="Right"
      />
    </svg>
  );
};
