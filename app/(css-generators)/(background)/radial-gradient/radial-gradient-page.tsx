"use client";

import RadialGradientIcon from "@/assets/icons/radial-gradient.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const RadialGradientPage: React.FC = () => {
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
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    const from = options[0].value;
    const to = options[1].value;
    return `radial-gradient(${from}, ${to})`;
  }, []);

  return (
    <CssGenerator
      title="Radial Gradient"
      href={Route.CSSRadialGradient}
      icon={RadialGradientIcon}
      fields={options}
      cssKey="background"
      generateCssValue={generateCssValue}
    />
  );
};

export default RadialGradientPage;
