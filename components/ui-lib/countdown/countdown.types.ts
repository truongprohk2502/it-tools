export type CountdownVariant =
  | "line_label"
  | "bottom_label"
  | "bottom_fill_label"
  | "colon_label"
  | "abbreviated_label";

export type Size = "small" | "medium" | "large";

export type CountdownUnit = "day" | "hour" | "minute" | "second";

export type CountdownRef = {
  setTimeLeft: (time: number) => void;
};

export interface CountdownLabelProps {
  variant: CountdownVariant;
  type: CountdownUnit;
  size: Size;
  hidden?: boolean;
  children: React.ReactNode;
}

export interface CountdownItemProps {
  number: number;
  size: Size;
}

export interface CountdownProps {
  seconds: number;
  variant?: CountdownVariant;
  size?: Size;
  hasDay?: boolean;
  className?: string;
}
