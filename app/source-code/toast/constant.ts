export const toastTailwindCode = `// tailwind.config.js
module.exports = {
  ...
  theme: {
    ...
    extend: {
      ...
      keyframes: {
        "toast-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "toast-out": {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.9)" },
        },
      },
      animation: {
        "toast-in": "toast-in 0.15s ease-in-out",
        "toast-out": "toast-out 0.15s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")]
};
`;

export const useToastCode = `// use-toast.ts
import { create } from "zustand";

interface ToastOptions {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

interface ToastData extends ToastOptions {
  id: number;
}

interface StoreProps {
  data: ToastData | null;
  showToast: (data: ToastOptions) => void;
  clearToast: () => void;
}

export const useToast = create<StoreProps>((set) => ({
  data: null,
  showToast: (data: ToastOptions) => set({ data: { ...data, id: Date.now() } }),
  clearToast: () => set({ data: null }),
}));
`;

export const toastComponentCode = `// toast.component.tsx
import clsx from "clsx";
import * as Portal from "@radix-ui/react-portal";
import { cva } from "class-variance-authority";
import {
  CircleAlert,
  CircleCheckBig,
  CircleX,
  TriangleAlert,
} from "lucide-react";
import { useCallback } from "react";
import { useToast } from "./use-toast";

const toastVariants = cva(
  "z-20 fixed transform bg-white rounded-md border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center pl-4 pr-6 py-4 animate-toast-in fill-mode-forwards",
  {
    variants: {
      position: {
        topLeft: "top-4 left-4",
        topCenter: "top-4 left-1/2 -translate-x-1/2",
        topRight: "top-4 right-4",
        bottomLeft: "bottom-4 left-4",
        bottomCenter: "bottom-4 left-1/2 -translate-x-1/2",
        bottomRight: "bottom-4 right-4",
      },
    },
    defaultVariants: {
      position: "topRight",
    },
  },
);

export interface ToastProps extends VariantProps<typeof toastVariants> {
  className?: string;
  textClassName?: string;
}

export type ToastPosition = ToastProps["position"];

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
`;
