"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { CheckIcon, MinusIcon } from "lucide-react";

const colorVariants = cva("", {
  variants: {
    color: {
      primary: "border-blue-500 bg-blue-500 text-white",
      secondary: "border-gray-300 bg-gray-300 text-neutral-700",
      success: "border-green-500 bg-green-500 text-white",
      danger: "border-red-500 bg-red-500 text-white",
      warning: "border-yellow-500 bg-yellow-500 text-white",
      info: "border-cyan-500 bg-cyan-500 text-white",
      light: "border-background bg-background text-foreground",
      dark: "border-neutral-900 bg-neutral-900 text-white",
    },
  },
});

type ColorVariant = VariantProps<typeof colorVariants>;

interface Props {
  color: ColorVariant["color"];
  type: "checked" | "indeterminate" | "unchecked";
  disabled?: boolean;
  onClick?: () => void;
}

const Checkbox: React.FC<Props> = ({ color, type, disabled, onClick }) => {
  return (
    <div
      className={cn(
        "mx-2 flex h-5 w-5 select-none items-center justify-center rounded-md border border-neutral-300",
        type !== "unchecked" && colorVariants({ color }),
        { "cursor-pointer": !disabled },
      )}
      onClick={!disabled ? onClick : undefined}
    >
      {type === "checked" ? (
        <CheckIcon className="h-4 w-4" />
      ) : type === "indeterminate" ? (
        <MinusIcon className="h-4 w-4" />
      ) : null}
    </div>
  );
};

export default Checkbox;
