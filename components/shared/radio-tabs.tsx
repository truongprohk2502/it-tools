"use client";

import { cn } from "@/lib/utils";

interface Props {
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (val: string) => void;
}

const RadioTabs: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <div className="flex w-fit rounded-md bg-neutral-400 text-white">
      {options.map((item) => (
        <div
          key={item.value}
          className={cn(
            "cursor-pointer rounded-md border px-3 py-1 text-sm",
            item.value === value
              ? "border-neutral-400 bg-primary"
              : "border-transparent bg-transparent",
          )}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default RadioTabs;
