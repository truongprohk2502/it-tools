export const dropdownUseClickAwayCode = `// use-click-away.ts
import { RefObject, useEffect } from "react";

const defaultEvents = ["mousedown", "touchstart"];
type DefaultEventType = "mousedown" | "touchstart";

const useClickAway = (
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const el = ref.current!;
      if (!el) return;
      if (el.contains(event.target as HTMLElement)) return;
      onClickAway(event);
    };

    for (const eventName of defaultEvents) {
      document.addEventListener(eventName as DefaultEventType, handler);
    }

    return () => {
      for (const eventName of defaultEvents) {
        document.removeEventListener(eventName as DefaultEventType, handler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useClickAway;
`;

export const dropdownComponentCode = `// dropdown.component.tsx
import clsx from "clsx";
import useClickAway from "@/hooks/use-click-away";
import { ChevronDownIcon } from "lucide-react";
import { useRef, useState } from "react";

export enum PositionType {
  Top,
  Bottom,
}

export interface DropdownProps {
  value: string | null;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
}

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
      className={clsx("relative h-[2.375rem] w-[12rem]", className)}
    >
      <div
        className={clsx(
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
          className={clsx(
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
          className={clsx(
            "h-4 w-4",
            disabled
              ? "text-neutral-500 dark:text-neutral-700"
              : "text-neutral-700 dark:text-neutral-400",
          )}
        />
      </div>
      <div
        className={clsx(
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
`;
