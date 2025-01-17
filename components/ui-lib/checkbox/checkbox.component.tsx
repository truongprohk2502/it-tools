"use client";

import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { useId } from "react";
import {
  checkboxVariants,
  iconVariants,
  labelVariants,
} from "./checkbox.helpers";
import type { CheckboxProps } from "./checkbox.types";

const Checkbox: React.FC<CheckboxProps> = ({
  checkboxColor,
  inputSize,
  label,
  checked,
  disabled,
  wrapperClassName,
  labelClassName,
  onChangeChecked,
  ...props
}) => {
  const id = useId();

  return (
    <div className={cn("flex cursor-pointer items-center", wrapperClassName)}>
      <div className="relative">
        <div
          data-disabled={Boolean(disabled).toString()}
          data-checked={Boolean(checked).toString()}
          className={checkboxVariants({ inputSize, checkboxColor })}
        >
          <CheckIcon
            className={cn(iconVariants({ inputSize }), { invisible: !checked })}
          />
        </div>
        <input
          {...props}
          type="checkbox"
          id={id}
          disabled={disabled}
          checked={checked}
          onChange={(e) => onChangeChecked && onChangeChecked(e.target.checked)}
          className="absolute inset-0 opacity-0"
        />
      </div>
      {label && (
        <label
          htmlFor={id}
          className={cn(labelVariants({ inputSize }), labelClassName)}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
