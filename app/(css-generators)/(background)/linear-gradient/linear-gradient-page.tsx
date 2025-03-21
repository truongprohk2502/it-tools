"use client";

import LinearGradientIcon from "@/assets/icons/linear-gradient.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const LinearGradientPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "color-start",
        value: "#000000 0%",
        type: "color-with-percent",
      },
      {
        name: "color-end",
        value: "#ffffff 100%",
        type: "color-with-percent",
      },
      {
        name: "angle",
        value: "90",
        type: "slide",
        min: 0,
        max: 360,
        unit: "deg",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    const direction = `${options[2].value}deg`;
    const from = options[0].value;
    const to = options[1].value;
    return `linear-gradient(${direction}, ${from}, ${to})`;
  }, []);

  return (
    <CssGenerator
      title="Linear Gradient"
      href={Route.CSSLinearGradient}
      icon={LinearGradientIcon}
      fields={options}
      cssKey="background"
      generateCssValue={generateCssValue}
    />
  );
};

export default LinearGradientPage;
