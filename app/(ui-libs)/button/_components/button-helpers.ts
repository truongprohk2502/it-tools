import { cva } from "class-variance-authority";

export const buttonVariants = cva("border border-solid text-sm h-fit", {
  variants: {
    variant: {
      solid: null,
      soft: null,
      outline: null,
    },
    buttonColor: {
      primary: null,
      secondary: null,
      success: null,
      danger: null,
      warning: null,
      info: null,
      light: null,
      dark: null,
    },
    radius: {
      none: "rounded-none",
      large: "rounded-lg",
      full: "rounded-full",
    },
    size: {
      small: "px-2 py-1",
      medium: "px-3 py-1.5",
      large: "px-4 py-2",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      buttonColor: "primary",
      className:
        "bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 disabled:bg-blue-300 disabled:border-blue-300",
    },
    {
      variant: "solid",
      buttonColor: "secondary",
      className:
        "bg-gray-500 border-gray-500 text-white hover:bg-gray-600 hover:border-gray-600 disabled:bg-gray-300 disabled:border-gray-300",
    },
    {
      variant: "solid",
      buttonColor: "success",
      className:
        "bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600 disabled:bg-green-300 disabled:border-green-300",
    },
    {
      variant: "solid",
      buttonColor: "danger",
      className:
        "bg-red-500 border-red-500 text-white hover:bg-red-600 hover:border-red-600 disabled:bg-red-300 disabled:border-red-300",
    },
    {
      variant: "solid",
      buttonColor: "warning",
      className:
        "bg-yellow-500 border-yellow-500 text-white hover:bg-yellow-600 hover:border-yellow-600 disabled:bg-yellow-300 disabled:border-yellow-300",
    },
    {
      variant: "solid",
      buttonColor: "info",
      className:
        "bg-cyan-500 border-cyan-500 text-white hover:bg-cyan-600 hover:border-cyan-600 disabled:bg-cyan-300 disabled:border-cyan-300",
    },
    {
      variant: "solid",
      buttonColor: "light",
      className:
        "bg-gray-200 border-gray-200 text-black hover:bg-gray-300 hover:border-gray-300 disabled:bg-gray-100 disabled:border-gray-100",
    },
    {
      variant: "solid",
      buttonColor: "dark",
      className:
        "bg-gray-900 border-gray-900 text-white hover:bg-black hover:border-black disabled:bg-gray-400 disabled:border-gray-400",
    },
    {
      variant: "outline",
      buttonColor: "primary",
      className:
        "bg-white border-blue-500 text-blue-500 enabled:hover:bg-blue-500 enabled:hover:text-white disabled:text-blue-300 disabled:border-blue-300",
    },
    {
      variant: "outline",
      buttonColor: "secondary",
      className:
        "bg-white border-gray-500 text-gray-500 enabled:hover:bg-gray-500 enabled:hover:text-white disabled:text-gray-300 disabled:border-gray-300",
    },
    {
      variant: "outline",
      buttonColor: "success",
      className:
        "bg-white border-green-500 text-green-500 enabled:hover:bg-green-500 enabled:hover:text-white disabled:text-green-300 disabled:border-green-300",
    },
    {
      variant: "outline",
      buttonColor: "danger",
      className:
        "bg-white border-red-500 text-red-500 enabled:hover:bg-red-500 enabled:hover:text-white disabled:text-red-300 disabled:border-red-300",
    },
    {
      variant: "outline",
      buttonColor: "warning",
      className:
        "bg-white border-yellow-500 text-yellow-500 enabled:hover:bg-yellow-500 enabled:hover:text-white disabled:text-yellow-300 disabled:border-yellow-300",
    },
    {
      variant: "outline",
      buttonColor: "info",
      className:
        "bg-white border-cyan-500 text-cyan-500 enabled:hover:bg-cyan-500 enabled:hover:text-white disabled:text-cyan-300 disabled:border-cyan-300",
    },
    {
      variant: "outline",
      buttonColor: "light",
      className:
        "bg-white border-gray-200 text-gray-400 enabled:hover:bg-gray-200 enabled:hover:text-black disabled:text-gray-100 disabled:border-gray-100",
    },
    {
      variant: "outline",
      buttonColor: "dark",
      className:
        "bg-white border-gray-900 text-gray-900 enabled:hover:bg-gray-900 enabled:hover:text-white disabled:text-gray-400 disabled:border-gray-400",
    },
    {
      variant: "soft",
      buttonColor: "primary",
      className:
        "bg-blue-300 border-blue-500 text-blue-600 enabled:hover:bg-blue-500 enabled:hover:text-white disabled:bg-white disabled:text-blue-300 disabled:border-blue-300",
    },
    {
      variant: "soft",
      buttonColor: "secondary",
      className:
        "bg-gray-300 border-gray-500 text-gray-600 enabled:hover:bg-gray-500 enabled:hover:text-white disabled:bg-white disabled:text-gray-300 disabled:border-gray-300",
    },
    {
      variant: "soft",
      buttonColor: "success",
      className:
        "bg-green-300 border-green-500 text-green-600 enabled:hover:bg-green-500 enabled:hover:text-white disabled:bg-white disabled:text-green-300 disabled:border-green-300",
    },
    {
      variant: "soft",
      buttonColor: "danger",
      className:
        "bg-red-300 border-red-500 text-red-600 enabled:hover:bg-red-500 enabled:hover:text-white disabled:bg-white disabled:text-red-300 disabled:border-red-300",
    },
    {
      variant: "soft",
      buttonColor: "warning",
      className:
        "bg-yellow-300 border-yellow-500 text-yellow-600 enabled:hover:bg-yellow-500 enabled:hover:text-white disabled:bg-white disabled:text-yellow-300 disabled:border-yellow-300",
    },
    {
      variant: "soft",
      buttonColor: "info",
      className:
        "bg-cyan-300 border-cyan-500 text-cyan-600 enabled:hover:bg-cyan-500 enabled:hover:text-white disabled:bg-white disabled:text-cyan-300 disabled:border-cyan-300",
    },
    {
      variant: "soft",
      buttonColor: "light",
      className:
        "bg-gray-200 border-gray-300 text-gray-800 enabled:hover:bg-gray-300 enabled:hover:text-gray-800 disabled:bg-white disabled:text-gray-300 disabled:border-gray-100",
    },
    {
      variant: "soft",
      buttonColor: "dark",
      className:
        "bg-gray-500 border-gray-900 text-gray-100 enabled:hover:bg-gray-900 enabled:hover:text-white disabled:bg-white disabled:text-gray-400 disabled:border-gray-400",
    },
  ],
  defaultVariants: {
    size: "medium",
    radius: "large",
    variant: "solid",
    buttonColor: "primary",
  },
});
