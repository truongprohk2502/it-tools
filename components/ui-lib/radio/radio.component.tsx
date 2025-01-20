"use client";

import { cn } from "@/lib/utils";
import { useId } from "react";
import { labelVariants, radioVariants } from "./radio.helpers";
import type { RadioProps } from "./radio.types";

const Radio: React.FC<RadioProps> = ({
  radioColor,
  inputSize,
  value,
  label,
  checked,
  disabled,
  className,
  onChangeChecked,
  ...props
}) => {
  const id = useId();

  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative cursor-pointer">
        <div
          data-disabled={Boolean(disabled).toString()}
          data-checked={Boolean(checked).toString()}
          className={radioVariants({ inputSize, radioColor })}
        />
        <input
          {...props}
          type="radio"
          id={id}
          disabled={disabled}
          checked={checked}
          onChange={(e) => onChangeChecked?.(e.target.checked, value)}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
      </div>
      {label && (
        <label htmlFor={id} className={labelVariants({ inputSize })}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Radio;
