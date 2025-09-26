"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { SvgType } from "../types";

interface Props {
  label: string;
  svg: React.FC<SvgType>;
  selected: boolean;
  onClick: () => void;
}

const CharacteristicOption: React.FC<Props> = ({
  label,
  svg: SvgComponent,
  selected,
  onClick,
}) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "flex h-20 w-16 cursor-pointer items-center justify-center rounded-lg",
              {
                "bg-neutral-400 dark:bg-gray-600": selected,
              },
            )}
            onClick={onClick}
          >
            <SvgComponent isSvg className="h-12 w-8" />
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="bg-neutral-700 text-xs font-medium text-white"
        >
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CharacteristicOption;
