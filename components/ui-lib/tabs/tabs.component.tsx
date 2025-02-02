"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import type { Tab, TabsProps } from "./tabs.types";

const Tabs: React.FC<TabsProps> = ({
  tabs,
  variant = "solid",
  size = "medium",
  radius = "medium",
  disabled,
  selectedIndex,
  className,
  onChange,
}) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  const tabSizes = useRef<Array<{ width: number; left: number }>>([]);

  const setTabPosition = (index: number) => {
    if (!tabRef.current) return;
    const size = tabSizes.current[index];
    if (!size) return;
    animationRef.current!.style.width = `${size.width}px`;
    animationRef.current!.style.left = `${size.left}px`;
  };

  useEffect(() => {
    const getTabSizes = () => {
      if (!tabRef.current) return;
      tabSizes.current = Array.from(tabRef.current.children).map((tab) => ({
        width: tab.getBoundingClientRect().width,
        left: 0,
      }));
      if (tabSizes.current.length === 0) return;
      for (let i = 1; i < tabSizes.current.length; i++) {
        tabSizes.current[i].left =
          tabSizes.current[i - 1].left + tabSizes.current[i - 1].width;
      }
    };

    getTabSizes();
    setTabPosition(selectedIndex);

    const observer = new ResizeObserver(getTabSizes);
    observer.observe(tabRef.current!);

    return () => {
      observer.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, size, radius]);

  const handleChange = (tab: Tab, index: number) => {
    if (disabled || tab.disabled) return;
    setTabPosition(index);
    onChange(index);
  };

  return (
    <div
      className={cn(
        "relative z-10 flex overflow-hidden py-1",
        {
          "rounded-md": radius === "medium",
          "rounded-full": radius === "full",
        },
        {
          "border border-neutral-400": variant === "bordered",
          "opacity-40": disabled,
        },
        className,
      )}
    >
      {variant === "solid" && (
        <div className="absolute inset-x-0 inset-y-0 -z-10 bg-neutral-200 dark:bg-neutral-700" />
      )}
      <div
        ref={animationRef}
        className="absolute inset-y-0 -z-10 p-1 transition-all duration-150"
      >
        {variant === "underlined" ? (
          <div className="h-full w-full border-b-2 border-neutral-500" />
        ) : (
          <div
            className={cn(
              "h-full w-full border border-neutral-200 bg-white shadow-sm dark:border-neutral-500 dark:bg-neutral-500",
              {
                "rounded-md": radius === "medium",
                "rounded-full": radius === "full",
              },
            )}
          />
        )}
      </div>
      <div ref={tabRef} className="flex">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cn(
              "select-none bg-transparent py-1.5",
              {
                "text-xs": size === "small",
                "text-sm": size === "medium",
                "text-lg": size === "large",
              },
              variant === "underlined" ? "px-2.5" : "px-4",
              tab.disabled
                ? "cursor-not-allowed text-neutral-300 dark:text-neutral-500"
                : "cursor-pointer text-neutral-600 dark:text-neutral-200",
            )}
            onClick={() => handleChange(tab, index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
