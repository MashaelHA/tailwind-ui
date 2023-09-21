export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent";
  size?: "small" | "medium" | "large";
  width?: "full" | "min" | "max" | "fit" | "initial";
  onClick?: (event: React.ChangeEvent<any>) => void;
  loading?: boolean | string;
  disabled?: boolean;
  id?: string;
  type?: "reset" | "submit" | "button";
  className?: string;
};
