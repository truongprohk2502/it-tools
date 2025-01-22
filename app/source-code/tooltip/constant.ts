export const tooltipVariantCode = `// tooltip.helpers.ts
import { cva } from "class-variance-authority";

export const tooltipVariants = cva(
  [
    "invisible opacity-0 text-sm absolute whitespace-nowrap bg-neutral-700 text-white text-center rounded-sm px-2 py-1 z-10",
    "transition-opacity duration-150 group-hover:visible group-hover:opacity-100",
    "after:content-[''] after:absolute after:border-[5px] after:border-solid",
  ],
  {
    variants: {
      position: {
        top: [
          "bottom-[calc(100%+6px)] left-1/2",
          "after:top-full after:left-1/2 after:-ml-[5px] after:border-t-neutral-700 after:border-b-transparent after:border-x-transparent",
        ],
        right: [
          "left-[calc(100%+6px)] top-1/2",
          "after:right-full after:top-1/2 after:-mt-[5px] after:border-r-neutral-700 after:border-l-transparent after:border-y-transparent",
        ],
        bottom: [
          "top-[calc(100%+6px)] left-1/2",
          "after:bottom-full after:left-1/2 after:-ml-[5px] after:border-b-neutral-700 after:border-t-transparent after:border-x-transparent",
        ],
        left: [
          "right-[calc(100%+6px)] top-1/2",
          "after:left-full after:top-1/2 after:-mt-[5px] after:border-l-neutral-700 after:border-r-transparent after:border-y-transparent",
        ],
      },
    },
  },
);
`;

export const tooltipComponentCode = `// tooltip.component.tsx
import clsx from "clsx";
import { useCallback } from "react";
import { tooltipVariants } from "./tooltip.helpers";

export interface TooltipProps {
  title: string;
  position?: "top" | "right" | "bottom" | "left";
  tooltipClassName?: string;
  className?: string;
  width?: string | number;
  children: React.ReactNode;
}

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
          el.style.marginLeft = \`-\${el.clientWidth / 2}px\`;
          break;
        case "left":
        case "right":
          el.style.marginLeft = "0px";
          el.style.marginTop = \`-\${el.clientHeight / 2}px\`;
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
`;
