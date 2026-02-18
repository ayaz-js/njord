import { IntlayerNode } from "next-intlayer";

export interface HeaderProps {
  headerMenuItems: {
    label: IntlayerNode<string>;
    link?: string;
  }[];
  handleOnOpen?: () => void;
  label?: IntlayerNode<string>;
}
