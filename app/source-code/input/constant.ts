export const inputVariantCode = `// input.helpers.ts
import { cva } from "class-variance-authority";

export const labelVariants = cva(
  "mb-1 transition-all duration-150 transform translate-y-0 data-[invalid=true]:text-red-500",
  {
    variants: {
      inputSize: {
        small:
          "text-xs font-semibold data-[float=true]:pl-1.5 data-[floating=true]:translate-y-[1.6rem]",
        medium:
          "text-sm font-semibold data-[float=true]:pl-2 data-[floating=true]:translate-y-[2.1rem]",
        large:
          "text-lg font-medium data-[float=true]:pl-4 data-[floating=true]:translate-y-[2.55rem]",
      },
    },
    defaultVariants: {
      inputSize: "medium",
    },
  },
);

export const inputVariants = cva(
  [
    "rounded-md border focus:border-neutral-600 focus:outline-none text-sm disabled:bg-neutral-300 disabled:text-neutral-400 dark:disabled:bg-neutral-600 dark:disabled:text-neutral-500",
    "border-neutral-300 dark:border-neutral-500 data-[invalid=true]:!border-red-500",
  ],
  {
    variants: {
      inputSize: {
        small: "px-2 py-1 text-xs",
        medium: "px-3 py-2 text-sm",
        large: "px-4 py-2 text-lg",
      },
    },
    defaultVariants: {
      inputSize: "medium",
    },
  },
);

export const errorMessageVariants = cva("text-red-500 font-medium mt-1", {
  variants: {
    inputSize: {
      small: "text-xs",
      medium: "text-xs",
      large: "text-base",
    },
  },
  defaultVariants: {
    inputSize: "medium",
  },
});
`;

export const inputComponentCode = `// input.component.tsx
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import type { VariantProps } from "class-variance-authority";
import {
  errorMessageVariants,
  inputVariants,
  labelVariants,
} from "./input.helpers";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  isFloatLabel?: boolean;
  error?: string | null;
  wrapperClassName?: string;
}

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
    onFocus && onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocusing(false);
    onBlur && onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.trim() !== "");
    onChange && onChange(e);
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
`;
