"use client";

import BackgroundColorIcon from "@/assets/icons/background-color.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const BackgroundColorPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "color",
        value: "#000000",
        type: "color",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return options[0].value;
  }, []);

  return (
    <CssGenerator
      title="Background Color"
      href={Route.CSSBackgroundColor}
      icon={BackgroundColorIcon}
      fields={options}
      cssKey="background-color"
      generateCssValue={generateCssValue}
    />
  );
};

export default BackgroundColorPage;
