"use client";

import ScaleYIcon from "@/assets/icons/scale-y.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const ScaleYPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "value",
        value: "1",
        type: "slide",
        min: 0,
        max: 1.8,
        step: 0.01,
        unit: "",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `scaleY(${options[0].value})`;
  }, []);

  return (
    <CssGenerator
      title="Scale Y"
      href={Route.CSSScaleY}
      icon={ScaleYIcon}
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

export default ScaleYPage;
