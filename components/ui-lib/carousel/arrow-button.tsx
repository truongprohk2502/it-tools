import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { forwardRef } from "react";

interface Props {
  type: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}

const ArrowButton = forwardRef<HTMLButtonElement, Props>(
  ({ type, disabled, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          "absolute top-1/2 z-[1] h-12 w-12 -translate-y-1/2 rounded-full shadow-md",
          "bg-white text-neutral-900 opacity-80 disabled:opacity-50",
          "flex items-center justify-center",
          type === "prev" ? "left-6" : "right-6",
        )}
        disabled={disabled}
      >
        {type === "prev" ? (
          <ChevronLeftIcon width={24} height={24} />
        ) : (
          <ChevronRightIcon width={24} height={24} />
        )}
      </button>
    );
  },
);

ArrowButton.displayName = "ArrowButton";

export default ArrowButton;
