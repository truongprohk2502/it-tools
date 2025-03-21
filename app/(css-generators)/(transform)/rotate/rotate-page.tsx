"use client";

import RotateIcon from "@/assets/icons/rotate.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const RotatePage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "angle",
        value: "0",
        type: "slide",
        min: -360,
        max: 360,
        unit: "deg",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return `rotate(${options[0].value}deg)`;
  }, []);

  return (
    <CssGenerator
      title="Transform Rotate"
      href={Route.CSSRotate}
      icon={RotateIcon}
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

export default RotatePage;
