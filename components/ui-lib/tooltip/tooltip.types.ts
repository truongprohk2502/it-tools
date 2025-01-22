type Position = "top" | "right" | "bottom" | "left";

export interface TooltipProps {
  title: string;
  position?: Position;
  tooltipClassName?: string;
  className?: string;
  width?: string | number;
  children: React.ReactNode;
}
