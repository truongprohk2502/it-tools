"use client";

import { Button } from "@/components/ui/button";
import { formatTime } from "@/lib/time";
import { type Ref, useImperativeHandle, useRef } from "react";

export interface HeaderRef {
  setDuration: (duration: number) => void;
  setTimer: (seek: number) => void;
}

interface Props {
  ref: Ref<HeaderRef>;
  onDownload: () => void;
  onRemove: () => void;
}

const Header: React.FC<Props> = ({ ref, onRemove, onDownload }) => {
  const durationRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      setDuration(duration: number) {
        if (!durationRef.current) return;
        durationRef.current.innerHTML = formatTime(duration);
      },
      setTimer(seek: number) {
        if (!timerRef.current) return;
        timerRef.current.innerHTML = formatTime(Math.floor(seek));
      },
    };
  }, []);

  return (
    <div className="absolute inset-x-0 top-0 flex h-16 items-center justify-between px-6">
      <span
        ref={timerRef}
        className="text-2xl font-semibold text-neutral-100"
      />
      <span
        ref={durationRef}
        className="text-2xl font-semibold text-neutral-300"
      />
      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-transparent">
        <Button size="sm" onClick={onDownload}>
          Download
        </Button>
        <Button size="sm" variant="destructive" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Header;
