"use client";

import { cn } from "@/lib/utils";

export interface SwapButtonProps {
  variant?: "none" | "fade" | "spin" | "flip";
  isOn: boolean;
  onItem: React.ReactNode;
  offItem: React.ReactNode;
  className?: string;
  onToggle: () => void;
}

const SwapButton: React.FC<SwapButtonProps> = ({
  variant = "none",
  isOn,
  onItem,
  offItem,
  className,
  onToggle,
}) => {
  return (
    <div
      className={cn("relative w-fit cursor-pointer", className)}
      onClick={onToggle}
    >
      <div
        className={cn(
          "select-none",
          {
            "transition-all duration-150": variant !== "none",
          },
          variant === "none" && {
            visible: isOn,
            invisible: !isOn,
          },
          variant === "fade" && {
            "opacity-100": isOn,
            "opacity-0": !isOn,
          },
          variant === "spin" && {
            "rotate-0 opacity-100": isOn,
            "-rotate-90 opacity-0": !isOn,
          },
          variant === "flip" && {
            "scale-x-100 opacity-100": isOn,
            "scale-x-0 opacity-0": !isOn,
          },
        )}
      >
        {onItem}
      </div>
      <div
        className={cn(
          "absolute inset-0 select-none",
          {
            "transition-all duration-150": variant !== "none",
          },
          variant === "none" && {
            invisible: isOn,
            visible: !isOn,
          },
          variant === "fade" && {
            "opacity-0": isOn,
            "opacity-100": !isOn,
          },
          variant === "spin" && {
            "rotate-90 opacity-0": isOn,
            "rotate-0 opacity-100": !isOn,
          },
          variant === "flip" && {
            "scale-x-0 opacity-0": isOn,
            "scale-x-100 opacity-100": !isOn,
          },
        )}
      >
        {offItem}
      </div>
    </div>
  );
};

export default SwapButton;
