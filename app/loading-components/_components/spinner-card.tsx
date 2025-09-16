"use client";

import { cn } from "@/lib/utils";

interface Props {
  name: string;
  component: React.FC;
  code: string;
  onClick: (source: string) => void;
}

const SpinnerCard: React.FC<Props> = ({
  name,
  component: Component,
  code,
  onClick,
}) => {
  const handleShowCode = () => {
    onClick(code);
  };

  return (
    <div
      className={cn(
        "group relative flex aspect-square w-48 cursor-pointer items-center justify-center rounded-md border",
        "border-neutral-300 bg-gray-200 dark:border-neutral-700 dark:bg-gray-800",
      )}
      onClick={handleShowCode}
    >
      <Component />
      <div className="absolute bottom-1 left-0 right-0 hidden animate-opacity-up items-center justify-center rounded-md group-hover:flex">
        <div className="w-fit rounded-md px-2 text-lg font-medium dark:bg-blue-800">
          {name}
        </div>
      </div>
    </div>
  );
};

export default SpinnerCard;
