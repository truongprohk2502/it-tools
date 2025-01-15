import { cva } from "class-variance-authority";
import tinycolor from "tinycolor2";

export const getRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const getTextColor = (hex: string) => {
  return tinycolor(hex).isDark() ? "white" : "black";
};

export const radiusVariants = cva("", {
  variants: {
    radius: {
      small: "rounded-md",
      large: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    radius: "full",
  },
});

export const wrapperVariants = cva(
  "overflow-hidden p-[1px] data-[bordered=true]:border-[3px] border-solid data-[disabled=true]:opacity-60",
  {
    variants: {
      size: {
        small: "w-8 h-8",
        medium: "w-10 h-10",
        large: "w-14 h-14",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export const textVariants = cva("font-bold !leading-[0]", {
  variants: {
    size: {
      small: "text-lg",
      medium: "text-xl",
      large: "text-3xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
