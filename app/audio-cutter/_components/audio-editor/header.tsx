"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DownloadIcon, XIcon } from "lucide-react";

interface Props {
  fileName: string;
  onDownload: () => void;
  onRemove: () => void;
}

const Header: React.FC<Props> = ({ fileName, onDownload, onRemove }) => {
  return (
    <div className="absolute inset-x-0 top-0 flex h-16 items-center px-4">
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DownloadIcon
              className="h-6 w-6 cursor-pointer text-neutral-200"
              onClick={onDownload}
            />
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-neutral-700 text-xs font-medium text-white"
          >
            Download
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <p className="line-clamp-1 flex-auto text-center text-neutral-300">
        {fileName}
      </p>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <XIcon
              className="h-6 w-6 cursor-pointer text-neutral-200"
              onClick={onRemove}
            />
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-neutral-700 text-xs font-medium text-white"
          >
            Remove
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Header;
