export enum PositionType {
  Top,
  Bottom,
}

export interface DropdownProps {
  value: string | null;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
}
