"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { useMemo, useState } from "react";

type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

interface Props<T> {
  active: T | null;
  options: Array<{
    icon: LucideIcon;
    value: T;
  }>;
  defaultIcon: React.ReactNode;
  disabled: boolean;
  onToggle: (newItem: T, oldItem: T | null) => void;
}

const ToolSelect = <T,>({
  active,
  defaultIcon,
  options,
  disabled,
  onToggle,
}: Props<T>) => {
  const [open, setOpen] = useState<boolean>(false);

  const activeIcon = useMemo(() => {
    const icon = options.find((item) => item.value === active);
    return icon ? <icon.icon /> : defaultIcon;
  }, [active, defaultIcon, options]);

  const handleToggle = (value: T) => {
    setOpen(false);
    onToggle(value, active);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          disabled={disabled}
          className={active ? "bg-accent text-accent-foreground" : ""}
        >
          {activeIcon}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit rounded-lg p-1">
        <div className="grid grid-cols-1 gap-2 p-1">
          {options.map((item, index) => (
            <div
              key={index}
              className={cn(
                {
                  "bg-neutral-300 dark:bg-gray-700": active === item.value,
                },
                "flex cursor-pointer items-center rounded-lg px-2 py-1 hover:bg-gray-300 dark:hover:bg-gray-700",
              )}
              onClick={() => handleToggle(item.value)}
            >
              <item.icon width={16} height={16} />
              <span className="ml-1 text-sm">{`Heading ${item.value}`}</span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ToolSelect;
