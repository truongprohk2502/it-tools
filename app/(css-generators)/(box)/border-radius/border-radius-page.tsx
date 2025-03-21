"use client";

import BoxRadiusIcon from "@/assets/icons/box-radius.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const BorderRadiusPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "radius",
        value: "50",
        type: "slide",
        min: 0,
        max: 100,
        unit: "px",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `${options[0].value}px`;
  }, []);

  return (
    <CssGenerator
      title="Border Radius"
      href={Route.CSSBorderRadius}
      icon={BoxRadiusIcon}
      fields={options}
      cssKey="border-radius"
      previewStyle={{ backgroundColor: "white" }}
      generateCssValue={generateCssValue}
    />
  );
};

export default BorderRadiusPage;
