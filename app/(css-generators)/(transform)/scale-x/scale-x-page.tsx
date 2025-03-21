"use client";

import ScaleXIcon from "@/assets/icons/scale-x.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const ScaleXPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "value",
        value: "1",
        type: "slide",
        min: 0,
        max: 2,
        step: 0.01,
        unit: "",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `scaleX(${options[0].value})`;
  }, []);

  return (
    <CssGenerator
      title="Scale X"
      href={Route.CSSScaleX}
      icon={ScaleXIcon}
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

export default ScaleXPage;
