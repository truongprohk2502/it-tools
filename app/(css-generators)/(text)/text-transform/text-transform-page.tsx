"use client";

import TextTransformIcon from "@/assets/icons/text-transform.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const TextTransformPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "type",
        value: "none",
        type: "select",
        options: ["none", "capitalize", "uppercase", "lowercase"],
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return options[0].value;
  }, []);

  return (
    <CssGenerator
      title="Text Transform"
      href={Route.CSSTextTransform}
      icon={TextTransformIcon}
      fields={options}
      cssKey="text-transform"
      previewStyle={{
        backgroundColor: "white",
        color: "black",
        fontSize: "20px",
      }}
      previewText="Lorem ipsum dolor sit amet"
      generateCssValue={generateCssValue}
    />
  );
};

export default TextTransformPage;
