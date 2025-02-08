"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { PauseIcon, PlayIcon, RotateCcwIcon, Volume2Icon } from "lucide-react";
import { useState } from "react";

interface Props {
  isPlaying: boolean;
  onReset: () => void;
  onTogglePlaying: () => void;
  onVolumeChange: (volume: number) => void;
}

const Footer: React.FC<Props> = ({
  isPlaying,
  onReset,
  onTogglePlaying,
  onVolumeChange,
}) => {
  const [volume, setVolume] = useState<number>(100);

  const changeVolume = (value: number[]) => {
    setVolume(value[0]);
    onVolumeChange(value[0]);
  };

  return (
    <div className="absolute inset-x-0 bottom-0 flex h-16 items-center justify-center gap-8 px-6">
      <RotateCcwIcon
        className="h-8 w-8 cursor-pointer text-white"
        onClick={onReset}
      />
      {isPlaying ? (
        <PauseIcon
          className="h-8 w-8 cursor-pointer text-white"
          onClick={onTogglePlaying}
        />
      ) : (
        <PlayIcon
          className="h-8 w-8 cursor-pointer text-white"
          onClick={onTogglePlaying}
        />
      )}
      <Popover>
        <PopoverTrigger>
          <Volume2Icon className="h-8 w-8 cursor-pointer text-white" />
        </PopoverTrigger>
        <PopoverContent side="right" sideOffset={30} className="w-60">
          <Slider defaultValue={[volume]} onValueChange={changeVolume} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Footer;
