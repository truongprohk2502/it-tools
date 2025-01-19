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
