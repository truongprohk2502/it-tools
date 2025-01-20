"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Spinner, type SpinnerProps } from "@/components/ui-lib/spinner";
import { useState } from "react";
import { spinnerProperties } from "./constant";

const generateCode = (props: SpinnerProps) => `<Spinner
  variant="${props.variant}"
  size="${props.size}"
  color="${props.color}"
/>
`;

export default function SpinnerPage() {
  const [spinnerProps, setSpinnerProps] = useState<SpinnerProps>({
    variant: "clip",
    size: "medium",
    color: "primary",
  });

  return (
    <div>
      <UIComponent title="Spinner" code={generateCode(spinnerProps)}>
        <Spinner {...spinnerProps} />
      </UIComponent>
      <UIDocs<SpinnerProps>
        fields={spinnerProperties}
        fieldState={spinnerProps}
        onChange={setSpinnerProps}
      />
    </div>
  );
}
