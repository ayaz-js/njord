export interface HeaderProps {
  headerMenuItems: {
    label: string;
    link?: string;
  }[];
  handleOnOpen?: () => void;
}
