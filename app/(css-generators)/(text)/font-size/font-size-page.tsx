"use client";

import FontSizeIcon from "@/assets/icons/font-size.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const FontSizePage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "size",
        value: "30",
        type: "slide",
        min: 0,
        max: 70,
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
      title="Font Size"
      href={Route.CSSFontSize}
      icon={FontSizeIcon}
      fields={options}
      cssKey="font-size"
      previewStyle={{ backgroundColor: "white", color: "black" }}
      previewText="font-size"
      generateCssValue={generateCssValue}
    />
  );
};

export default FontSizePage;
