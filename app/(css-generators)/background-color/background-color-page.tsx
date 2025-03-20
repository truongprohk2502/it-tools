"use client";

import BackgroundColorIcon from "@/assets/icons/background-color.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { useMemo, useState } from "react";
import CssCode from "../_components/css-code";
import CssForm, { CssOption } from "../_components/css-form";
import CssPreview from "../_components/css-preview";

const BackgroundColorPage: React.FC = () => {
  const [options, setOptions] = useState<CssOption[]>([
    {
      name: "color",
      value: "#000000",
      type: "color",
    },
  ]);

  const cssValue = useMemo(() => {
    const value = options[0].value;
    return value;
  }, [options]);

  return (
    <div className="mx-auto min-w-[50rem] max-w-[70rem] px-6">
      <ToolHeader
        title="CSS Background Color"
        description="CSS Background Color generator and preview."
        href={Route.CSSBackgroundColor}
        icon={BackgroundColorIcon}
      />
      <div className="my-4">
        <div className="grid grid-cols-2 gap-6">
          <CssPreview>
            <div style={{ backgroundColor: cssValue }} />
          </CssPreview>
          <CssCode cssKey="background-color" cssValue={cssValue} />
        </div>
        <CssForm options={options} setOptions={setOptions} />
      </div>
    </div>
  );
};

export default BackgroundColorPage;
