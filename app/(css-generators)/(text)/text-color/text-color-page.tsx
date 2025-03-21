"use client";

import TextColorIcon from "@/assets/icons/text-color.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const TextColorPage: React.FC = () => {
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
      title="Text Color"
      href={Route.CSSTextColor}
      icon={TextColorIcon}
      fields={options}
      cssKey="color"
      previewStyle={{
        backgroundColor: "white",
        fontSize: "50px",
      }}
      previewText="Text Color"
      generateCssValue={generateCssValue}
    />
  );
};

export default TextColorPage;
