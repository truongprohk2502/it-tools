import type { VariantProps } from "class-variance-authority";
import { codeVariants } from "./code-snippet.helpers";

export interface CodeSnippetProps extends VariantProps<typeof codeVariants> {
  code: string;
  showCopy?: boolean;
  className?: string;
  labelClassName?: string;
}
