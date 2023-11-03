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
        primary: ["text-white", "bg-purple-700", "enabled:hover:bg-purple-500"],
        secondary: [
          "text-purple-700",
          "bg-purple-300",
          "border",
          "border-purple-700",
          "enabled:hover:bg-purple-50",
        ],
        transparent: ["text-purple-700", "enabled:hover:bg-purple-100"],
      },
      size: {
        small: [
          "py-2.5",
          "px-4",
          "h-8",
          "text-sm",
        ],
        medium: [
          "py-2.5",
          "px-6",
          "h-10",
          "text-base",
        ],
        large: [
          "py-3",
          "px-9",
          "h-12",
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
      variant: "primary",
      size: "medium",
      width: "initial",
    },
  }
);

export default config;
