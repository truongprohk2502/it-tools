import { cva } from "class-variance-authority";

export const STAR_ICON_URI =
  "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMTkyJyBoZWlnaHQ9JzE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTk2IDE1My4wNDQtNTguNzc5IDI2LjI0MyA3LjAyLTYzLjUxM0wuODk0IDY4LjQ4MWw2My4xMTctMTMuMDFMOTYgMGwzMS45ODkgNTUuNDcyIDYzLjExNyAxMy4wMS00My4zNDcgNDcuMjkyIDcuMDIgNjMuNTEzeicgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+";

export const ratingVariants = cva(
  "appearance-none transition-all duration-150 disabled:active:translate-y-0 active:-translate-y-0.5 bg-neutral-300 dark:bg-neutral-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      color: {
        primary: "data-[checked=true]:!bg-blue-500",
        secondary: "data-[checked=true]:!bg-gray-500",
        success: "data-[checked=true]:!bg-green-500",
        danger: "data-[checked=true]:!bg-red-500",
        warning: "data-[checked=true]:!bg-yellow-500",
        info: "data-[checked=true]:!bg-cyan-500",
        light: "data-[checked=true]:!bg-neutral-400",
        dark: "data-[checked=true]:!bg-black",
      },
      size: {
        small:
          "data-[half=true]:w-3 data-[half=false]:w-6 h-6 data-[left=true]:ml-2",
        medium:
          "data-[half=true]:w-5 data-[half=false]:w-10 h-10 data-[left=true]:ml-2",
        large:
          "data-[half=true]:w-8 data-[half=false]:w-16 h-16 data-[left=true]:ml-4",
      },
    },
  },
);
