"use client";

import SepiaIcon from "@/assets/icons/sepia.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const FilterSepiaPage: React.FC = () => {
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
    return `sepia(${options[0].value}%)`;
  }, []);

  return (
    <CssGenerator
      title="Filter Sepia"
      href={Route.CSSFilterSepia}
      icon={SepiaIcon}
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

export default FilterSepiaPage;
