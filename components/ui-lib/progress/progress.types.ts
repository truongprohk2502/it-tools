import type { VariantProps } from "class-variance-authority";
import { progressBarVariants, progressVariants } from "./progress.helpers";

export interface ProgressProps
  extends VariantProps<typeof progressVariants>,
    VariantProps<typeof progressBarVariants> {
  value: number;
  hasStripes?: boolean;
  animateStripes?: boolean;
  className?: string;
}
