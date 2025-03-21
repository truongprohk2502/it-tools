"use client";

import TranslateYIcon from "@/assets/icons/translate-y.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const TranslateYPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "value",
        value: "0",
        type: "slide",
        min: -50,
        max: 50,
        unit: "px",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `translateY(${options[0].value}px)`;
  }, []);

  return (
    <CssGenerator
      title="Translate Y"
      href={Route.CSSTranslateX}
      icon={TranslateYIcon}
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

export default TranslateYPage;
