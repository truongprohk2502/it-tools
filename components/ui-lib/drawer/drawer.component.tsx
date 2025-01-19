"use client";

import { cn } from "@/lib/utils";
import * as Portal from "@radix-ui/react-portal";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { DrawerProps } from "./drawer.types";

const Drawer: React.FC<DrawerProps> = ({
  open,
  position = "right",
  hideHeaderClose,
  overlayCancel,
  title,
  hasFooterCancel,
  hasFooterConfirm,
  confirmTitle,
  className,
  wrapperClassName,
  children,
  onConfirm,
  onClose,
}) => {
  const [rendering, setRendering] = useState<boolean>(open);

  useEffect(() => {
    if (open) {
      setRendering(true);
    }
  }, [open]);

  const handleAnimationEnd = () => {
    if (!open) setRendering(false);
  };

  return (
    <Portal.Root>
      <div
        className={cn(
          "fixed inset-0 z-20",
          {
            invisible: !rendering,
          },
          className,
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-[rgba(0,0,0,0.5)] fill-mode-forwards",
            open ? "animate-opacity-up" : "animate-opacity-down",
          )}
          onClick={() => overlayCancel && onClose()}
        />
        <div
          className={cn(
            "absolute inset-y-0 z-10 flex w-96 flex-col overflow-auto bg-white shadow-md fill-mode-forwards dark:bg-neutral-800",
            {
              "right-0": position === "right",
              "left-0": position === "left",
            },
            {
              "animate-shift-right-in": open && position === "right",
              "animate-shift-right-out": !open && position === "right",
              "animate-shift-left-in": open && position === "left",
              "animate-shift-left-out": !open && position === "left",
            },
          )}
          onAnimationEnd={handleAnimationEnd}
        >
          {(title || !hideHeaderClose) && (
            <div className="flex h-12 items-center justify-between border-b border-neutral-200 bg-white px-2 dark:border-neutral-700 dark:bg-neutral-800">
              <h3 className="line-clamp-1 text-ellipsis font-semibold">
                {title}
              </h3>
              {!hideHeaderClose && (
                <XIcon
                  className="h-6 w-6 cursor-pointer text-neutral-700 dark:text-neutral-200"
                  onClick={onClose}
                />
              )}
            </div>
          )}
          <div className={cn("flex-1 overflow-auto", wrapperClassName)}>
            {children}
          </div>
          {(hasFooterConfirm || hasFooterCancel) && (
            <div className="sticky bottom-0 flex justify-end gap-3 border-t border-neutral-200 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-800">
              {hasFooterCancel && (
                <button
                  className="rounded-md border-none bg-neutral-200 px-4 py-2 text-sm text-neutral-600 focus:outline-none dark:bg-neutral-500 dark:text-neutral-200"
                  onClick={onClose}
                >
                  Cancel
                </button>
              )}
              {hasFooterConfirm && (
                <button
                  className="rounded-md border-none bg-neutral-800 px-4 py-2 text-sm text-white focus:outline-none dark:bg-neutral-200 dark:text-neutral-900"
                  onClick={onConfirm}
                >
                  {confirmTitle || "Confirm"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Portal.Root>
  );
};

export default Drawer;
