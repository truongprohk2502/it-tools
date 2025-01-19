"use client";

import { cn } from "@/lib/utils";
import * as Portal from "@radix-ui/react-portal";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { DialogProps } from "./dialog.types";

const Dialog: React.FC<DialogProps> = ({
  open,
  title,
  hideHeaderClose,
  overlayCancel,
  disabledAnimation,
  hasFooterCancel,
  hasFooterConfirm,
  confirmTitle,
  className,
  children,
  onConfirm,
  onClose,
}) => {
  const [rendering, setRendering] = useState<boolean>(open);

  useEffect(() => {
    if (open) {
      setRendering(true);
    } else if (disabledAnimation) {
      setRendering(false);
    }
  }, [open, disabledAnimation]);

  const handleAnimationEnd = () => {
    if (disabledAnimation) return;
    if (!open) setRendering(false);
  };

  const handleClickOverlay = () => {
    if (!overlayCancel) return;
    onClose();
  };

  return (
    <Portal.Root>
      <div
        className={cn(
          "fixed inset-0 z-20 flex items-center justify-center",
          {
            invisible: !rendering,
          },
          className,
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-[rgba(0,0,0,0.5)] fill-mode-forwards",
            !disabledAnimation &&
              (open ? "animate-opacity-up" : "animate-opacity-down"),
          )}
          onClick={handleClickOverlay}
        />
        <div
          className={cn(
            "z-10 min-h-40 min-w-96 rounded-md bg-white shadow-md fill-mode-forwards",
            !disabledAnimation &&
              (open ? "animate-scale-up" : "animate-scale-down"),
          )}
          onAnimationEnd={handleAnimationEnd}
        >
          {(title || !hideHeaderClose) && (
            <div
              className={cn("flex items-center rounded-t-md px-6 py-4", {
                "justify-between": title && !hideHeaderClose,
                "justify-end": !title && !hideHeaderClose,
              })}
            >
              {title && <p className="text-xl font-semibold">{title}</p>}
              {!hideHeaderClose && (
                <XIcon
                  className="h-6 w-6 cursor-pointer text-neutral-700"
                  onClick={onClose}
                />
              )}
            </div>
          )}
          <div className="px-6 py-4">{children}</div>
          {(hasFooterConfirm || hasFooterCancel) && (
            <div className="flex justify-end gap-3 px-6 py-4">
              {hasFooterCancel && (
                <button
                  className="rounded-sm border-none bg-neutral-200 px-4 py-2 text-sm text-neutral-600 focus:outline-none"
                  onClick={onClose}
                >
                  Cancel
                </button>
              )}
              {hasFooterConfirm && (
                <button
                  className="rounded-sm border-none bg-neutral-800 px-4 py-2 text-sm text-white focus:outline-none"
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

export default Dialog;
