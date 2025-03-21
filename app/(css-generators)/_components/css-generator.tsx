"use client";

import ToolHeader from "@/components/shared/tool-header";
import camelCase from "lodash/camelCase";
import { useMemo, useState } from "react";
import CssCode from "./css-code";
import CssForm, { type CssOption } from "./css-form";
import CssPreview from "./css-preview";

interface Props {
  title: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  fields: CssOption[];
  cssKey: string;
  wrapperClassName?: string;
  previewText?: string;
  previewStyle?: React.CSSProperties;
  generateCssValue: (options: CssOption[]) => string;
}

const CssGenerator: React.FC<Props> = ({
  title,
  href,
  icon,
  fields,
  cssKey,
  previewText,
  wrapperClassName,
  previewStyle = {},
  generateCssValue,
}) => {
  const [options, setOptions] = useState<CssOption[]>(fields);

  const cssValue = useMemo(() => {
    const value = generateCssValue(options);
    return value;
  }, [options, generateCssValue]);

  return (
    <div className="mx-auto min-w-[50rem] max-w-[70rem] px-6">
      <ToolHeader
        title={`CSS ${title}`}
        description={`CSS ${title} generator and preview.`}
        href={href}
        icon={icon}
      />
      <div className="my-4">
        <div className="grid grid-cols-2 gap-6">
          <CssPreview wrapperClassName={wrapperClassName}>
            <div
              style={{ [camelCase(cssKey)]: cssValue, ...previewStyle }}
              className="flex items-center justify-center"
            >
              {previewText}
            </div>
          </CssPreview>
          <CssCode cssKey={cssKey} cssValue={cssValue} />
        </div>
        <CssForm options={options} setOptions={setOptions} />
      </div>
    </div>
  );
};

export default CssGenerator;
