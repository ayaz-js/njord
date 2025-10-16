import { FC } from "react";
import { IconProps } from "@/components/icons/types";

export const MenuIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="40"
      height="13"
      viewBox="0 0 40 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="1.5" fill="#192E41" />
      <rect x="8" y="11.5" width="32" height="1.5" fill="#192E41" />
    </svg>
  );
};
