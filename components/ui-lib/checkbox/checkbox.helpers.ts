import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  "rounded-md flex justify-center items-center border text-white bg-white data-[disabled=true]:bg-gray-200",
  {
    variants: {
      inputSize: {
        small: "w-5 h-5",
        medium: "w-6 h-6",
        large: "w-8 h-8",
      },
      checkboxColor: {
        primary: [
          "border-blue-500 data-[disabled=true]:border-blue-400 data-[disabled=true]:data-[checked=true]:border-blue-300",
          "data-[checked=true]:bg-blue-500 data-[checked=true]:data-[disabled=true]:bg-blue-300",
        ],
        secondary: [
          "border-gray-500 data-[disabled=true]:border-gray-400 data-[disabled=true]:data-[checked=true]:border-gray-300",
          "data-[checked=true]:bg-gray-500 data-[checked=true]:data-[disabled=true]:bg-gray-300",
        ],
        success: [
          "border-green-500 data-[disabled=true]:border-green-400 data-[disabled=true]:data-[checked=true]:border-green-300",
          "data-[checked=true]:bg-green-500 data-[checked=true]:data-[disabled=true]:bg-green-300",
        ],
        danger: [
          "border-red-500 data-[disabled=true]:border-red-400 data-[disabled=true]:data-[checked=true]:border-red-300",
          "data-[checked=true]:bg-red-500 data-[checked=true]:data-[disabled=true]:bg-red-300",
        ],
        warning: [
          "border-yellow-500 data-[disabled=true]:border-yellow-400 data-[disabled=true]:data-[checked=true]:border-yellow-300",
          "data-[checked=true]:bg-yellow-500 data-[checked=true]:data-[disabled=true]:bg-yellow-300",
        ],
        info: [
          "border-cyan-500 data-[disabled=true]:border-cyan-400 data-[disabled=true]:data-[checked=true]:border-cyan-300",
          "data-[checked=true]:bg-cyan-500 data-[checked=true]:data-[disabled=true]:bg-cyan-300",
        ],
        light: [
          "border-gray-300 data-[disabled=true]:border-gray-200",
          "data-[checked=true]:bg-gray-300 data-[checked=true]:data-[disabled=true]:bg-gray-300",
        ],
        dark: [
          "border-black data-[disabled=true]:border-gray-700",
          "data-[checked=true]:bg-black data-[checked=true]:data-[disabled=true]:bg-gray-700",
        ],
      },
    },
    defaultVariants: {
      inputSize: "medium",
      checkboxColor: "primary",
    },
  },
);

export const iconVariants = cva(null, {
  variants: {
    inputSize: {
      small: "w-3 h-3",
      medium: "w-4 h-4",
      large: "w-6 h-6",
    },
  },
  defaultVariants: {
    inputSize: "medium",
  },
});

export const labelVariants = cva("select-none ml-2 font-medium", {
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
});
