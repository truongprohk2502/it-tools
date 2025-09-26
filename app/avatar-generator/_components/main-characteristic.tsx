"use client";

import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { SOLID_COLORS } from "../constants";
import ColorOption from "./color-option";

interface Props {
  label: string;
  showMarginTop?: boolean;
  showColor?: boolean;
  colors?: string[];
  selectedColor?: string;
  onColorSelect?: (color: string) => void;
  children: React.ReactNode;
}

const MainCharacteristic: React.FC<Props> = ({
  label,
  showMarginTop = true,
  showColor = false,
  colors = SOLID_COLORS,
  selectedColor,
  onColorSelect,
  children,
}) => {
  const [expandColor, setExpandColor] = useState<boolean>(false);

  return (
    <div className={cn({ "mt-8": showMarginTop })}>
      <h3 className="text-lg font-medium">{label}</h3>
      {showColor && (
        <div className="mt-2">
          <div
            className="flex cursor-pointer items-center dark:text-gray-400"
            onClick={() => setExpandColor(!expandColor)}
          >
            <span className="text-sm">colors</span>
            <ChevronRightIcon
              className={cn("ml-1 h-5 w-5 transform", {
                "rotate-90": expandColor,
              })}
            />
          </div>
          <div
            className={cn("mt-2 flex flex-wrap gap-3", {
              hidden: !expandColor,
            })}
          >
            {colors.map((color) => (
              <ColorOption
                key={color}
                color={color}
                checked={selectedColor === color}
                onClick={() => onColorSelect?.(color)}
              />
            ))}
          </div>
        </div>
      )}
      <div className={cn("flex flex-wrap gap-3", showColor ? "mt-6" : "mt-2")}>
        {children}
      </div>
    </div>
  );
};

export default MainCharacteristic;
