"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Countdown, type CountdownProps } from "@/components/ui-lib/countdown";
import { useState } from "react";
import { countdownProperties } from "./constant";

const generateCode = (props: CountdownProps) => `<Countdown
  seconds={${props.seconds}}
  hasDay={${props.hasDay}}
  size="${props.size}"
  variant="${props.variant}"
/>
`;

export default function CountdownPage() {
  const [countdownProps, setCountdownProps] = useState<CountdownProps>({
    seconds: 86410,
    hasDay: false,
    size: "medium",
    variant: "line_label",
  });

  return (
    <div>
      <UIComponent title="Countdown" code={generateCode(countdownProps)}>
        <Countdown {...countdownProps} />
      </UIComponent>
      <UIDocs<CountdownProps>
        fields={countdownProperties}
        fieldState={countdownProps}
        onChange={setCountdownProps}
      />
    </div>
  );
}
