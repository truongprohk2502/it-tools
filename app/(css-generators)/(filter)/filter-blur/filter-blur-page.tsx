"use client";

import BlurIcon from "@/assets/icons/blur.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const FilterBlurPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "radius",
        value: "10",
        type: "slide",
        min: 0,
        max: 100,
        unit: "px",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `blur(${options[0].value}px)`;
  }, []);

  return (
    <CssGenerator
      title="Filter Blur"
      href={Route.CSSFilterBlur}
      icon={BlurIcon}
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

export default FilterBlurPage;
