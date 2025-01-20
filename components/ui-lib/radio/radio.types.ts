import type { VariantProps } from "class-variance-authority";
import { radioVariants } from "./radio.helpers";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioVariants> {
  checked: boolean;
  label?: string;
  className?: string;
  onChangeChecked?: (
    checked: boolean,
    value: readonly string[] | string | number | undefined,
  ) => void;
}
