import type { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { buttonVariants } from "./button-helpers";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, buttonColor, radius, size, className, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({
          variant,
          buttonColor,
          radius,
          size,
          className,
        })}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
