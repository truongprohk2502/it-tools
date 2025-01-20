import { cva } from "class-variance-authority";

export const wrapperVariants = cva(
  "w-full relative flex items-center overflow-hidden rounded-full",
  {
    variants: {
      sliderSize: {
        small: "h-4",
        medium: "h-6",
        large: "h-7",
      },
    },
  },
);

export const barWrapperVariants = cva(
  "rounded-full w-full bg-neutral-200 dark:bg-neutral-500 relative overflow-hidden",
  {
    variants: {
      sliderSize: {
        small: "h-1",
        medium: "h-3",
        large: "h-7",
      },
    },
  },
);

export const colorVariants = cva("", {
  variants: {
    bgColor: {
      primary: "bg-blue-500 data-[disabled=true]:bg-blue-300",
      secondary: "bg-gray-500 data-[disabled=true]:bg-gray-300",
      success: "bg-green-500 data-[disabled=true]:bg-green-300",
      danger: "bg-red-500 data-[disabled=true]:bg-red-300",
      warning: "bg-yellow-500 data-[disabled=true]:bg-yellow-200",
      info: "bg-cyan-500 data-[disabled=true]:bg-cyan-200",
      light: "bg-gray-400 data-[disabled=true]:bg-gray-300",
      dark: "bg-black data-[disabled=true]:bg-gray-300",
    },
  },
});

export const thumbVariants = cva("absolute top-0", {
  variants: {
    sliderSize: {
      small: "w-4 h-4 p-0.5 rounded-full",
      medium: "w-6 h-6 p-0.5 rounded-full",
      large: "w-7 h-7 p-1 !bg-none",
    },
  },
});

export const getSliderInitValue = (
  value: number | undefined,
  defaultValue: number | undefined,
  min: number,
) => {
  if (value && !Number.isNaN(+value)) return value;
  if (defaultValue && !Number.isNaN(+defaultValue)) return defaultValue;
  return min;
};
