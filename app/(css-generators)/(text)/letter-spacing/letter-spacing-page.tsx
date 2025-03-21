"use client";

import LetterSpacingIcon from "@/assets/icons/letter-spacing.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const LetterSpacingPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "size",
        value: "10",
        type: "slide",
        min: 0,
        max: 20,
        unit: "px",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    return options[0].value + "px";
  }, []);

  return (
    <CssGenerator
      title="Letter Spacing"
      href={Route.CSSLetterSpacing}
      icon={LetterSpacingIcon}
      fields={options}
      cssKey="letter-spacing"
      previewStyle={{
        backgroundColor: "white",
        color: "black",
        fontSize: "20px",
      }}
      previewText="Letter"
      generateCssValue={generateCssValue}
    />
  );
};

export default LetterSpacingPage;
