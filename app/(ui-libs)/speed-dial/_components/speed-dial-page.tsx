"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { SpeedDial, type SpeedDialProps } from "@/components/ui-lib/speed-dial";
import { useState } from "react";
import { speedDialProperties } from "./constant";

const generateCode = (props: SpeedDialProps) => `<SpeedDial
  color="${props.color}"
  position="${props.position}"
  items={[
    {
      icon: "👋",
      onClick: () => console.log("👋"),
    },
    {
      icon: "🤢",
      onClick: () => console.log("🤢"),
    },
    {
      icon: "😍",
      onClick: () => console.log("😍"),
    },
  ]}
/>
`;

export default function SpeedDialPage() {
  const [speedDialProps, setSpeedDialProps] = useState<SpeedDialProps>({
    color: "primary",
    position: "top",
    items: [
      {
        icon: "👋",
        onClick: () => console.log("👋"),
      },
      {
        icon: "🤢",
        onClick: () => console.log("🤢"),
      },
      {
        icon: "😍",
        onClick: () => console.log("😍"),
      },
    ],
  });

  return (
    <div>
      <UIComponent title="SpeedDial" code={generateCode(speedDialProps)}>
        <div className="flex h-[28rem] items-center justify-center">
          <SpeedDial {...speedDialProps} />
        </div>
      </UIComponent>
      <UIDocs<SpeedDialProps>
        fields={speedDialProperties}
        fieldState={speedDialProps}
        onChange={setSpeedDialProps}
      />
    </div>
  );
}
