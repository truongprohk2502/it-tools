"use client";

import useClickAway from "@/hooks/use-click-away";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { itemVariants, wrapperVariants } from "./speed-dial.helpers";
import type { SpeedDialProps } from "./speed-dial.types";

const SpeedDial: React.FC<SpeedDialProps> = ({
  items,
  color = "primary",
  position = "bottom",
  className,
}) => {
  const [rendering, setRendering] = useState<boolean>(false);
  const [opening, setOpening] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickAway(wrapperRef, () => setOpening(false));

  useEffect(() => {
    if (opening) setRendering(true);
  }, [opening]);

  const handleAnimationEnd = () => {
    if (!opening) setRendering(false);
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={wrapperRef}
        className={wrapperVariants({ color })}
        onClick={() => setOpening(!opening)}
      >
        <PlusIcon
          width={28}
          height={28}
          className={cn("transition-transform duration-150", {
            "rotate-45": rendering,
          })}
        />
      </div>
      {rendering && (
        <div className={itemVariants({ position })}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${(opening ? index : items.length - index) * 0.05}s`,
                animationDuration: `${0.05 * items.length}s`,
              }}
              className={cn(
                "h-12 w-12 select-none rounded-full fill-mode-forwards",
                "bg-neutral-600 shadow-md hover:bg-neutral-700",
                "flex cursor-pointer items-center justify-center",
                opening
                  ? "animate-scale-in scale-0"
                  : "scale-1 animate-scale-out",
              )}
              onClick={item.onClick}
              onAnimationEnd={
                index === items.length - 1 ? handleAnimationEnd : undefined
              }
            >
              {item.icon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpeedDial;
