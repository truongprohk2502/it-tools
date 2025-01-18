import { cva } from "class-variance-authority";
import type { Size } from "./countdown.types";

export const wrapperVariant = cva(
  "flex text-neutral-600 dark:text-neutral-200",
  {
    variants: {
      variant: {
        colon_label: "items-center",
        line_label: "items-end",
        abbreviated_label: "items-end",
        bottom_label: "flex-col justify-center items-center",
        bottom_fill_label:
          "flex-col justify-center items-center bg-neutral-300 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300",
      },
      size: {
        small: "text-2xl",
        medium: "text-4xl",
        large: "text-6xl",
      },
    },
    compoundVariants: [
      {
        variant: "bottom_fill_label",
        size: "small",
        className: "rounded-xl px-1 pt-1.5 pb-2.5",
      },
      {
        variant: "bottom_fill_label",
        size: "medium",
        className: "rounded-2xl px-2 py-3",
      },
      {
        variant: "bottom_fill_label",
        size: "large",
        className: "rounded-3xl px-2 py-4",
      },
    ],
  },
);

export const labelVariant = cva("", {
  variants: {
    variant: {
      colon_label: "text-neutral-600 dark:text-neutral-200",
      line_label: "text-neutral-500 dark:text-neutral-400",
      abbreviated_label: "text-neutral-600 dark:text-neutral-200",
      bottom_label: "text-neutral-500 dark:text-neutral-400",
      bottom_fill_label: "text-neutral-800 dark:text-neutral-200",
    },
    size: {
      small: "",
      medium: "",
      large: "",
    },
  },
  compoundVariants: [
    {
      variant: "colon_label",
      size: "large",
      className: "text-5xl mb-2 pl-3 pr-2",
    },
    {
      variant: "colon_label",
      size: "medium",
      className: "text-3xl mb-1 pl-3 pr-2",
    },
    {
      variant: "colon_label",
      size: "small",
      className: "text-xl mb-0.5",
    },
    {
      variant: "line_label",
      size: "large",
      className: "text-3xl pb-2 mr-2 px-2",
    },
    {
      variant: "line_label",
      size: "medium",
      className: "text-lg pb-[1px] mr-1",
    },
    {
      variant: "line_label",
      size: "small",
      className: "text-base pb-[1px]",
    },
    {
      variant: "abbreviated_label",
      size: "large",
      className: "text-5xl mb-1.5 px-1",
    },
    {
      variant: "abbreviated_label",
      size: "medium",
      className: "text-3xl mb-0.5 px-1",
    },
    {
      variant: "abbreviated_label",
      size: "small",
      className: "text-xl px-1 mb-0.5",
    },
    {
      variant: "bottom_label",
      size: "large",
      className: "text-2xl",
    },
    {
      variant: "bottom_label",
      size: "medium",
      className: "text-base",
    },
    {
      variant: "bottom_label",
      size: "small",
      className: "text-sm",
    },
    {
      variant: "bottom_fill_label",
      size: "large",
      className: "text-2xl",
    },
    {
      variant: "bottom_fill_label",
      size: "medium",
      className: "text-sm",
    },
    {
      variant: "bottom_fill_label",
      size: "small",
      className: "text-xs",
    },
  ],
});

export const getTextWidth = (size: Size) => {
  switch (size) {
    case "small":
      return 1.5;
    case "medium":
      return 2.25;
    case "large":
      return 3.75;
    default:
      return 0;
  }
};

export const convertNumberToFullWidth = (num: number) => {
  const fullWidthString = "０１２３４５６７８９";
  const charList: string[] = [];
  for (const char of num.toString()) {
    const charNum = Number(char);
    if (Number.isInteger(charNum)) {
      charList.push(fullWidthString[charNum]);
    } else {
      charList.push(char);
    }
  }
  return charList.join("");
};
