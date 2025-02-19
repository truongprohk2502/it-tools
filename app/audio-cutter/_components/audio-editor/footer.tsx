"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import {
  Maximize2Icon,
  PauseIcon,
  PlayIcon,
  RotateCcwIcon,
} from "lucide-react";
import { useState } from "react";

interface Props {
  playing: boolean;
  onReload: () => void;
  onTogglePlaying: () => void;
  onChangeZoom: (scale: number) => void;
}

const Footer: React.FC<Props> = ({
  playing,
  onReload,
  onTogglePlaying,
  onChangeZoom,
}) => {
  const [value, setValue] = useState<number>(1);

  const handleChangeZoom = (values: number[]) => {
    setValue(values[0]);
  };

  const handleCommitZoom = (values: number[]) => {
    onChangeZoom(values[0]);
  };

  return (
    <div className="absolute inset-x-0 bottom-0 flex h-16 items-center justify-center gap-6">
      <RotateCcwIcon
        className="h-8 w-8 cursor-pointer text-neutral-200"
        onClick={onReload}
      />
      {playing ? (
        <PauseIcon
          className="h-8 w-8 cursor-pointer text-neutral-200"
          onClick={onTogglePlaying}
        />
      ) : (
        <PlayIcon
          className="h-8 w-8 cursor-pointer text-neutral-200"
          onClick={onTogglePlaying}
        />
      )}
      <Popover>
        <PopoverTrigger>
          <Maximize2Icon className="h-8 w-8 cursor-pointer text-white" />
        </PopoverTrigger>
        <PopoverContent side="right" sideOffset={30} className="w-60">
          <Slider
            min={1}
            max={100}
            value={[value]}
            onValueChange={handleChangeZoom}
            onValueCommit={handleCommitZoom}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Footer;
