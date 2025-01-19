type Size = "small" | "medium" | "large";

type EdgeSize = "small" | "large";

type EdgeRounded = "small" | "large" | "none";

type TopVariant =
  | "pill"
  | "small_ears"
  | "large_ears"
  | "one_dot_center"
  | "two_dot_center"
  | "one_dot_left"
  | "drop_of_water"
  | "invisible";

type BottomVariant = "home_bar" | "navigate_shape" | "navigate_icon" | "none";

export interface MobileMockupProps {
  showBackground?: boolean;
  size?: Size;
  edgeSize?: EdgeSize;
  edgeRounded?: EdgeRounded;
  topVariant?: TopVariant;
  bottomVariant?: BottomVariant;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}
