"use client";

import ContrastIcon from "@/assets/icons/contrast.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const FilterContrastPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "amount",
        value: "50",
        type: "slide",
        min: 0,
        max: 200,
        unit: "%",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `contrast(${options[0].value}%)`;
  }, []);

  return (
    <CssGenerator
      title="Filter Contrast"
      href={Route.CSSFilterContrast}
      icon={ContrastIcon}
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

export default FilterContrastPage;
