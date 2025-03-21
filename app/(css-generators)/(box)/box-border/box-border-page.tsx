"use client";

import BoxBorderIcon from "@/assets/icons/box-border.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const BoxBorderPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "color",
        value: "#000000",
        type: "color",
      },
      {
        name: "width",
        value: "50",
        type: "slide",
        min: 0,
        max: 90,
        unit: "px",
      },
      {
        name: "style",
        value: "solid",
        type: "select",
        options: [
          "solid",
          "dashed",
          "dotted",
          "double",
          "groove",
          "ridge",
          "inset",
          "outset",
        ],
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    const color = options[0].value;
    const width = `${options[1].value}px`;
    const style = options[2].value;
    return `${width} ${style} ${color}`;
  }, []);

  return (
    <CssGenerator
      title="Border"
      href={Route.CSSBoxBorder}
      icon={BoxBorderIcon}
      fields={options}
      cssKey="border"
      previewStyle={{ backgroundColor: "white" }}
      generateCssValue={generateCssValue}
    />
  );
};

export default BoxBorderPage;
