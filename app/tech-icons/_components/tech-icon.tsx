"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { TechIconType } from "../types";

interface Props {
  icon: TechIconType;
  display: boolean;
  onClick: (icon: TechIconType) => void;
}

const TechIcon: React.FC<Props> = ({ icon, display, onClick }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            id={icon.id}
            className={cn("h-14 w-14 cursor-pointer", {
              hidden: !display,
            })}
            onClick={() => onClick(icon)}
          >
            <icon.svg className="h-full w-full" viewBox="0 0 256 256" />
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="bg-neutral-700 text-xs font-medium text-white"
        >
          {icon.name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechIcon;
