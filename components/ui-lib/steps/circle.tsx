import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { CheckIcon } from "lucide-react";

const variants = cva(
  "flex justify-center items-center w-12 h-12 rounded-full text-lg font-bold",
  {
    variants: {
      color: {
        primary: [
          "data-[completed=true]:bg-blue-500 data-[completed=true]:text-white",
          "data-[current=true]:border-blue-500 data-[current=true]:bg-blue-200 data-[current=true]:text-blue-700",
        ],
        secondary: [
          "data-[completed=true]:bg-neutral-500 data-[completed=true]:text-white",
          "data-[current=true]:border-neutral-500 data-[current=true]:bg-neutral-200 data-[current=true]:text-neutral-700",
        ],
        success: [
          "data-[completed=true]:bg-green-500 data-[completed=true]:text-white",
          "data-[current=true]:border-green-500 data-[current=true]:bg-green-200 data-[current=true]:text-green-700",
        ],
        danger: [
          "data-[completed=true]:bg-red-500 data-[completed=true]:text-white",
          "data-[current=true]:border-red-500 data-[current=true]:bg-red-200 data-[current=true]:text-red-700",
        ],
        warning: [
          "data-[completed=true]:bg-yellow-500 data-[completed=true]:text-white",
          "data-[current=true]:border-yellow-500 data-[current=true]:bg-yellow-200 data-[current=true]:text-yellow-700",
        ],
        info: [
          "data-[completed=true]:bg-cyan-500 data-[completed=true]:text-white",
          "data-[current=true]:border-cyan-500 data-[current=true]:bg-cyan-200 data-[current=true]:text-cyan-700",
        ],
        light: [
          "data-[completed=true]:bg-neutral-300 data-[completed=true]:text-white",
          "data-[current=true]:border-neutral-300 data-[current=true]:bg-neutral-100 data-[current=true]:text-neutral-400",
        ],
        dark: [
          "data-[completed=true]:bg-neutral-900 data-[completed=true]:text-white",
          "data-[current=true]:border-neutral-900 data-[current=true]:bg-neutral-200 data-[current=true]:text-neutral-700",
        ],
      },
    },
  },
);

export type Color = VariantProps<typeof variants>["color"];

interface Props {
  index: number;
  icon?: React.ReactNode;
  variant: "upcoming" | "current" | "completed";
  color: Color;
}

const Circle: React.FC<Props> = ({ index, icon, variant, color }) => {
  return (
    <div
      data-completed={variant === "completed"}
      data-current={variant === "current"}
      className={cn(variants({ color }), {
        "border-2": variant !== "completed",
      })}
    >
      {variant === "completed" ? (
        <CheckIcon width={16} height={16} />
      ) : (
        icon || <span>{index + 1}</span>
      )}
    </div>
  );
};

export default Circle;
