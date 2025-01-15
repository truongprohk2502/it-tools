import type { VariantProps } from "class-variance-authority";
import { badgeVariants } from "./badge.helpers";

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  title: string;
  showOutline?: boolean;
  hidden?: boolean;
  className?: string;
  labelClassName?: string;
  children: React.ReactNode;
}
