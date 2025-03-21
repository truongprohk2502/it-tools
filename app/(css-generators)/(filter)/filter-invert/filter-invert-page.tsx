"use client";

import InvertIcon from "@/assets/icons/invert.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const FilterInvertPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "amount",
        value: "100",
        type: "slide",
        min: 0,
        max: 100,
        unit: "%",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `invert(${options[0].value}%)`;
  }, []);

  return (
    <CssGenerator
      title="Filter Invert"
      href={Route.CSSInvert}
      icon={InvertIcon}
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

export default FilterInvertPage;
