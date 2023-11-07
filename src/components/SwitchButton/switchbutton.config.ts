import { cva } from "class-variance-authority";

const config = cva(
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
        primary: ["text-purple-700", "bg-shades-0"],
      },
      size: {
        small: [
          "py-2.5",
          "px-1",
          "h-8",
          "text-sm",
        ],
        medium: [
          "py-2.5",
          "px-2",
          "h-10",
          "text-base",
        ],
        large: [
          "py-3",
          "px-3",
          "h-12",
          "text-lg",
        ],
      },
      width: {
        full: "w-full",
        min: "w-min",
        max: "w-max",
        fit: "w-fit",
        initial: "min-w-40",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      width: "initial",
    },
  }
);

export default config;
