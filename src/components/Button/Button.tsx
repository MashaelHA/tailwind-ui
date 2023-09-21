import React from "react";
import { ButtonProps } from "./button.types";
import tailwindConfig from "./button.config";
import { classNames } from "@/utils";

const resolveDisabledButton = (variant: ButtonProps["variant"]) => {
  const disabledStyles = {
    primary: ["bg-slate-500"],
    secondary: [
      "bg-slate-100",
      "text-slate-400",
      "cursor-not-allowed",
      "border-slate-200",
    ],
    transparent: ["bg-slate-100", "text-slate-600", "cursor-not-allowed"],
  };
  return disabledStyles[variant || "primary"];
};

export default function Button({
  children,
  width,
  size,
  variant,
  onClick,
  loading,
  disabled,
  className,
  id,
  type,
}: ButtonProps) {
  const classes = React.useMemo(() => {
    return classNames(
      tailwindConfig({
        variant,
        size,
        width,
      }),
      [(disabled || loading) && resolveDisabledButton(variant)],
      className
    );
  }, [disabled, loading, size, variant, width, className]);

  return (
    <button
      id={id}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled || Boolean(loading)}
    >
      <div className="flex w-full h-full gap-2 items-center justify-center">
        {loading ? (
          <>
            <p>{typeof loading === "string" ? loading : "loading"}</p>
          </>
        ) : (
          children
        )}
      </div>
    </button>
  );
}
