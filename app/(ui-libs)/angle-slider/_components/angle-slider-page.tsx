"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { AngleSlider, AngleSliderProps } from "@it-tool-ui/angle-slider";
import { useState } from "react";
import { angleSliderProperties } from "./constant";

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
      <UIComponent
        title="AngleSlider"
        code={generateCode(angleSliderProps)}
        hasNpmLink
      >
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
