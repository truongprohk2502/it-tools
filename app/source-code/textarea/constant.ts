export const textareaVariantCode = `// textarea.helpers.ts
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

export const textareaVariants = cva(
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

export const textareaComponentCode = `// textarea.component.tsx
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import {
  errorMessageVariants,
  labelVariants,
  textareaVariants,
} from "./textarea.helpers";

const Textarea: React.FC<TextareaProps> = ({
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
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [focusing, setFocusing] = useState<boolean>(false);

  useEffect(() => {
    const defaultValue = inputRef.current!.defaultValue;
    setHasValue(defaultValue.trim() !== "");
  }, []);

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    setFocusing(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    setFocusing(false);
    onBlur && onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(e.target.value.trim() !== "");
    onChange && onChange(e);
  };

  const handleClickLabel = () => {
    if (!isFloatLabel || focusing) return;
    inputRef.current!.focus();
  };

  const isFloatingLabel = isFloatLabel && !focusing && !hasValue;

  return (
    <div className={clsx("flex flex-col", wrapperClassName)}>
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
      <textarea
        {...props}
        ref={inputRef}
        placeholder={!isFloatLabel ? placeholder : undefined}
        data-invalid={Boolean(error).toString()}
        className={clsx(textareaVariants({ inputSize }), className)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {error && <p className={errorMessageVariants({ inputSize })}>{error}</p>}
    </div>
  );
};

export default Textarea;
`;
