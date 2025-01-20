import { cva } from "class-variance-authority";

export const progressVariants = cva(
  "bg-neutral-200 dark:bg-neutral-400 overflow-hidden relative",
  {
    variants: {
      size: {
        small: "rounded-sm h-2",
        medium: "rounded-sm h-3",
        large: "rounded-md h-6",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export const progressBarVariants = cva(
  [
    "absolute inset-y-0 left-0 bg-[length:1rem_1rem] data-[animate=true]:animate-progress-bar-stripes",
    "data-[stripe=true]:bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]",
  ],
  {
    variants: {
      color: {
        primary: "bg-blue-500",
        secondary: "bg-gray-500",
        success: "bg-green-500",
        danger: "bg-red-500",
        warning: "bg-yellow-500",
        info: "bg-cyan-500",
        light: "bg-gray-300",
        dark: "bg-black",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  },
);
