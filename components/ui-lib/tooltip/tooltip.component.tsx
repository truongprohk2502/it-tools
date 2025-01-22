"use client";

import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { tooltipVariants } from "./tooltip.helpers";
import type { TooltipProps } from "./tooltip.types";

const Tooltip: React.FC<TooltipProps> = ({
  title,
  position = "top",
  tooltipClassName,
  className,
  width,
  children,
}) => {
  const refCallback = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return;

      switch (position) {
        case "top":
        case "bottom":
          el.style.marginTop = "0px";
          el.style.marginLeft = `-${el.clientWidth / 2}px`;
          break;
        case "left":
        case "right":
          el.style.marginLeft = "0px";
          el.style.marginTop = `-${el.clientHeight / 2}px`;
          break;
        default:
          break;
      }
    },
    [position, title],
  );

  return (
    <div className={cn("group relative w-fit", className)}>
      {children}
      <div
        ref={refCallback}
        style={{ width: width || "auto" }}
        className={cn(tooltipVariants({ position }), tooltipClassName)}
      >
        {title}
      </div>
    </div>
  );
};

export default Tooltip;
