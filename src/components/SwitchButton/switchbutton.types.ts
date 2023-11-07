export type SwitchButtonProps  = {
  children?: React.ReactNode;
  labelOn: string;
  labelOff: string;
  variant?: "primary";
  size?: "small" | "medium" | "large";
  width?: "full" | "min" | "max" | "fit" | "initial";
  id?: string;
  className?: string;
};
