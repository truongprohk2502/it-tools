import { cva } from "class-variance-authority";

export const chipVariants = cva("flex items-center rounded-full", {
  variants: {
    size: {
      small: "px-2.5 h-6 border",
      medium: "px-3.5 h-8 border-[2px]",
      large: "px-5 h-10 border-[3px]",
    },
    color: {
      primary: "border-blue-500 data-[disabled=true]:!border-blue-300",
      secondary: "border-gray-500 data-[disabled=true]:!border-gray-300",
      success: "border-green-500 data-[disabled=true]:!border-green-300",
      danger: "border-red-500 data-[disabled=true]:!border-red-300",
      warning: "border-yellow-500 data-[disabled=true]:!border-yellow-300",
      info: "border-cyan-500 data-[disabled=true]:!border-cyan-300",
      light: "border-gray-200 data-[disabled=true]:!border-gray-100",
      dark: "border-gray-900 data-[disabled=true]:!border-gray-400",
    },
    variant: {
      solid: "",
      bordered: "",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "primary",
      className: "bg-blue-500 data-[disabled=true]:!bg-blue-300",
    },
    {
      variant: "solid",
      color: "secondary",
      className: "bg-gray-500 data-[disabled=true]:!bg-gray-300",
    },
    {
      variant: "solid",
      color: "success",
      className: "bg-green-500 data-[disabled=true]:!bg-green-300",
    },
    {
      variant: "solid",
      color: "danger",
      className: "bg-red-500 data-[disabled=true]:!bg-red-300",
    },
    {
      variant: "solid",
      color: "warning",
      className: "bg-yellow-500 data-[disabled=true]:!bg-yellow-300",
    },
    {
      variant: "solid",
      color: "info",
      className: "bg-cyan-500 data-[disabled=true]:!bg-cyan-300",
    },
    {
      variant: "solid",
      color: "light",
      className: "bg-gray-200 data-[disabled=true]:!bg-gray-100",
    },
    {
      variant: "solid",
      color: "dark",
      className: "bg-gray-900 data-[disabled=true]:!bg-gray-400",
    },
  ],
  defaultVariants: {
    size: "medium",
    color: "primary",
  },
});

export const textColorVariants = cva("leading-none", {
  variants: {
    color: {
      primary: "",
      secondary: "",
      success: "",
      danger: "",
      warning: "",
      info: "",
      light: "",
      dark: "",
    },
    variant: {
      solid: "",
      bordered: "",
    },
  },
  compoundVariants: [
    { variant: "solid", color: "primary", className: "text-white" },
    {
      variant: "bordered",
      color: "primary",
      className: "text-blue-500 data-[disabled=true]:!text-blue-300",
    },
    { variant: "solid", color: "secondary", className: "text-white" },
    {
      variant: "bordered",
      color: "secondary",
      className: "text-gray-500 data-[disabled=true]:!text-gray-300",
    },
    { variant: "solid", color: "success", className: "text-white" },
    {
      variant: "bordered",
      color: "success",
      className: "text-green-500 data-[disabled=true]:!text-green-300",
    },
    { variant: "solid", color: "danger", className: "text-white" },
    {
      variant: "bordered",
      color: "danger",
      className: "text-red-500 data-[disabled=true]:!text-red-300",
    },
    {
      variant: "solid",
      color: "warning",
      className: "text-black data-[disabled=true]:text-neutral-400",
    },
    {
      variant: "bordered",
      color: "warning",
      className: "text-yellow-500 data-[disabled=true]:!text-yellow-300",
    },
    { variant: "solid", color: "info", className: "text-white" },
    {
      variant: "bordered",
      color: "info",
      className: "text-cyan-500 data-[disabled=true]:!text-cyan-300",
    },
    {
      variant: "solid",
      color: "light",
      className: "text-black data-[disabled=true]:text-neutral-400",
    },
    {
      variant: "bordered",
      color: "light",
      className: "text-gray-500 data-[disabled=true]:!text-gray-400",
    },
    { variant: "solid", color: "dark", className: "text-white" },
    {
      variant: "bordered",
      color: "dark",
      className: "text-gray-900 data-[disabled=true]:!text-gray-400",
    },
  ],
  defaultVariants: {
    color: "primary",
  },
});

export const labelVariants = cva("leading-none", {
  variants: {
    size: {
      small: "text-xs",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const iconVariants = cva(
  "data-[disabled=false]:cursor-pointer transform",
  {
    variants: {
      size: {
        small: "w-4 h-4 translate-x-[5px]",
        medium: "w-5 h-5 translate-x-[5px]",
        large: "w-6 h-6 translate-x-[8px]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);
