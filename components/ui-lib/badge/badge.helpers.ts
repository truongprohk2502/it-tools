import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "absolute flex justify-center items-center border-white px-[3px]",
  {
    variants: {
      shape: {
        square: "rounded-sm",
        circle: "rounded-full",
      },
      size: {
        small: "min-w-3 h-3 data-[outline=true]:border text-[9px]",
        medium: "min-w-4 h-4 data-[outline=true]:border text-xs",
        large: "min-w-5 h-5 data-[outline=true]:border-2 text-sm",
      },
      position: {
        topRight: "",
        topLeft: "",
        bottomRight: "",
        bottomLeft: "",
      },
      color: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-white",
        info: "bg-cyan-500 text-white",
        light: "bg-gray-200 text-black",
        dark: "bg-gray-900 text-white",
      },
    },
    compoundVariants: [
      {
        position: "topRight",
        size: "small",
        className: "-top-1 left-[calc(100%-7px)]",
      },
      {
        position: "topRight",
        size: "medium",
        className: "-top-1.5 left-[calc(100%-10px)]",
      },
      {
        position: "topRight",
        size: "large",
        className: "-top-2 left-[calc(100%-12px)]",
      },
      {
        position: "bottomRight",
        size: "small",
        className: "-bottom-1 left-[calc(100%-7px)]",
      },
      {
        position: "bottomRight",
        size: "medium",
        className: "-bottom-1.5 left-[calc(100%-10px)]",
      },
      {
        position: "bottomRight",
        size: "large",
        className: "-bottom-2 left-[calc(100%-12px)]",
      },
      {
        position: "topLeft",
        size: "small",
        className: "-top-1 right-[calc(100%-7px)]",
      },
      {
        position: "topLeft",
        size: "medium",
        className: "-top-1.5 right-[calc(100%-10px)]",
      },
      {
        position: "topLeft",
        size: "large",
        className: "-top-2 right-[calc(100%-12px)]",
      },
      {
        position: "bottomLeft",
        size: "small",
        className: "-bottom-1 right-[calc(100%-7px)]",
      },
      {
        position: "bottomLeft",
        size: "medium",
        className: "-bottom-1.5 right-[calc(100%-10px)]",
      },
      {
        position: "bottomLeft",
        size: "large",
        className: "-bottom-2 right-[calc(100%-12px)]",
      },
    ],
    defaultVariants: {
      shape: "square",
      size: "medium",
      color: "primary",
      position: "topRight",
    },
  },
);
