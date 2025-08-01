"use client";

import { cn } from "@/lib/utils";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { Size } from "../constants";

interface Props {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  size: Size;
  active: Size;
  onClick: React.Dispatch<React.SetStateAction<Size>>;
}

const SizeItem: React.FC<Props> = ({ icon: Icon, active, size, onClick }) => {
  return (
    <div
      className={cn(
        "relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full",
        {
          "rounded-full bg-neutral-900 text-white dark:bg-neutral-200 dark:text-neutral-600":
            active === size,
        },
      )}
    >
      <div
        className={cn({
          "h-4 w-4": size === Size.Small,
          "h-5 w-5": size === Size.Medium,
          "h-6 w-6": size === Size.Large,
        })}
        onClick={() => onClick(size)}
      >
        <Icon width="100%" height="100%" />
      </div>
    </div>
  );
};

export default SizeItem;
