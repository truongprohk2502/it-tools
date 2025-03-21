"use client";

import TranslateXIcon from "@/assets/icons/translate-x.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const TranslateXPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "value",
        value: "0",
        type: "slide",
        min: -100,
        max: 100,
        unit: "px",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `translateX(${options[0].value}px)`;
  }, []);

  return (
    <CssGenerator
      title="Translate X"
      href={Route.CSSTranslateX}
      icon={TranslateXIcon}
      fields={options}
      cssKey="transform"
      wrapperClassName="flex justify-center items-center bg-white"
      previewStyle={{
        width: "120px",
        height: "120px",
        backgroundColor: "red",
      }}
      generateCssValue={generateCssValue}
    />
  );
};

export default TranslateXPage;
