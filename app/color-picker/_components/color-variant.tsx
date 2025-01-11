"use client";

import { useMemo } from "react";
import { generateShadeColors, generateTintColors } from "../helpers";
import ColorVariantItem from "./color-variant-item";

interface Props {
  hex: string;
}

const ColorVariant: React.FC<Props> = ({ hex }) => {
  const shadeColors = useMemo(() => generateShadeColors(hex), [hex]);
  const tintColors = useMemo(() => generateTintColors(hex), [hex]);

  return (
    <div className="mt-4 w-full rounded-lg border border-neutral-400 px-6 py-3">
      <p className="mb-2 text-lg font-semibold">Variations</p>
      <p className="text-sm">
        The purpose of this section is to accurately produce tints (pure white
        added) and shades (pure black added) of your selected color in 10%
        increments.
      </p>
      <p className="mb-2 mt-6 text-lg font-semibold">Shades</p>
      <div className="flex">
        {shadeColors.map((color, index) => (
          <ColorVariantItem key={index} hex={color} percentage={index * 10} />
        ))}
      </div>
      <p className="mb-2 mt-2 text-lg font-semibold">Tints</p>
      <div className="flex">
        {tintColors.map((color, index) => (
          <ColorVariantItem key={index} hex={color} percentage={index * 10} />
        ))}
      </div>
    </div>
  );
};

export default ColorVariant;
