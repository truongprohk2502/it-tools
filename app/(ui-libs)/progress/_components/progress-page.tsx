"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Progress, type ProgressProps } from "@/components/ui-lib/progress";
import { useState } from "react";
import { progressProperties } from "./constant";

const generateCode = (props: ProgressProps) => `<Progress
  value={${props.value}}
  size="${props.size}"
  color="${props.color}"
  hasStripes={${props.hasStripes}}
  animateStripes={${props.animateStripes}}
/>
`;

export default function ProgressPage() {
  const [progressProps, setProgressProps] = useState<ProgressProps>({
    value: 50,
    size: "medium",
    color: "primary",
    hasStripes: true,
    animateStripes: true,
  });

  return (
    <div>
      <UIComponent title="Progress" code={generateCode(progressProps)}>
        <Progress {...progressProps} />
      </UIComponent>
      <UIDocs<ProgressProps>
        fields={progressProperties}
        fieldState={progressProps}
        onChange={setProgressProps}
      />
    </div>
  );
}
