"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import {
  errorMessageVariants,
  inputVariants,
  labelVariants,
} from "./input.helpers";
import type { InputProps } from "./input.types";

const Input: React.FC<InputProps> = ({
  inputSize,
  label,
  isFloatLabel,
  error,
  placeholder,
  className,
  wrapperClassName,
  onFocus,
  onBlur,
  onChange,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [focusing, setFocusing] = useState<boolean>(false);

  useEffect(() => {
    const defaultValue = inputRef.current!.defaultValue;
    setHasValue(defaultValue.trim() !== "");
  }, []);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocusing(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocusing(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.trim() !== "");
    onChange?.(e);
  };

  const handleClickLabel = () => {
    if (!isFloatLabel || focusing) return;
    inputRef.current!.focus();
  };

  const isFloatingLabel = isFloatLabel && !focusing && !hasValue;

  return (
    <div className={cn("flex flex-col", wrapperClassName)}>
      {label && (
        <label
          data-float={Boolean(isFloatLabel).toString()}
          data-floating={Boolean(isFloatingLabel).toString()}
          data-invalid={Boolean(error).toString()}
          className={labelVariants({ inputSize })}
          onClick={handleClickLabel}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        ref={inputRef}
        placeholder={!isFloatLabel ? placeholder : undefined}
        data-invalid={Boolean(error).toString()}
        className={cn(inputVariants({ inputSize }), className)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {error && <p className={errorMessageVariants({ inputSize })}>{error}</p>}
    </div>
  );
};

export default Input;
