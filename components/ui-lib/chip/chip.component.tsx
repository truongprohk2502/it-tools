"use client";

import { cn } from "@/lib/utils";
import { CircleXIcon } from "lucide-react";
import {
  chipVariants,
  iconVariants,
  labelVariants,
  textColorVariants,
} from "./chip.helpers";
import type { ChipProps } from "./chip.types";

const Chip: React.FC<ChipProps> = ({
  title,
  variant = "solid",
  disabled = false,
  size,
  color,
  hasRemove,
  className,
  onRemove,
}) => {
  const handleRemove = () => {
    if (disabled) return;
    onRemove?.();
  };

  return (
    <div
      data-solid={variant === "solid"}
      data-disabled={disabled}
      className={cn(chipVariants({ size, color, variant }), className)}
    >
      <span
        data-solid={variant === "solid"}
        data-disabled={disabled}
        className={cn(
          labelVariants({ size }),
          textColorVariants({ color, variant }),
        )}
      >
        {title}
      </span>
      {hasRemove && (
        <CircleXIcon
          data-solid={variant === "solid"}
          data-disabled={disabled}
          className={cn(
            iconVariants({ size }),
            textColorVariants({ color, variant }),
          )}
          onClick={handleRemove}
        />
      )}
    </div>
  );
};

export default Chip;
