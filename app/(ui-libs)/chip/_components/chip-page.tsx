"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Chip, type ChipProps } from "@/components/ui-lib/chip";
import { useState } from "react";
import { chipProperties } from "./constant";

const generateCode = (props: ChipProps) => `<Chip
  title="${props.title}"
  color="${props.color}"
  variant="${props.variant}"
  size="${props.size}"
  disabled={${props.disabled}}
  hasRemove={${props.hasRemove}}
  onRemove={handleRemoveChip}
/>
`;

export default function ChipPage() {
  const [chipProps, setChipProps] = useState<ChipProps>({
    title: "IT Tools",
    color: "primary",
    variant: "solid",
    size: "medium",
    disabled: false,
    hasRemove: true,
  });

  return (
    <div>
      <UIComponent title="Chip" code={generateCode(chipProps)}>
        <Chip {...chipProps} />
      </UIComponent>
      <UIDocs<ChipProps>
        fields={chipProperties}
        fieldState={chipProps}
        onChange={setChipProps}
      />
    </div>
  );
}
