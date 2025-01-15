"use client";

import { cn } from "@/lib/utils";
import { breadcrumbVariants, separatorVariants } from "./breadcrumb.helpers";
import type { BreadcrumbProps } from "./breadcrumb.types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "arrow",
  disabled,
  hasCollapse,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 2,
  size,
  className,
  itemClassName,
  labelClassName,
  separatorClassName,
  onClick,
}) => {
  const getItems = () => {
    if (!hasCollapse) return items;
    if (items.length < itemsBeforeCollapse + itemsAfterCollapse + 2)
      return items;
    return [
      ...items.slice(0, itemsBeforeCollapse),
      { label: null, value: null },
      ...items.slice(items.length - itemsAfterCollapse),
    ];
  };

  const renderItems = getItems();

  return (
    <div className={cn("flex flex-wrap items-center", className)}>
      {renderItems.map((item, index) => (
        <div
          key={item.value}
          className={cn("flex items-center", itemClassName)}
        >
          <p
            data-last={index === renderItems.length - 1}
            data-disabled={Boolean(disabled)}
            className={cn(breadcrumbVariants({ size }), labelClassName)}
            onClick={() => onClick && onClick(item.value)}
          >
            {item.label || "..."}
          </p>
          {index !== renderItems.length - 1 && (
            <p
              data-disabled={Boolean(disabled)}
              className={cn(separatorVariants({ size }), separatorClassName)}
            >
              {separator === "arrow" ? ">" : "/"}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
