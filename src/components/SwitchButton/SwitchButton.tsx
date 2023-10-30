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

  const classesOn = React.useMemo(() => {
    return classNames(
      tailwindConfig({ variant, size, width }),
      isChecked
        ? `text-purple-700 bg-shades-0`
        : `text-natural-400 bg-natural-50`
    );
  }, [size, variant, width, isChecked]);

  const classesOff = React.useMemo(() => {
    return classNames(
      tailwindConfig({ variant, size, width }),
      isChecked
        ? `text-natural-400 bg-natural-50`
        : `text-purple-700 bg-shades-0`
    );
  }, [size, variant, width, isChecked]);

  return (
    <div className="justify-center items-center rounded-full border border-natural-100 bg-natural-50">
      <label className="inline-flex cursor-pointer items-center justify-center rounded-full p-1">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center justify-center rounded-full py-2 px-3 font-medium w-40 ${classesOn}`}
        >
          {labelOn}
        </span>
        <span
          className={`flex items-center justify-center rounded-full py-2 px-3 font-medium w-40 ${classesOff}`}
        >
          {labelOff}
        </span>
      </label>
    </div>
  );
};

export default SwitchButton;
