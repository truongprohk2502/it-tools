export const speedDialTailwindCode = `// tailwind.config.js
module.exports = {
  ...
  theme: {
    ...
    extend: {
      ...
      keyframes: {
        "scale-in": {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        "scale-out": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0)" },
        },
      },
      animation: {
        "scale-in": "scale-in",
        "scale-out": "scale-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")]
};
`;

export const dialogUseClickAwayCode = `// use-click-away.ts
import { RefObject, useEffect } from "react";

const defaultEvents = ["mousedown", "touchstart"];
type DefaultEventType = "mousedown" | "touchstart";

const useClickAway = (
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const el = ref.current!;
      if (!el) return;
      if (el.contains(event.target as HTMLElement)) return;
      onClickAway(event);
    };

    for (const eventName of defaultEvents) {
      document.addEventListener(eventName as DefaultEventType, handler);
    }

    return () => {
      for (const eventName of defaultEvents) {
        document.removeEventListener(eventName as DefaultEventType, handler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useClickAway;
`;

export const speedDialHelpersCode = `// speed-dial.helpers
import { cva } from "class-variance-authority";

export const wrapperVariants = cva(
  "w-16 h-16 rounded-full shadow-md flex justify-center items-center cursor-pointer",
  {
    variants: {
      color: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-white",
        info: "bg-cyan-500 text-white",
        light: "bg-gray-200 text-black",
        dark: "bg-gray-900 text-white",
      },
    },
  },
);

export const itemVariants = cva("absolute items-center gap-2", {
  variants: {
    position: {
      top: "flex flex-col-reverse inset-x-0 bottom-[calc(100%+0.5rem)]",
      bottom: "flex flex-col inset-x-0 top-[calc(100%+0.5rem)]",
      left: "flex flex-row-reverse inset-y-0 right-[calc(100%+0.5rem)]",
      right: "flex inset-y-0 left-[calc(100%+0.5rem)]",
    },
  },
});
`;

export const speedDialComponentCode = `// speed-dial.component.tsx
import clsx from "clsx";
import useClickAway from "@/hooks/use-click-away";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { itemVariants, wrapperVariants } from "./speed-dial.helpers";
import type { VariantProps } from "class-variance-authority";

export interface SpeedDialProps
  extends VariantProps<typeof wrapperVariants>,
    VariantProps<typeof itemVariants> {
  items: Array<{ icon: React.ReactNode; onClick: () => void }>;
  className?: string;
}

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
                animationDelay: \`\${(opening ? index : items.length - index) * 0.05}s\`,
                animationDuration: \`\${0.05 * items.length}s\`,
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
`;
