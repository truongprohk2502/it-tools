"use client";

import GrayScaleIcon from "@/assets/icons/gray-scale.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const FilterGrayscalePage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "amount",
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
    return `grayscale(${options[0].value}%)`;
  }, []);

  return (
    <CssGenerator
      title="Filter Grayscale"
      href={Route.CSSFilterGrayscale}
      icon={GrayScaleIcon}
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

export default FilterGrayscalePage;
