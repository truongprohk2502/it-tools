"use client";

import { cn } from "@/lib/utils";
import { copyToClipboard } from "@/utils/copy-to-clipboard";
import { CopyIcon } from "lucide-react";
import { getContrastTextColor } from "../helpers";

interface Props {
  percentage: number;
  hex: string;
}

const ColorVariantItem: React.FC<Props> = ({ percentage, hex }) => {
  return (
    <div className="relative flex-1 pb-4">
      <div className="mx-auto w-fit rounded-full bg-neutral-900 px-3 pb-0.5 pt-1 text-xs font-semibold text-white">
        {percentage + "%"}
      </div>
      <div
        className={cn(
          "group peer my-2 flex h-12 w-full cursor-pointer items-center justify-center",
          {
            "rounded-l-lg": percentage === 0,
            "rounded-r-lg": percentage === 100,
          },
        )}
        style={{ backgroundColor: hex, color: getContrastTextColor(hex) }}
        onClick={() => copyToClipboard(hex)}
      >
        <CopyIcon
          width={16}
          height={16}
          className="invisible group-hover:visible"
        />
      </div>
      <p className="invisible absolute bottom-0 left-0 text-sm uppercase peer-hover:visible">
        {hex}
      </p>
    </div>
  );
};

export default ColorVariantItem;
