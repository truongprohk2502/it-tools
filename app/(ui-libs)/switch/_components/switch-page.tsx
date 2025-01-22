"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Switch, type SwitchProps } from "@/components/ui-lib/switch";
import { useState } from "react";
import { switchProperties } from "./constant";

const generateCode = (props: SwitchProps) => `<Switch
  color="${props.color}"
  size="${props.size}"
  disabled={${props.disabled}}
  checked={checked}
  onChange={setChecked}
/>
`;

export default function SwitchPage() {
  const [switchProps, setSwitchProps] = useState<SwitchProps>({
    color: "primary",
    size: "medium",
    disabled: false,
    checked: true,
    onChange: () => {},
  });

  const handleChange = (checked: boolean) => {
    setSwitchProps({ ...switchProps, checked });
  };

  return (
    <div>
      <UIComponent title="Switch" code={generateCode(switchProps)}>
        <Switch {...switchProps} onChange={handleChange} />
      </UIComponent>
      <UIDocs<SwitchProps>
        fields={switchProperties}
        fieldState={switchProps}
        onChange={setSwitchProps}
      />
    </div>
  );
}
