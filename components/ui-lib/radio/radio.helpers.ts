import { cva } from "class-variance-authority";

export const radioVariants = cva(
  "w-6 h-6 rounded-full flex justify-center items-center border text-white bg-white",
  {
    variants: {
      inputSize: {
        small: "w-5 h-5 border data-[checked=true]:border-[6px]",
        medium: "w-6 h-6 border-2 data-[checked=true]:border-[8px]",
        large: "w-8 h-8 border-[3px] data-[checked=true]:border-[10px]",
      },
      radioColor: {
        primary: "border-blue-500 data-[disabled=true]:border-blue-300",
        secondary: "border-gray-500 data-[disabled=true]:border-gray-300",
        success: "border-green-500 data-[disabled=true]:border-green-300",
        danger: "border-red-500 data-[disabled=true]:border-red-300",
        warning: "border-yellow-500 data-[disabled=true]:border-yellow-300",
        info: "border-cyan-500 data-[disabled=true]:border-cyan-300",
        light: "border-gray-300 data-[disabled=true]:border-gray-200",
        dark: "border-black data-[disabled=true]:border-gray-500",
      },
    },
    defaultVariants: {
      inputSize: "medium",
      radioColor: "primary",
    },
  },
);

export const labelVariants = cva(
  "cursor-pointer select-none pl-2 font-medium",
  {
    variants: {
      inputSize: {
        small: "text-xs",
        medium: "text-sm",
        large: "text-lg",
      },
    },
    defaultVariants: {
      inputSize: "medium",
    },
  },
);
