import { cva, type VariantProps } from "class-variance-authority";
import Bounce from "./bounce";
import Clip from "./clip";
import Fade from "./fade";
import Pulse from "./pulse";
import Scale from "./scale";

const colorVariants = cva("", {
  variants: {
    color: {
      primary: "#3b82f6",
      secondary: "#6b7280",
      success: "#22c55e",
      danger: "#ef4444",
      warning: "#eab308",
      info: "#06b6d4",
      light: "#d1d5db",
      dark: "#000000",
    },
  },
});

export interface SpinnerProps extends VariantProps<typeof colorVariants> {
  variant?: "clip" | "fade" | "scale" | "bounce" | "pulse";
  size?: "small" | "medium" | "large";
  className?: string;
}

const Loader: React.FC<SpinnerProps> = ({
  variant = "clip",
  color = "primary",
  size = "medium",
  className,
}) => {
  const colorValue = colorVariants({ color });

  return variant === "clip" ? (
    <Clip size={size} color={colorValue} className={className} />
  ) : variant === "fade" ? (
    <Fade size={size} color={colorValue} className={className} />
  ) : variant === "scale" ? (
    <Scale size={size} color={colorValue} className={className} />
  ) : variant === "bounce" ? (
    <Bounce size={size} color={colorValue} className={className} />
  ) : variant === "pulse" ? (
    <Pulse size={size} color={colorValue} className={className} />
  ) : null;
};

export default Loader;
