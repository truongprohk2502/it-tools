import { cva } from "class-variance-authority";

export const tableVariants = cva("w-full", {
  variants: {
    color: {
      primary: "bg-blue-100",
      secondary: "bg-gray-100",
      success: "bg-green-100",
      danger: "bg-red-100",
      warning: "bg-yellow-100",
      info: "bg-cyan-100",
      light: "bg-background",
      dark: "bg-neutral-700",
    },
  },
});

export const headerVariants = cva("", {
  variants: {
    color: {
      primary: "bg-blue-500 text-blue-100",
      secondary: "bg-gray-500 text-gray-100",
      success: "bg-green-500 text-green-100",
      danger: "bg-red-500 text-red-100",
      warning: "bg-yellow-500 text-yellow-100",
      info: "bg-cyan-500 text-cyan-100",
      light: "bg-background text-foreground",
      dark: "bg-neutral-900 text-white",
    },
  },
});

export const unHoverRowVariants = cva("", {
  variants: {
    color: {
      primary: "bg-blue-200 text-blue-700",
      secondary: "bg-gray-200 text-gray-700",
      success: "bg-green-200 text-green-700",
      danger: "bg-red-200 text-red-700",
      warning: "bg-yellow-200 text-yellow-700",
      info: "bg-cyan-200 text-cyan-700",
      light: "bg-neutral-100 text-foreground",
      dark: "bg-neutral-900 text-white",
    },
  },
});

export const hoverRowVariants = cva("rounded", {
  variants: {
    color: {
      primary: "hover:bg-blue-100",
      secondary: "hover:bg-gray-100",
      success: "hover:bg-green-100",
      danger: "hover:bg-red-100",
      warning: "hover:bg-yellow-100",
      info: "hover:bg-cyan-100",
      light: "hover:bg-neutral-100",
      dark: "hover:bg-neutral-500",
    },
  },
});

export const borderVariants = cva("", {
  variants: {
    color: {
      primary: "border-blue-300",
      secondary: "border-gray-300",
      success: "border-green-300",
      danger: "border-red-300",
      warning: "border-yellow-300",
      info: "border-cyan-300",
      light: "border-neutral-300",
      dark: "border-neutral-700",
    },
  },
});
