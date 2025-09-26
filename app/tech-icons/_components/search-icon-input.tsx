"use client";

import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { XIcon } from "lucide-react";
import { useRef } from "react";
import { TECH_ICONS } from "../constants";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchIconInput: React.FC<Props> = ({ value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div className="sticky top-14 bg-main-light pt-4 dark:bg-main-dark">
      <div className="relative h-12 rounded-lg">
        <input
          ref={inputRef}
          className={cn(
            "absolute inset-0 rounded-lg bg-gray-200 pl-12 pr-2 outline-none dark:bg-gray-900",
            "border border-transparent focus:border focus:border-red-500",
            { "pr-12": value.length > 0 },
          )}
          placeholder={`Search ${TECH_ICONS.length} icons ...`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div
          className="absolute inset-y-0 left-0 flex w-12 items-center justify-center"
          onClick={handleFocus}
        >
          <MagnifyingGlassIcon width={20} height={20} />
        </div>
        {value.length > 0 && (
          <div
            className="absolute inset-y-0 right-0 flex w-12 cursor-pointer items-center justify-center"
            onClick={handleClear}
          >
            <XIcon width={20} height={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchIconInput;
