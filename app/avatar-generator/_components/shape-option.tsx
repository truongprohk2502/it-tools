"use client";

import { cn } from "@/lib/utils";

interface Props {
  radius: string;
  selected: boolean;
  onClick: () => void;
}

const ShapeOption: React.FC<Props> = ({ radius, selected, onClick }) => {
  return (
    <div
      className={cn(
        "h-6 w-6 cursor-pointer",
        selected ? "bg-primary" : "bg-neutral-300 dark:bg-neutral-600",
      )}
      style={{ borderRadius: radius }}
      onClick={onClick}
    />
  );
};

export default ShapeOption;
