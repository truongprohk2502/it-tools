"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MicIcon, MicOffIcon, Volume2Icon, VolumeXIcon } from "lucide-react";

interface Props {
  type: "system-audio" | "microphone";
  isOn: boolean;
  tooltip: string;
  onToggle: () => void;
}

const SettingButton: React.FC<Props> = ({ type, isOn, tooltip, onToggle }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-20"
            onClick={onToggle}
          >
            {type === "microphone" &&
              (isOn ? (
                <MicIcon className="h-6 w-6 text-white" />
              ) : (
                <MicOffIcon className="h-6 w-6 text-white" />
              ))}
            {type === "system-audio" &&
              (isOn ? (
                <Volume2Icon className="h-6 w-6 text-white" />
              ) : (
                <VolumeXIcon className="h-6 w-6 text-white" />
              ))}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SettingButton;
