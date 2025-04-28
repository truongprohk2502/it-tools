"use client";

import { cn } from "@/lib/utils";

interface Props {
  label: string;
  color: string;
  onClick: () => void;
}

const CalculatorButton: React.FC<Props> = ({ label, color, onClick }) => {
  return (
    <button
      className={cn(
        "aspect-square rounded-2xl bg-red-500 text-2xl font-bold shadow-lg",
        {
          "bg-gray-300 text-gray-600 active:bg-gray-400": color === "gray",
          "bg-orange-400 text-white active:bg-orange-500": color === "orange",
          "bg-green-500 text-white active:bg-green-600": color === "green",
          "bg-yellow-200 text-yellow-600 active:bg-yellow-300":
            color === "yellow",
        },
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CalculatorButton;
