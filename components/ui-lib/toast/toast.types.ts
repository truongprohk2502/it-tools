import type { VariantProps } from "class-variance-authority";
import { toastVariants } from "./toast.helpers";

export interface ToastProps extends VariantProps<typeof toastVariants> {
  className?: string;
  textClassName?: string;
}

export type ToastPosition = ToastProps["position"];
