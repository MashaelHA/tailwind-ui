import React from "react";
import { HeaderProps } from "./header.types";
import tailwindConfig from "./header.config";
import { classNames } from "@/utils";
import Button from "@/components/Button";
import Logo from "./Logo";

const HeaderComponant = ({ size, width, className }: HeaderProps) => {
  const HeaderClasses = React.useMemo(() => {
    return classNames(
      `flex flex-row-reverse w-${width} p-[24px 32px] justify-start items-center rounded-full bg- shadow-xl`,
      tailwindConfig({ size, width, className })
    );
  }, [size, width, className]);

  return (
    <header className={HeaderClasses}>
      <div className="basis-1/2">
        <Logo
          imageUrl="https://cdn.iconscout.com/icon/free/png-256/free-logo-3446031-2882300.png"
          text="جالاكسي مول"
        />
      </div>

      <div className="basis-1/4">
        <Button size="medium" variant="primary">
          تصدير البيانات
        </Button>
      </div>

      <div className="basis-1/12"></div>
      <div className="basis-1/12"></div>
    </header>
  );
};

export default HeaderComponant;
