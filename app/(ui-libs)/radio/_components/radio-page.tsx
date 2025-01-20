"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Radio, type RadioProps } from "@/components/ui-lib/radio";
import { useState } from "react";
import { radioProperties } from "./constant";

const generateCode = (props: RadioProps) => `<Radio
  checked={${props.checked}}
  label="${props.label}"
  inputSize="${props.inputSize}"
  radioColor="${props.radioColor}"
  disabled={${props.disabled}}
  onChangeChecked={handleCheck}
/>
`;

export default function RadioPage() {
  const [radioProps, setRadioProps] = useState<RadioProps>({
    checked: false,
    label: "Are you like IT-Tools",
    inputSize: "medium",
    radioColor: "primary",
    disabled: false,
  });

  const handleCheck = (checked: boolean) => {
    setRadioProps({ ...radioProps, checked });
  };

  return (
    <div>
      <UIComponent title="Radio" code={generateCode(radioProps)}>
        <Radio {...radioProps} onChangeChecked={handleCheck} />
      </UIComponent>
      <UIDocs<RadioProps>
        fields={radioProperties}
        fieldState={radioProps}
        onChange={setRadioProps}
      />
    </div>
  );
}
