import { cva } from "class-variance-authority";

export const codeVariants = cva(
  "flex items-center justify-between gap-2 rounded-md px-3 py-1.5",
  {
    variants: {
      size: {
        small: "text-xs",
        medium: "text-base",
        large: "text-xl",
      },
      color: {
        primary: "bg-blue-100 text-blue-600",
        secondary: "bg-gray-100 text-gray-600",
        success: "bg-green-100 text-green-600",
        danger: "bg-red-100 text-red-600",
        warning: "bg-yellow-100 text-yellow-600",
        info: "bg-cyan-100 text-cyan-600",
        light: "bg-transparent text-gray-500",
        dark: "bg-neutral-900 text-white",
      },
    },
    defaultVariants: {
      size: "medium",
      color: "primary",
    },
  },
);

export const copyVariants = cva("cursor-pointer animate-zoom-in", {
  variants: {
    size: {
      small: "w-4 h-4",
      medium: "w-5 h-5",
      large: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
