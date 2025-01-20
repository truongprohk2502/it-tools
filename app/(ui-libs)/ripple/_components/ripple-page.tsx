"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Ripple, type RippleProps } from "@/components/ui-lib/ripple";
import { useState } from "react";
import { rippleProperties } from "./constant";

const generateCode = (props: RippleProps) => `<Ripple
  rippleColor="${props.rippleColor}"
  className="bg-red-300"
>
  <h1>IT-Tools</h1>
</Ripple>
`;

export default function RipplePage() {
  const [rippleProps, setRippleProps] = useState<RippleProps>({
    rippleColor: "rgba(220,38,38,0.8)",
  });

  return (
    <div>
      <UIComponent title="Ripple" code={generateCode(rippleProps)}>
        <Ripple
          {...rippleProps}
          className="mx-auto flex h-64 w-96 items-center justify-center bg-red-300"
        >
          <h1 className="text-3xl text-red-900">IT-Tools</h1>
        </Ripple>
      </UIComponent>
      <UIDocs<RippleProps>
        fields={rippleProperties}
        fieldState={rippleProps}
        onChange={setRippleProps}
      />
    </div>
  );
}
