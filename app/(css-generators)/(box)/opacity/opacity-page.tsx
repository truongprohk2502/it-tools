"use client";

import OpacityIcon from "@/assets/icons/opacity.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const OpacityPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "opacity",
        value: "50",
        type: "slide",
        min: 0,
        max: 100,
        unit: "%",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return (+options[0].value / 100).toString();
  }, []);

  return (
    <CssGenerator
      title="Opacity"
      href={Route.CSSOpacity}
      icon={OpacityIcon}
      fields={options}
      cssKey="opacity"
      previewStyle={{ backgroundColor: "white" }}
      generateCssValue={generateCssValue}
    />
  );
};

export default OpacityPage;
