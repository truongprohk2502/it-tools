"use client";

import HueRotateIcon from "@/assets/icons/hue-rotate.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const FilterHueRotatePage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "amount",
        value: "100",
        type: "slide",
        min: 0,
        max: 200,
        unit: "deg",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `hue-rotate(${options[0].value}deg)`;
  }, []);

  return (
    <CssGenerator
      title="Filter Hue-Rotate"
      href={Route.CSSHueRotate}
      icon={HueRotateIcon}
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

export default FilterHueRotatePage;
