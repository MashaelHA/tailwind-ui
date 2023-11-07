"use client";

import React from "react";
import { SwitchButtonProps } from "./switchbutton.types";
import tailwindConfig from "./switchbutton.config";
import { classNames } from "@/utils";

const SwitchButton = ({
  labelOn,
  labelOff,
  variant,
  size,
  width,
  className,
  id,
}: SwitchButtonProps) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const classes = React.useMemo(() => {
    return classNames(
      tailwindConfig({ variant, size, width, className }),
      "rounded-full border border-natural-100 bg-natural-50"
    );
  }, [size, variant, width, className]);

  const classesLable = React.useMemo(() => {
    return classNames(
      tailwindConfig({ size, width }),
      "inline-flex cursor-pointer rounded-full bg-transparent py-0 px-0"
    );
  }, [size, width]);

  const classesOn = React.useMemo(() => {
    return classNames(
      tailwindConfig({ variant, size, width }),
      "flex items-center justify-center rounded-full py-2 px-3 font-medium h-9",
      isChecked
        ? "text-purple-700 bg-shades-0"
        : "text-natural-400 bg-natural-50"
    );
  }, [size, variant, width, isChecked]);

  const classesOff = React.useMemo(() => {
    return classNames(
      tailwindConfig({ variant, size, width }),
      "flex items-center justify-center font-medium h-9",
      isChecked
        ? "text-natural-400 bg-natural-50"
        : "text-purple-700 bg-shades-0"
    );
  }, [size, variant, width, isChecked]);

  return (
    <div className={classes}>
      <label className={classesLable}>
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={classesOn}>{labelOn}</span>
        <span className={classesOff}>{labelOff}</span>
      </label>
    </div>
  );
};

export default SwitchButton;
