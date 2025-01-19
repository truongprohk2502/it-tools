"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Input, type InputProps } from "@/components/ui-lib/input";
import { useState } from "react";
import { inputProperties } from "./constant";

const generateCode = (props: InputProps) => `<Input
  label="${props.label}"
  placeholder="${props.placeholder}"
  error="${props.error}"
  inputSize="${props.inputSize}"
  isFloatLabel={${props.isFloatLabel}}
  disabled={${props.disabled}}
/>
`;

export default function InputPage() {
  const [inputProps, setInputProps] = useState<InputProps>({
    label: "Your address",
    placeholder: "Enter address",
    error: "",
    inputSize: "medium",
    isFloatLabel: false,
    disabled: false,
  });

  return (
    <div>
      <UIComponent title="Input" code={generateCode(inputProps)}>
        <Input {...inputProps} wrapperClassName="w-96" />
      </UIComponent>
      <UIDocs<InputProps>
        fields={inputProperties}
        fieldState={inputProps}
        onChange={setInputProps}
      />
    </div>
  );
}
