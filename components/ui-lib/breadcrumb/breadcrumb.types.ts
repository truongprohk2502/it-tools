import type { VariantProps } from "class-variance-authority";
import { breadcrumbVariants } from "./breadcrumb.helpers";

type Separator = "slash" | "arrow";

export interface BreadcrumbProps
  extends VariantProps<typeof breadcrumbVariants> {
  items: Array<{ label: string; value: string }>;
  separator?: Separator;
  disabled?: boolean;
  hasCollapse?: boolean;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  className?: string;
  itemClassName?: string;
  labelClassName?: string;
  separatorClassName?: string;
  onClick?: (val: string | null) => void;
}
