"use client";

import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "lucide-react";
import { useContext, useEffect, useRef } from "react";
import { AccordionContext } from "./accordion.context";
import type { AccordionItemProps } from "./accordion.types";

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  children,
}) => {
  const {
    variant,
    itemClassName,
    headerClassName,
    contentClassName,
    openingItems,
    toggleItem,
  } = useContext(AccordionContext);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const contentHeight = useRef<number>(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        contentHeight.current = entry.contentRect.height;
      });
    });
    observer.observe(contentRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  const opening = openingItems.includes(id);

  return (
    <div
      className={cn(
        "group",
        {
          "rounded-md border border-neutral-200 px-2 shadow-sm":
            variant === "splitted",
        },
        itemClassName,
      )}
    >
      <div
        className={cn("flex cursor-pointer py-2", headerClassName)}
        onClick={() => toggleItem(id)}
      >
        <div className="mr-2 flex flex-1 text-lg font-medium">{title}</div>
        <ChevronLeftIcon
          className={cn(
            "h-6 w-6 flex-shrink-0 transform text-neutral-700 duration-150",
            { "-rotate-90": opening },
          )}
        />
      </div>
      <div
        className={cn(
          "transform overflow-hidden py-0 opacity-0 transition-all duration-300",
          { "py-2 opacity-100": opening },
          contentClassName,
        )}
        style={{
          height: opening ? `${contentHeight.current + 16}px` : 0,
        }}
      >
        {children}
      </div>
      <div className="h-0">
        <div ref={contentRef} className="invisible py-2">
          {children}
        </div>
      </div>
      <div
        className={cn(
          "h-[1px] w-full bg-neutral-200 group-last-of-type:hidden",
          { hidden: variant === "splitted" },
        )}
      />
    </div>
  );
};

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
