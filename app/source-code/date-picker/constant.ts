export const datePickerUseClickAwayHook = `// use-click-away.ts
import { RefObject, useEffect } from "react";

const defaultEvents = ["mousedown", "touchstart"];
type DefaultEventType = "mousedown" | "touchstart";

const useClickAway = (
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const el = ref.current!;
      if (!el) return;
      if (el.contains(event.target as HTMLElement)) return;
      onClickAway(event);
    };

    for (const eventName of defaultEvents) {
      document.addEventListener(eventName as DefaultEventType, handler);
    }

    return () => {
      for (const eventName of defaultEvents) {
        document.removeEventListener(eventName as DefaultEventType, handler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useClickAway;
`;

export const datePickerTypesCode = `// date-picker.types.ts
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
`;

export const datePickerHelpersCode = `// date-picker.helpers.ts
import dayjs from "dayjs";
import padStart from "lodash/padStart";

export const MONTH_FORMAT = "YYYY/MM";
export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const checkIsSameMonth = (month: string, day: string) =>
  +month.slice(-2) === +day.split("-")[1];

export const getMonth = (date: string | null | undefined) => {
  const formattedDate = date?.replace("MM", "01").replace("DD", "01");
  const dateInstance = formattedDate ? dayjs(formattedDate) : dayjs();
  return dateInstance.format(MONTH_FORMAT);
};

export const formatDateString = (year: number, month: number, day: number) =>
  (Number.isNaN(year) ? "YYYY" : padStart(year.toString(), 4, "0")) +
  "-" +
  (Number.isNaN(month) ? "MM" : padStart(month.toString(), 2, "0")) +
  "-" +
  (Number.isNaN(day) ? "DD" : padStart(day.toString(), 2, "0"));

export const getDaysOfMonthWithAdjacentDays = (monthDate: string) => {
  const year = +monthDate.split("/")[0];
  const month = +monthDate.split("/")[1];

  if (Number.isNaN(year) || Number.isNaN(month)) return [];

  const daysInMonth = dayjs(\`\${year}-\${month}-01\`).daysInMonth();
  const startDay = dayjs(\`\${year}-\${month}-01\`).day();
  const endDay = dayjs(\`\${year}-\${month}-\${daysInMonth}\`).day();

  const days = [];

  // Add days from the previous month
  const daysFromPrevMonth = startDay;
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const daysInPrevMonth = dayjs(\`\${prevYear}-\${prevMonth}-01\`).daysInMonth();

  for (
    let i = daysInPrevMonth - daysFromPrevMonth + 1;
    i <= daysInPrevMonth;
    i++
  ) {
    days.push(formatDateString(prevYear, prevMonth, i));
  }

  // Add days from the current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(formatDateString(year, month, i));
  }

  // Add days from the next month
  const daysFromNextMonth = 6 - endDay;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;

  for (let i = 1; i <= daysFromNextMonth; i++) {
    days.push(formatDateString(nextYear, nextMonth, i));
  }

  return days;
};

export const checkIsValidDayAndMonth = (month: number, day: number) => {
  if (month === 2) {
    if (day > 29) return false;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (day > 30) return false;
  } else {
    if (day > 31) return false;
  }
  return true;
};

export const checkIsValidDate = (year: number, month: number, day: number) => {
  if (day > 31) return false;
  if (month > 12) return false;
  if (year > 9999) return false;

  if (month === 4 || month === 6 || month === 9 || month === 11)
    if (day > 30) return false;

  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8)
    if (day > 31) return false;

  if (month === 2) {
    const isLeafYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    if (day > (isLeafYear ? 29 : 28)) return false;
  }

  return true;
};

export const getLastDayOfMonth = (month: number, year?: number) => {
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
  else if (month === 2) {
    if (year === undefined) return 29;
    const isLeafYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    return isLeafYear ? 29 : 28;
  } else return 31;
};

export const getNextMonth = (month: string) =>
  dayjs(month).add(1, "month").format(MONTH_FORMAT);

export const getPrevMonth = (month: string) =>
  dayjs(month).subtract(1, "month").format(MONTH_FORMAT);
`;

export const datePickerInputCode = `// date-input.tsx
import clsx from "clsx";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { formatDateString, getLastDayOfMonth } from "./date-picker.helpers";
import { type DateInputProps } from "./date-picker.types";

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ type, disabled, value, onChange, onCompleted = () => {} }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => inputRef.current!, []);

    const [focusing, setFocusing] = useState<boolean>(false);
    const [isDirty, setIsDirty] = useState<boolean>(false);

    const changeInput = (year: number, month: number, day: number) => {
      onChange(formatDateString(year, month, day));
    };

    const getInputData = () => {
      const placeholder =
        type === "day" ? "dd" : type === "month" ? "mm" : "yyyy";
      const input =
        value?.split("-")?.[type === "day" ? 2 : type === "month" ? 1 : 0];

      if (!input || Number.isNaN(+input))
        return { placeholder, inputValue: "" };

      return {
        placeholder,
        inputValue: type === "year" ? +input.toString() : input,
      };
    };

    const changeDay = (num: number) => {
      const year = Number(value?.split("-")?.[0]);
      const month = Number(value?.split("-")?.[1]);

      if (!isDirty) {
        num = num.toString().length > 1 ? +num.toString().slice(-1) : num;
      } else if (num.toString().length > 2) {
        num = +num.toString().slice(-1);
      }

      const maxDay = Number.isNaN(month)
        ? 31
        : Number.isNaN(year)
          ? getLastDayOfMonth(month)
          : getLastDayOfMonth(year, month);

      if (num > maxDay) {
        changeInput(year, month, +num.toString().slice(-1));
      } else {
        changeInput(year, month, num);
      }

      if (num.toString().length > 1 || num > 3 || (month === 2 && num > 2))
        onCompleted();
    };

    const changeMonth = (num: number) => {
      const year = Number(value?.split("-")?.[0]);
      const day = Number(value?.split("-")?.[2]);

      if (!isDirty) {
        num = num.toString().length > 1 ? +num.toString().slice(-1) : num;
      } else if (num.toString().length > 2) {
        num = +num.toString().slice(-1);
      }

      if (num > 12) {
        changeInput(year, +num.toString().slice(-1), day);
      } else {
        changeInput(year, num, day);
      }

      if (num.toString().length > 1 || num > 2) onCompleted();
    };

    const changeYear = (num: number) => {
      const year = Number(value?.split("-")?.[0]);
      const month = Number(value?.split("-")?.[1]);
      const day = Number(value?.split("-")?.[2]);

      const isAdded = year.toString().length < num.toString().length;

      if (!isDirty && isAdded) {
        num = num.toString().length > 1 ? +num.toString().slice(-1) : num;
      } else if (num.toString().length > 4) {
        num = +num.toString().slice(-1);
      }

      if (num > 9999) {
        changeInput(+num.toString().slice(-1), month, day);
      } else {
        changeInput(num, month, day);
      }
    };

    const handleChange = (val: string) => {
      if (/\D/.test(val)) return;
      if (val === value) return;
      const num = +val.replace(/\D/g, "");

      if (Number.isNaN(num)) return;

      setIsDirty(true);

      if (type === "day") {
        changeDay(num);
      } else if (type === "month") {
        changeMonth(num);
      } else {
        changeYear(num);
      }
    };

    const handleFocus = () => {
      setFocusing(true);
    };

    const handleBlur = () => {
      setFocusing(false);
      setIsDirty(false);
    };

    const { inputValue, placeholder } = getInputData();

    return (
      <div
        className={clsx(
          "relative mx-[1px] rounded-md px-0.5 py-[1px]",
          focusing && "bg-neutral-300 dark:bg-neutral-500",
        )}
      >
        <span
          className={clsx(
            "font-medium",
            !disabled && Number(inputValue) > 0
              ? "text-neutral-700 dark:text-neutral-400"
              : "text-neutral-400 dark:text-neutral-600",
          )}
          onClick={() => inputRef?.current?.focus()}
        >
          {Number(inputValue) > 0 ? inputValue : placeholder}
        </span>
        <input
          ref={inputRef}
          className="absolute inset-0 -z-50 opacity-0"
          disabled={disabled}
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  },
);

export default DateInput;
`;

export const datePickerPopupCode = `// date-popup.tsx
import clsx from "clsx";
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
      className={clsx(
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
            className={clsx(
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

export default DatePopup;
`;

export const datePickerComponentCode = `// date-picker.component.tsx
import useClickAway from "@/hooks/use-click-away";
import clsx from "clsx";
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
    <div ref={dropdownRef} className={clsx("relative w-[12rem]", className)}>
      <div
        className={clsx(
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
`;
