"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Steps, type StepsProps } from "@/components/ui-lib/steps";
import { CalendarIcon, UserIcon, WalletIcon } from "lucide-react";
import { useState } from "react";
import { stepsProperties } from "./constant";

const generateCode = (props: StepsProps) => `<Steps
  position="${props.position}"
  color="${props.color}"
  current={currentStepIndex}
  steps={[
    {
      title: "Step 1",
      description: "First step",
      icon: <UserIcon width={16} height={16} />,
    },
    {
      title: "Step 2",
      description: "Second step",
      icon: <CalendarIcon width={16} height={16} />,
    },
    {
      title: "Step 3",
      description: "Final step",
      icon: <WalletIcon width={16} height={16} />,
    },
  ]}
/>
`;

export default function StepsPage() {
  const [stepsProps, setStepsProps] = useState<StepsProps>({
    position: "inline",
    color: "primary",
    current: 2,
    steps: [
      {
        title: "Step 1",
        description: "First step",
        icon: <UserIcon width={16} height={16} />,
      },
      {
        title: "Step 2",
        description: "Second step",
        icon: <CalendarIcon width={16} height={16} />,
      },
      {
        title: "Step 3",
        description: "Final step",
        icon: <WalletIcon width={16} height={16} />,
      },
    ],
  });

  return (
    <div>
      <UIComponent title="Steps" code={generateCode(stepsProps)}>
        <Steps {...stepsProps} />
      </UIComponent>
      <UIDocs<StepsProps>
        fields={stepsProperties}
        fieldState={stepsProps}
        onChange={setStepsProps}
      />
    </div>
  );
}
