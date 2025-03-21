"use client";

import TextDecorationIcon from "@/assets/icons/text-decoration.icon";
import { Route } from "@/constants/routes";
import { useCallback, useMemo } from "react";
import type { CssOption } from "../../_components/css-form";
import CssGenerator from "../../_components/css-generator";

const TextDecorationPage: React.FC = () => {
  const options: CssOption[] = useMemo(
    () => [
      {
        name: "type",
        value: "underline",
        type: "select",
        options: ["underline", "overline", "line-through"],
      },
      {
        name: "style",
        value: "solid",
        type: "select",
        options: ["solid", "double", "dotted", "dashed", "wavy"],
      },
      {
        name: "color",
        value: "#000000",
        type: "color",
      },
    ],
    [],
  );

  const generateCssValue = useCallback((options: CssOption[]) => {
    const type = options[0].value;
    const style = options[1].value;
    const color = options[2].value;
    return `${type} ${style} ${color}`;
  }, []);

  return (
    <CssGenerator
      title="Text Decoration"
      href={Route.CSSTextDecoration}
      icon={TextDecorationIcon}
      fields={options}
      cssKey="text-decoration"
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

export default TextDecorationPage;
