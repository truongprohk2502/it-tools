export type LabelSize = "small" | "medium" | "large";

export type Position = {
  x: number;
  y: number;
};

export interface AngleSliderProps {
  value?: number;
  max: number;
  showLabel?: boolean;
  size?: string | number;
  barSizePercent?: number;
  barThick?: string | number;
  labelSize?: LabelSize;
  className?: string;
  barClassName?: string;
  backgroundClassName?: string;
  labelClassName?: string;
  onChange?: (value: number) => void;
  onEnd?: (value: number) => void;
}
