import { cva } from "class-variance-authority";

export const breadcrumbVariants = cva(
  [
    "cursor-pointer text-neutral-400 dark:text-neutral-500 data-[disabled=true]:cursor-default",
    "data-[last=false]:data-[disabled=true]:text-neutral-300 dark:data-[last=false]:data-[disabled=true]:text-neutral-600",
    "data-[last=true]:text-neutral-700 dark:data-[last=true]:text-neutral-300 data-[last=true]:font-semibold",
  ],
  {
    variants: {
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export const separatorVariants = cva(
  "text-neutral-500 dark:text-neutral-300 data-[disabled=true]:text-neutral-400 dark:data-[disabled=true]:text-neutral-700",
  {
    variants: {
      size: {
        small: "text-base mx-2",
        medium: "text-lg mx-2",
        large: "text-2xl mx-4",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);
