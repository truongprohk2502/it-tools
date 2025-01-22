import type { VariantProps } from "class-variance-authority";
import { switchVariants } from "./switch.helpers";

export interface SwitchProps extends VariantProps<typeof switchVariants> {
  checked: boolean;
  disabled?: boolean;
  className?: string;
  onChange: (checked: boolean) => void;
}
