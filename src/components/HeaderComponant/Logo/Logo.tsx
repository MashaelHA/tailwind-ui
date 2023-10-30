import React from "react";
import { LogoProps } from "./logo.types";
import tailwindConfig from "./logo.config";
import { classNames } from "@/utils";

const Logo = ({ imageUrl, text, size, width, id, className }: LogoProps) => {
  const classesIcon = React.useMemo(() => {
    return classNames(
      `flex rounded-full object-cover mr-4`,
      tailwindConfig({ size, width, className })
    );
  }, [size, width, className]);

  const icon = (
    <picture>
      <img src={imageUrl} alt="Company Logo" className={classesIcon} />
    </picture>
  );

  return (
    <div className={`flex justify-end items-center`}>
      {/* {icon} */}
      <p>{text}</p>
      {icon}
    </div>
  );
};

export default Logo;
