import { cva } from "class-variance-authority";

const headerConfig = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "font-medium",
    "cursor-pointer",
    "rounded-full",
  ],
  {
    variants: {
      variant: {
        primary: ["text-black", "bg-shades-0"],
        secondary: ["text-white", "bg-purple-500"],
      },
      size: {
        small: ["py-2.5", "px-4", "h-8", "text-sm"],
        medium: ["py-2.5", "px-6", "h-10", "text-base"],
        large: ["py-3", "px-9", "h-12", "text-lg"],
      },
      width: {
        full: "w-full",
        min: "w-min",
        max: "w-max",
        fit: "w-fit",
        initial: "min-w-32",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
      width: "full",
    },
  }
);

export default headerConfig;
