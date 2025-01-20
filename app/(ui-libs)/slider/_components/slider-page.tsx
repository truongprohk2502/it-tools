"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Slider, type SliderProps } from "@/components/ui-lib/slider";
import { useState } from "react";
import { sliderProperties } from "./constant";

const generateCode = (props: SliderProps) => `<Slider
  value={value}
  defaultValue={${props.defaultValue}}
  min={${props.min}}
  max={${props.max}}
  sliderSize="${props.sliderSize}"
  bgColor="${props.bgColor}"
  disabled={${props.disabled}}
  onChange={setValue}
/>
`;

export default function SliderPage() {
  const [sliderProps, setSliderProps] = useState<SliderProps>({
    defaultValue: 50,
    min: 0,
    max: 100,
    sliderSize: "medium",
    bgColor: "primary",
    disabled: false,
  });

  return (
    <div>
      <UIComponent title="Slider" code={generateCode(sliderProps)}>
        <Slider {...sliderProps} />
      </UIComponent>
      <UIDocs<SliderProps>
        fields={sliderProperties}
        fieldState={sliderProps}
        onChange={setSliderProps}
      />
    </div>
  );
}
