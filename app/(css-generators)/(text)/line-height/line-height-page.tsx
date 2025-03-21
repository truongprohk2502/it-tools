"use client";

import LineHeightIcon from "@/assets/icons/line-height.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const LineHeightPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "size",
        value: "20",
        type: "slide",
        min: 0,
        max: 50,
        unit: "px",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return options[0].value + "px";
  }, []);

  return (
    <CssGenerator
      title="Line Height"
      href={Route.CSSLineHeight}
      icon={LineHeightIcon}
      fields={options}
      cssKey="line-height"
      previewStyle={{
        backgroundColor: "white",
        color: "black",
        fontSize: "14px",
        padding: "10px",
      }}
      previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis et itaque saepe suscipit autem architecto voluptatibus libero id impedit! . Sunt omnis et itaque saepe suscipit autem architecto voluptatibus libero id impedit!"
      generateCssValue={generateCssValue}
    />
  );
};

export default LineHeightPage;
