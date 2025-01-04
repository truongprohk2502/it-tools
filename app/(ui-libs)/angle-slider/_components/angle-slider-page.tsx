"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { useState } from "react";
import AngleSlider from "./angle-slider-component";
import { angleSliderProperties } from "./constant";
import type { AngleSliderProps } from "./types";

const generateCode = (props: AngleSliderProps) => `<AngleSlider
  value={${props.value}}
  max={${props.max}}
  showLabel={${props.showLabel}}
  labelSize="${props.labelSize}"
  barSizePercent={${props.barSizePercent}}
  size="${props.size}"
  barThick="${props.barThick}"
/>
`;

export default function AngleSliderPage() {
  const [angleSliderProps, setAngleSliderProps] = useState<AngleSliderProps>({
    value: 0,
    max: 360,
    showLabel: true,
    labelSize: "large",
    barSizePercent: 70,
    size: "6rem",
    barThick: "4px",
  });

  return (
    <div>
      <UIComponent title="AngleSlider" code={generateCode(angleSliderProps)}>
        <AngleSlider
          {...angleSliderProps}
          onChange={(val) => console.log("change: " + val)}
          onEnd={(val) => console.log("end: " + val)}
        />
      </UIComponent>
      <UIDocs<AngleSliderProps>
        fields={angleSliderProperties}
        fieldState={angleSliderProps}
        onChange={setAngleSliderProps}
      />
    </div>
  );
}
