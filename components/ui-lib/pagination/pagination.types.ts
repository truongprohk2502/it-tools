type Variant = "solid" | "separated" | "outline";

export interface PaginationProps {
  total: number;
  current: number;
  siblings?: number;
  showControls?: boolean;
  variant?: Variant;
  className?: string;
  cellClassName?: string;
  onChange: (val: number) => void;
}
