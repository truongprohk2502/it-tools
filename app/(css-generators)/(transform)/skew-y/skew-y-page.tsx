"use client";

import SkewYIcon from "@/assets/icons/skew-y.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const SkewYPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "angle",
        value: "0",
        type: "slide",
        min: -40,
        max: 40,
        unit: "deg",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `skewY(${options[0].value}deg)`;
  }, []);

  return (
    <CssGenerator
      title="Skew Y"
      href={Route.CSSSkewY}
      icon={SkewYIcon}
      fields={options}
      cssKey="transform"
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

export default SkewYPage;
