import { cva } from "class-variance-authority";

export const wrapperVariants = cva(
  "w-16 h-16 rounded-full shadow-md flex justify-center items-center cursor-pointer",
  {
    variants: {
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
  },
);

export const itemVariants = cva("absolute items-center gap-2", {
  variants: {
    position: {
      top: "flex flex-col-reverse inset-x-0 bottom-[calc(100%+0.5rem)]",
      bottom: "flex flex-col inset-x-0 top-[calc(100%+0.5rem)]",
      left: "flex flex-row-reverse inset-y-0 right-[calc(100%+0.5rem)]",
      right: "flex inset-y-0 left-[calc(100%+0.5rem)]",
    },
  },
});
