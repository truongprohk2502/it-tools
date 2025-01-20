import type { VariantProps } from "class-variance-authority";
import { ratingVariants } from "./rating.helpers";

export interface RatingProps extends VariantProps<typeof ratingVariants> {
  name?: string;
  value: number;
  total?: number;
  hasHalfValue?: boolean;
  disabled?: boolean;
  className?: string;
  onChange: (value: number) => void;
}
