import { cva } from "class-variance-authority";

const config = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "font-semibold",
    "cursor-pointer",
    "rounded-full",
  ],
  {
    variants: {
      size: {
        small: [
          "py-2.5",
          "pl-1",
          "h-10",
          "text-sm",
        ],
        medium: [
          "py-2.5",
          "pl-2",
          "h-14",
          "text-base",
        ],
        large: [
          "py-3",
          "px-6",
          "h-16",
          "text-lg",
        ],
      },
      width: {
        full: "w-max",
        min: "w-min",
        max: "w-max",
        fit: "w-fit",
        initial: "min-w-32",
      },
    },
    defaultVariants: {
      size: "medium",
      width: "min",
    },
  }
);

export default config;
