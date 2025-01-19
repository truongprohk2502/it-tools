"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Textarea, type TextareaProps } from "@/components/ui-lib/textarea";
import { useState } from "react";
import { textareaProperties } from "./constant";

const generateCode = (props: TextareaProps) => `<Textarea
  label="${props.label}"
  placeholder="${props.placeholder}"
  error="${props.error}"
  inputSize="${props.inputSize}"
  isFloatLabel={${props.isFloatLabel}}
  disabled={${props.disabled}}
/>
`;

export default function TextareaPage() {
  const [textareaProps, setTextareaProps] = useState<TextareaProps>({
    label: "Your address",
    placeholder: "Enter address",
    error: "",
    inputSize: "medium",
    isFloatLabel: false,
    disabled: false,
  });

  return (
    <div>
      <UIComponent title="Textarea" code={generateCode(textareaProps)}>
        <Textarea {...textareaProps} wrapperClassName="w-96" />
      </UIComponent>
      <UIDocs<TextareaProps>
        fields={textareaProperties}
        fieldState={textareaProps}
        onChange={setTextareaProps}
      />
    </div>
  );
}
