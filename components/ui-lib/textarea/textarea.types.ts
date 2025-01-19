import type { VariantProps } from "class-variance-authority";
import { textareaVariants } from "./textarea.helpers";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  isFloatLabel?: boolean;
  error?: string | null;
  wrapperClassName?: string;
}
