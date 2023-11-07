import React from "react";
import { ContainerProps } from "./container.types";
import containerConfig from "./container.config";
import { classNames } from "@/utils";

const Container = ({ children, className }: ContainerProps) => {
  const containerClasses = React.useMemo(() => {
    return classNames(
      `container mx-auto`,
      containerConfig, className);
  }, [className]);

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
