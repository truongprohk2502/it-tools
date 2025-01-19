"use client";

import useClickAway from "@/hooks/use-click-away";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useRef, useState } from "react";
import DateInput from "./date-input";
import { getMonth, getNextMonth, getPrevMonth } from "./date-picker.helpers";
import { PositionType, type DatePickerProps } from "./date-picker.types";
import DatePopup from "./date-popup";

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  className,
  disabled,
  onChange,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dayRef = useRef<HTMLInputElement | null>(null);
  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  const [currentMonth, setCurrentMonth] = useState<string>(getMonth(value));
  const [opening, setOpening] = useState<boolean>(false);
  const [position, setPosition] = useState<PositionType>(PositionType.Top);

  useClickAway(dropdownRef, () => setOpening(false));

  const handleOpen = () => {
    const { bottom } = dropdownRef.current!.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - bottom;
    setPosition(
      distanceToBottom > 230 ? PositionType.Bottom : PositionType.Top,
    );
    setOpening(true);
  };

  const changeDate = (value: string) => {
    setCurrentMonth(getMonth(value));
    onChange(value);
  };

  const selectDay = (day: string) => {
    setOpening(false);
    changeDate(day);
  };

  const goNextMonth = () => {
    setCurrentMonth(getNextMonth(currentMonth));
  };

  const goPrevMonth = () => {
    setCurrentMonth(getPrevMonth(currentMonth));
  };

  return (
    <div ref={dropdownRef} className={cn("relative w-[12rem]", className)}>
      <div
        className={cn(
          "flex items-center rounded-md border px-4 py-2",
          {
            "cursor-not-allowed border-neutral-300 text-neutral-300 dark:border-neutral-800 dark:text-neutral-600":
              disabled,
            "border-neutral-400 text-neutral-600 hover:border-cyan-500 dark:border-neutral-600 dark:text-neutral-400 dark:hover:border-cyan-500":
              !disabled,
          },
          { "border-cyan-500 dark:border-cyan-500": opening },
        )}
      >
        <div className="flex w-full flex-1 items-center overflow-hidden text-ellipsis whitespace-nowrap pr-2 text-sm font-medium">
          <DateInput
            ref={dayRef}
            type="day"
            disabled={disabled}
            value={value}
            onChange={changeDate}
            onCompleted={() => monthRef.current!.focus()}
          />
          <span className="text-neutral-500 dark:text-neutral-600">/</span>
          <DateInput
            ref={monthRef}
            type="month"
            disabled={disabled}
            value={value}
            onChange={changeDate}
            onCompleted={() => yearRef.current!.focus()}
          />
          <span className="text-neutral-500 dark:text-neutral-600">/</span>
          <DateInput
            ref={yearRef}
            type="year"
            disabled={disabled}
            value={value}
            onChange={changeDate}
          />
        </div>
        <CalendarIcon
          className="h-4 w-4 cursor-pointer"
          onClick={() => !disabled && handleOpen()}
        />
      </div>
      <DatePopup
        dateValue={value}
        opening={opening}
        position={position}
        currentMonth={currentMonth}
        onGoPrevMonth={goPrevMonth}
        onGoNextMonth={goNextMonth}
        onSelectDay={selectDay}
      />
    </div>
  );
};

export default DatePicker;
