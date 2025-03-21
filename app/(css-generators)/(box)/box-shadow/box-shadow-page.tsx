"use client";

import BoxShadowIcon from "@/assets/icons/box-shadow.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const BoxShadowPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "color",
        value: "#000000",
        type: "color",
      },
      {
        name: "blur",
        value: "10",
        type: "slide",
        min: 0,
        max: 100,
        unit: "px",
      },
      {
        name: "horizontal offset",
        value: "10",
        type: "slide",
        min: -100,
        max: 100,
        unit: "px",
      },
      {
        name: "vertical offset",
        value: "10",
        type: "slide",
        min: -100,
        max: 100,
        unit: "px",
      },
      {
        name: "spread",
        value: "10",
        type: "slide",
        min: -100,
        max: 100,
        unit: "px",
      },
      {
        name: "inset",
        value: "no",
        type: "select",
        options: ["no", "yes"],
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    const color = options[0].value;
    const blur = options[1].value + "px";
    const horizontalOffset = options[2].value + "px";
    const verticalOffset = options[3].value + "px";
    const spread = options[4].value + "px";
    const inset = options[5].value === "yes";
    return `${horizontalOffset} ${verticalOffset} ${blur} ${spread} ${color}${inset ? " inset" : ""}`;
  }, []);

  return (
    <CssGenerator
      title="Box Shadow"
      href={Route.CSSBoxShadow}
      icon={BoxShadowIcon}
      fields={options}
      cssKey="box-shadow"
      wrapperClassName="flex justify-center items-center bg-white"
      previewStyle={{
        width: "120px",
        height: "120px",
        backgroundColor: "red",
      }}
      generateCssValue={generateCssValue}
    />
  );
};

export default BoxShadowPage;
