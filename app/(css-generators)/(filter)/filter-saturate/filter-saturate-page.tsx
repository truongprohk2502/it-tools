"use client";

import SaturateIcon from "@/assets/icons/saturate.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const FilterSaturatePage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "amount",
        value: "50",
        type: "slide",
        min: 0,
        max: 300,
        unit: "%",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `saturate(${options[0].value}%)`;
  }, []);

  return (
    <CssGenerator
      title="Filter Saturate"
      href={Route.CSSSaturate}
      icon={SaturateIcon}
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

export default FilterSaturatePage;
