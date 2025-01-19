import type { VariantProps } from "class-variance-authority";
import { inputVariants } from "./input.helpers";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  isFloatLabel?: boolean;
  error?: string | null;
  wrapperClassName?: string;
}
