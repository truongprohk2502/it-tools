import { cva } from "class-variance-authority";

export const switchVariants = cva(
  "rounded-full cursor-pointer transition-all duration-150 bg-neutral-400 data-[disabled=true]:bg-neutral-300",
  {
    variants: {
      size: {
        small: "w-7 h-4 p-0.5",
        medium: "w-10 h-6 p-1",
        large: "w-12 h-7 p-1",
      },
      color: {
        primary:
          "data-[checked=true]:bg-blue-500 data-[checked=true]:data-[disabled=true]:bg-blue-300",
        secondary:
          "data-[checked=true]:bg-gray-500 data-[checked=true]:data-[disabled=true]:bg-gray-300",
        success:
          "data-[checked=true]:bg-green-500 data-[checked=true]:data-[disabled=true]:bg-green-300",
        danger:
          "data-[checked=true]:bg-red-500 data-[checked=true]:data-[disabled=true]:bg-red-300",
        warning:
          "data-[checked=true]:bg-yellow-500 data-[checked=true]:data-[disabled=true]:bg-yellow-300",
        info: "data-[checked=true]:bg-cyan-500 data-[checked=true]:data-[disabled=true]:bg-cyan-300",
        light:
          "data-[checked=true]:bg-gray-300 data-[checked=true]:data-[disabled=true]:bg-gray-200",
        dark: "data-[checked=true]:bg-black data-[checked=true]:data-[disabled=true]:bg-gray-400",
      },
    },
    defaultVariants: {
      size: "medium",
      color: "primary",
    },
  },
);

export const switchIconVariants = cva(
  "rounded-full bg-white transform transition-all duration-150 translate-x-0",
  {
    variants: {
      size: {
        small: "w-3 h-3 data-[checked=true]:translate-x-3",
        medium: "w-4 h-4 data-[checked=true]:translate-x-4",
        large: "w-5 h-5 data-[checked=true]:translate-x-5",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);
