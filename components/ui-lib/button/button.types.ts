import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.helpers";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}
