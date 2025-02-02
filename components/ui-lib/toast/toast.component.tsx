"use client";

import { cn } from "@/lib/utils";
import * as Portal from "@radix-ui/react-portal";
import {
  CircleAlert,
  CircleCheckBig,
  CircleX,
  TriangleAlert,
} from "lucide-react";
import { useCallback } from "react";
import { toastVariants } from "./toast.helpers";
import type { ToastProps } from "./toast.types";
import { useToast } from "./use-toast";

const Toast: React.FC<ToastProps> = ({
  position,
  className,
  textClassName,
}) => {
  const { data, clearToast } = useToast();

  const refCallback = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;

    setTimeout(() => {
      el.classList.add("animate-toast-out");
    }, 3000);
  }, []);

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "toast-out") clearToast();
  };

  return (
    <Portal.Root>
      {data && (
        <div
          key={data.id}
          ref={refCallback}
          className={cn(
            toastVariants({ position }),
            {
              "bg-green-600 text-white": data.type === "success",
              "bg-red-600 text-white": data.type === "error",
              "bg-yellow-600 text-white": data.type === "warning",
              "bg-cyan-600 text-white": data.type === "info",
            },
            className,
          )}
          onAnimationEnd={handleAnimationEnd}
        >
          {data.type === "success" ? (
            <CircleCheckBig className="h-6 w-6" />
          ) : data.type === "error" ? (
            <CircleX className="h-6 w-6" />
          ) : data.type === "warning" ? (
            <TriangleAlert className="h-6 w-6" />
          ) : data.type === "info" ? (
            <CircleAlert className="h-6 w-6" />
          ) : null}
          <p className={cn("ml-4 mt-[2px]", textClassName)}>{data.message}</p>
        </div>
      )}
    </Portal.Root>
  );
};

export default Toast;
