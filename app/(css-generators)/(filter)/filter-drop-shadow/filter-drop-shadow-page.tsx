"use client";

import DropShadowIcon from "@/assets/icons/drop-shadow.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const FilterDropShadowPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "color",
        value: "#000000",
        type: "color",
      },
      {
        name: "blur",
        value: "50",
        type: "slide",
        min: 0,
        max: 100,
        unit: "px",
      },
      {
        name: "horizontal offset",
        value: "-10",
        type: "slide",
        min: -100,
        max: 100,
        unit: "px",
      },
      {
        name: "vertical offset",
        value: "-10",
        type: "slide",
        min: -100,
        max: 100,
        unit: "px",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    const color = options[0].value;
    const blur = options[1].value + "px";
    const horizontalOffset = options[2].value + "px";
    const verticalOffset = options[3].value + "px";
    return `drop-shadow(${horizontalOffset} ${verticalOffset} ${blur} ${color})`;
  }, []);

  return (
    <CssGenerator
      title="Filter Drop-Shadow"
      href={Route.CSSDropShadow}
      icon={DropShadowIcon}
      fields={options}
      cssKey="filter"
      wrapperClassName="flex justify-center items-center bg-white"
      previewStyle={{
        backgroundImage: "url('/css-images/react.png')",
        backgroundSize: "cover",
        width: "350px",
        height: "233px",
      }}
      generateCssValue={generateCssValue}
    />
  );
};

export default FilterDropShadowPage;
