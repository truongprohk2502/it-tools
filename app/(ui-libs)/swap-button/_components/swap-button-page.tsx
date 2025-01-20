"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  SwapButton,
  type SwapButtonProps,
} from "@/components/ui-lib/swap-button";
import { useState } from "react";
import { swapButtonProperties } from "./constant";

const generateCode = (props: SwapButtonProps) => `<SwapButton
  variant="${props.variant}"
  isOn={isHappy}
  onItem={<span>😇</span>}
  offItem={<span>😈</span>}
  onToggle={setIsHappy}
/>
`;

export default function SwapButtonPage() {
  const [swapButtonProps, setSwapButtonProps] = useState<SwapButtonProps>({
    isOn: true,
    variant: "none",
    onItem: <span className="text-4xl">😇</span>,
    offItem: <span className="text-4xl">😈</span>,
    onToggle: () => {},
  });

  const handleToggle = () => {
    setSwapButtonProps({ ...swapButtonProps, isOn: !swapButtonProps.isOn });
  };

  return (
    <div>
      <UIComponent title="SwapButton" code={generateCode(swapButtonProps)}>
        <SwapButton {...swapButtonProps} onToggle={handleToggle} />
      </UIComponent>
      <UIDocs<SwapButtonProps>
        fields={swapButtonProperties}
        fieldState={swapButtonProps}
        onChange={setSwapButtonProps}
      />
    </div>
  );
}
