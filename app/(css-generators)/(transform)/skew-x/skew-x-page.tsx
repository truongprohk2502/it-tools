"use client";

import SkewXIcon from "@/assets/icons/skew-x.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const SkewXPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "angle",
        value: "0",
        type: "slide",
        min: -60,
        max: 60,
        unit: "deg",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `skewX(${options[0].value}deg)`;
  }, []);

  return (
    <CssGenerator
      title="Skew X"
      href={Route.CSSSkewX}
      icon={SkewXIcon}
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

export default SkewXPage;
