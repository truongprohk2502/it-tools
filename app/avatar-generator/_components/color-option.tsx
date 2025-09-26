"use client";

import { CheckIcon } from "lucide-react";

interface Props {
  color: string;
  checked: boolean;
  onClick: () => void;
}

const ColorOption: React.FC<Props> = ({ color, checked, onClick }) => {
  return (
    <div className="relative h-8 w-8 cursor-pointer" onClick={onClick}>
      {checked && (
        <>
          <div
            className="absolute inset-0 rounded-full opacity-60"
            style={{ background: color }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-7 w-7 rounded-full bg-main-light dark:bg-main-dark" />
          </div>
        </>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-6 w-6 rounded-full" style={{ background: color }} />
      </div>
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <CheckIcon className="h-4 w-4 text-black" />
        </div>
      )}
    </div>
  );
};

export default ColorOption;
