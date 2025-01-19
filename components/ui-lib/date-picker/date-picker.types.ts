export enum PositionType {
  Top,
  Bottom,
}

export type TimeType = "day" | "month" | "year";

export interface DateInputProps {
  type: TimeType;
  value: string | null | undefined;
  disabled: boolean | undefined;
  onChange: (value: string) => void;
  onCompleted?: () => void;
}

export interface DatePopupProps {
  dateValue: string | null;
  position: PositionType;
  currentMonth: string;
  opening: boolean;
  onGoPrevMonth: () => void;
  onGoNextMonth: () => void;
  onSelectDay: (value: string) => void;
}

export interface DatePickerProps {
  value: string | null;
  className?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}
