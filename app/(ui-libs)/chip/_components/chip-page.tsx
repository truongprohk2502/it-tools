"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Checkbox, type CheckboxProps } from "@/components/ui-lib/checkbox";
import { useState } from "react";
import { chipProperties } from "./constant";

const generateCode = (props: CheckboxProps) => `<Checkbox
  label="${props.label}"
  inputSize="${props.inputSize}"
  checkboxColor="${props.checkboxColor}"
  disabled={${props.disabled}}
  checked={${props.checked}}
  onChangeChecked={setCheckedValue}
/>
`;

export default function CheckboxPage() {
  const [checkboxProps, setCheckboxProps] = useState<CheckboxProps>({
    label: "Are you okay?",
    inputSize: "medium",
    checkboxColor: "primary",
    disabled: false,
    checked: true,
  });

  const toggleCheckbox = (checked: boolean) => {
    setCheckboxProps({ ...checkboxProps, checked });
  };

  return (
    <div>
      <UIComponent
        title="Checkbox"
        code={generateCode(checkboxProps)}
        hasNpmLink
      >
        <Checkbox {...checkboxProps} onChangeChecked={toggleCheckbox} />
      </UIComponent>
      <UIDocs<CheckboxProps>
        fields={chipProperties}
        fieldState={checkboxProps}
        onChange={setCheckboxProps}
      />
    </div>
  );
}
