import type { VariantProps } from "class-variance-authority";
import { itemVariants, wrapperVariants } from "./speed-dial.helpers";

export interface SpeedDialProps
  extends VariantProps<typeof wrapperVariants>,
    VariantProps<typeof itemVariants> {
  items: Array<{ icon: React.ReactNode; onClick: () => void }>;
  className?: string;
}
