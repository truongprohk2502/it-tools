import { forwardRef } from "react";
import { buttonVariants } from "./button.helpers";
import type { ButtonProps } from "./button.types";

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

Button.displayName = "Button";

export default Button;
