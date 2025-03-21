"use client";

import BrightnessIcon from "@/assets/icons/brightness.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const FilterBrightnessPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "radius",
        value: "50",
        type: "slide",
        min: 0,
        max: 100,
        unit: "%",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `brightness(${options[0].value}%)`;
  }, []);

  return (
    <CssGenerator
      title="Filter Brightness"
      href={Route.CSSFilterBrightness}
      icon={BrightnessIcon}
      fields={options}
      cssKey="filter"
      previewStyle={{
        backgroundImage: "url('/css-images/peach-blossom.jpg')",
        backgroundSize: "cover",
      }}
      generateCssValue={generateCssValue}
    />
  );
};

export default FilterBrightnessPage;
