"use client";

import LinearGradientIcon from "@/assets/icons/linear-gradient.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { useMemo, useState } from "react";
import CssCode from "../_components/css-code";
import CssForm, { CssOption } from "../_components/css-form";
import CssPreview from "../_components/css-preview";

const LinearGradientPage: React.FC = () => {
  const [options, setOptions] = useState<CssOption[]>([
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
    {
      name: "direction",
      value: "90",
      type: "slide",
    },
  ]);

  const cssValue = useMemo(() => {
    const value = `linear-gradient(${options[2].value}deg, ${options[0].value}, ${options[1].value})`;
    return value;
  }, [options]);

  return (
    <div className="mx-auto min-w-[50rem] max-w-[70rem] px-6">
      <ToolHeader
        title="CSS Linear Gradient"
        description="CSS Linear Gradient generator and preview."
        href={Route.CSSLinearGradient}
        icon={LinearGradientIcon}
      />
      <div className="my-4">
        <div className="grid grid-cols-2 gap-6">
          <CssPreview>
            <div style={{ background: cssValue }} />
          </CssPreview>
          <CssCode cssKey="background" cssValue={cssValue} />
        </div>
        <CssForm options={options} setOptions={setOptions} />
      </div>
    </div>
  );
};

export default LinearGradientPage;
