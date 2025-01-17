import type { VariantProps } from "class-variance-authority";
import { chipVariants } from "./chip.helpers";

export interface ChipProps extends VariantProps<typeof chipVariants> {
  title: string;
  disabled?: boolean;
  hasRemove?: boolean;
  className?: string;
  onRemove?: () => void;
}
