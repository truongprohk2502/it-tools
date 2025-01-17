import { VariantProps } from "class-variance-authority";
import { checkboxVariants } from "./checkbox.helpers";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {
  checked: boolean;
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  onChangeChecked?: (checked: boolean) => void;
}
