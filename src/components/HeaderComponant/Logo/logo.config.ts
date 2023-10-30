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
          "px-4",
          "h-10",
          "text-sm",
        ],
        medium: [
          "py-2.5",
          "px-6",
          "h-14",
          "text-base",
        ],
        large: [
          "py-3",
          "px-9",
          "h-16",
          "text-lg",
        ],
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
      size: "medium",
      width: "initial",
    },
  }
);

export default config;
