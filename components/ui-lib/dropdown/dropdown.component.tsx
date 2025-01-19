"use client";

import useClickAway from "@/hooks/use-click-away";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { useRef, useState } from "react";
import { type DropdownProps, PositionType } from "./dropdown.types";

const Dropdown: React.FC<DropdownProps> = ({
  value,
  placeholder,
  className,
  disabled,
  options,
  onChange,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [opening, setOpening] = useState<boolean>(false);
  const [position, setPosition] = useState<PositionType>(PositionType.Top);

  useClickAway(dropdownRef, () => setOpening(false));

  const handleSelect = (value: string) => {
    setOpening(false);
    onChange(value);
  };

  const handleOpen = () => {
    const { bottom } = dropdownRef.current!.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - bottom;
    setPosition(
      distanceToBottom > 230 ? PositionType.Bottom : PositionType.Top,
    );
    setOpening(true);
  };

  const selectedOption = options.find((item) => item.value === value);

  return (
    <div
      ref={dropdownRef}
      className={cn("relative h-[2.375rem] w-[12rem]", className)}
    >
      <div
        className={cn(
          "flex h-full items-center rounded-md border px-4",
          {
            "cursor-not-allowed border-neutral-300 dark:border-neutral-600":
              disabled,
            "cursor-pointer border-neutral-400 hover:border-cyan-500":
              !disabled,
          },
          { "border-cyan-500": opening },
        )}
        onClick={() => !disabled && handleOpen()}
      >
        <p
          className={cn(
            "w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap pr-2 text-sm",
            {
              "text-neutral-400": disabled,
              "font-medium text-neutral-700 dark:text-neutral-300":
                !disabled && selectedOption,
              "text-neutral-400 dark:text-neutral-500":
                !disabled && !selectedOption,
            },
          )}
        >
          {selectedOption?.label || placeholder}
        </p>
        <ChevronDownIcon
          className={cn(
            "h-4 w-4",
            disabled
              ? "text-neutral-500 dark:text-neutral-700"
              : "text-neutral-700 dark:text-neutral-400",
          )}
        />
      </div>
      <div
        className={cn(
          "absolute left-0 z-10 max-h-[13rem] min-w-full max-w-[calc(100%+2rem)] overflow-auto rounded-md border border-neutral-200 bg-white py-2 dark:border-neutral-600 dark:bg-neutral-700",
          {
            "bottom-[calc(100%+0.5rem)]": position === PositionType.Top,
            "top-[calc(100%+0.5rem)]": position === PositionType.Bottom,
          },
          { hidden: !opening },
        )}
      >
        {options.map((item) => (
          <p
            key={item.value}
            className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap px-3 py-1 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-500"
            onClick={() => handleSelect(item.value)}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
