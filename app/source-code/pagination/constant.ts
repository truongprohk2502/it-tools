export const paginationComponentCode = `// pagination.component.tsx
import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon, EllipsisIcon } from "lucide-react";
import { useMemo } from "react";

export interface PaginationProps {
  total: number;
  current: number;
  siblings?: number;
  showControls?: boolean;
  variant?: "solid" | "separated" | "outline";
  className?: string;
  cellClassName?: string;
  onChange: (val: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  current,
  siblings = 2,
  variant = "solid",
  showControls,
  className,
  cellClassName,
  onChange,
}) => {
  const cells = useMemo(() => {
    console.log(siblings, showControls, current, total);
    console.log(typeof siblings);

    const maxSequentialPages = siblings * 2 + 1;

    const paginationList: Array<string | number> = [];

    if (showControls) paginationList.push("<");

    if (total < maxSequentialPages) {
      Array(total).forEach((_, index) => paginationList.push(index + 1));
    } else {
      let start = Math.max(1, current - siblings);
      let end = Math.min(total, current + siblings);

      if (current <= siblings + 1) end = maxSequentialPages;

      if (current >= total - siblings) start = total - maxSequentialPages + 1;

      if (start > 1) paginationList.push(1);
      if (start > 2) paginationList.push("...");

      for (let i = start; i <= end; i++) paginationList.push(i);

      if (end < total - 1) paginationList.push("...");
      if (end < total) paginationList.push(total);
    }

    if (showControls) paginationList.push(">");
    console.log(paginationList);

    return paginationList;
  }, [siblings, showControls, current, total]);

  const onPrev = () => {
    if (current <= 1) return;
    onChange(current - 1);
  };

  const onNext = () => {
    if (current >= total) return;
    onChange(current + 1);
  };

  const handleClick = (item: string | number) => {
    if (typeof item === "number") {
      onChange(item);
    } else if (item === "<") {
      onPrev();
    } else if (item === ">") {
      onNext();
    }
  };

  return (
    <div
      className={clsx(
        "flex h-10 w-fit",
        {
          "rounded-lg bg-neutral-100 dark:bg-neutral-700": variant === "solid",
          "gap-2": variant === "separated",
        },
        className,
      )}
    >
      {cells.map((item, index) => (
        <div
          key={index}
          className={clsx(
            "flex min-w-10 items-center justify-center px-1",
            { "cursor-pointer": item !== "..." },
            {
              "border-l-[1px] border-neutral-200 dark:border-neutral-600":
                variant === "solid" &&
                index !== 0 &&
                item !== current &&
                item !== current + 1,
            },
            {
              "rounded-lg bg-blue-500 text-white": item === current,
              "rounded-lg bg-neutral-100 text-black dark:bg-neutral-700 dark:text-neutral-100":
                variant === "separated" && item !== current,
            },
            cellClassName,
          )}
          onClick={() => handleClick(item)}
        >
          {typeof item === "number" ? (
            <span className="select-none font-medium">{item}</span>
          ) : item === "<" ? (
            <ChevronLeftIcon
              className={clsx("h-4 w-4", {
                "text-neutral-300 dark:text-neutral-600": current <= 1,
              })}
            />
          ) : item === ">" ? (
            <ChevronRightIcon
              className={clsx("h-4 w-4", {
                "text-neutral-300 dark:text-neutral-600": current >= total,
              })}
            />
          ) : (
            <EllipsisIcon className="h-3 w-3" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
`;
