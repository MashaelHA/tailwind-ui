"use client";

import React from "react";
import { HeaderProps } from "./header.types";
import tailwindConfig from "./header.config";
import { classNames } from "@/utils";
import Button from "@/components/Button";
import Logo from "./Logo";
import Icon from "@/components/Icon";
import Container from "@/components/Container";

const HeaderComponant = ({ width ,size, className }: HeaderProps) => {
  const HeaderClasses = React.useMemo(() => {
    return classNames(
      `container mx-auto px-2 md:px-0 flex flex-row-reverse w-screen`,
      tailwindConfig({ width, size, className })
    );
  }, [width, size, className]);

  const ExportBttonClasses = React.useMemo(() => {
    return classNames(
      "hidden sm:flex sm:w-max",
    );
  }, []);

  return (
    <Container>
      <header className={HeaderClasses}>
        <div className="basis-3/4">
          <Logo
            imageUrl="https://cdn.iconscout.com/icon/free/png-256/free-logo-3446031-2882300.png"
            text="جالاكسي مول"
          />
        </div>

        <div className="basis-1/4 flex flex-row-reverse justify-between items-center pl-4 gap-2">
          <Button
            size="small"
            variant="primary"
            className={ExportBttonClasses}
          >
            تصدير البيانات
            <Icon name="download" />
          </Button>

          <Button size="small" className="text-natural-800 bg-natural-100">
            <Icon name="bell" />
          </Button>

          <Button size="small" className="text-purple-700 bg-natural-100">
            <Icon name="language-rtl" />
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default HeaderComponant;
