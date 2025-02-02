import { cva } from "class-variance-authority";

export const toastVariants = cva(
  "z-20 fixed transform bg-white rounded-md border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center pl-4 pr-6 py-4 animate-toast-in fill-mode-forwards",
  {
    variants: {
      position: {
        topLeft: "top-4 left-4",
        topCenter: "top-4 left-1/2 -translate-x-1/2",
        topRight: "top-4 right-4",
        bottomLeft: "bottom-4 left-4",
        bottomCenter: "bottom-4 left-1/2 -translate-x-1/2",
        bottomRight: "bottom-4 right-4",
      },
    },
    defaultVariants: {
      position: "topRight",
    },
  },
);
