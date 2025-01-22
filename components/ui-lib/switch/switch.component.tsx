"use client";

import { cn } from "@/lib/utils";
import { switchIconVariants, switchVariants } from "./switch.helpers";
import type { SwitchProps } from "./switch.types";

const Switch: React.FC<SwitchProps> = ({
  checked,
  size,
  color,
  disabled,
  className,
  onChange,
}) => {
  const handleClick = () => {
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <div
      data-disabled={Boolean(disabled).toString()}
      data-checked={Boolean(checked).toString()}
      className={cn(switchVariants({ size, color }), className)}
      onClick={handleClick}
    >
      <div
        data-checked={Boolean(checked).toString()}
        className={switchIconVariants({ size })}
      />
    </div>
  );
};

export default Switch;
