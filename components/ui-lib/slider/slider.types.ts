import type { VariantProps } from "class-variance-authority";
import { colorVariants, wrapperVariants } from "./slider.helpers";

export interface SliderProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof wrapperVariants>,
    VariantProps<typeof colorVariants> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  className?: string;
}
