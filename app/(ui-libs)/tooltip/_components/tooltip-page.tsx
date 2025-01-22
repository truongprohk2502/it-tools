"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { Button } from "@/components/ui-lib/button";
import { Tooltip, type TooltipProps } from "@/components/ui-lib/tooltip";
import { useState } from "react";
import { tooltipProperties } from "./constant";

const generateCode = (props: TooltipProps) => `<Tooltip
  title="${props.title}"
  position="${props.position}"
>
  <Button>Hover me</Button>
</Tooltip>
`;

export default function TooltipPage() {
  const [tooltipProps, setTooltipProps] = useState<TooltipProps>({
    title: "This is the description",
    position: "top",
    children: null,
  });

  return (
    <div>
      <UIComponent title="Tooltip" code={generateCode(tooltipProps)}>
        <Tooltip {...tooltipProps}>
          <Button>Hover me</Button>
        </Tooltip>
      </UIComponent>
      <UIDocs<TooltipProps>
        fields={tooltipProperties}
        fieldState={tooltipProps}
        onChange={setTooltipProps}
      />
    </div>
  );
}
