"use client";

import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useMemo } from "react";
import {
  checkIsSameMonth,
  getDaysOfMonthWithAdjacentDays,
  WEEKDAYS,
} from "./date-picker.helpers";
import { type DatePopupProps, PositionType } from "./date-picker.types";

const DatePopup: React.FC<DatePopupProps> = ({
  dateValue,
  position,
  currentMonth,
  opening,
  onGoPrevMonth,
  onGoNextMonth,
  onSelectDay,
}) => {
  const days = useMemo(
    () => getDaysOfMonthWithAdjacentDays(currentMonth),
    [currentMonth],
  );

  const handleClickDay = (day: string) => {
    if (checkIsSameMonth(currentMonth, day)) onSelectDay(day);
  };

  return (
    <div
      className={cn(
        "absolute left-0 z-10 w-[18rem] overflow-auto rounded-md border border-neutral-200 bg-white pb-4 pt-3 dark:border-neutral-600 dark:bg-neutral-800",
        {
          "bottom-[calc(100%+0.5rem)]": position === PositionType.Top,
          "top-[calc(100%+0.5rem)]": position === PositionType.Bottom,
        },
        { hidden: !opening },
      )}
    >
      <div className="flex items-center text-neutral-700 dark:text-neutral-300">
        <div className="px-2">
          <ChevronLeftIcon
            className="h-6 w-6 cursor-pointer select-none"
            onClick={onGoPrevMonth}
          />
        </div>
        <div className="flex-1 text-center font-semibold leading-none">
          {dayjs(currentMonth).format("MMMM YYYY")}
        </div>
        <div className="px-2">
          <ChevronRightIcon
            className="h-6 w-6 cursor-pointer select-none"
            onClick={onGoNextMonth}
          />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 px-2">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="mb-4 mt-4 text-center text-sm font-semibold text-neutral-400"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-x-1 gap-y-2 px-2">
        {days.map((day) => (
          <div
            key={day}
            className={cn(
              "rounded-sm py-1.5 text-center text-sm font-semibold",
              day === dateValue
                ? "cursor-default bg-blue-600 text-white"
                : checkIsSameMonth(currentMonth, day)
                  ? "cursor-pointer text-neutral-700 hover:bg-blue-100 hover:text-blue-400 dark:text-neutral-300 dark:hover:bg-blue-200 dark:hover:text-neutral-700"
                  : "cursor-default text-neutral-300 dark:text-neutral-700",
            )}
            onClick={() => handleClickDay(day)}
          >
            {day.slice(-2)}
          </div>
        ))}
      </div>
    </div>
  );
};

DatePopup.displayName = "DatePopup";

export default DatePopup;
