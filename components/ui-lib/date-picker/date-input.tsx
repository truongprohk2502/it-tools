"use client";

import { cn } from "@/lib/utils";
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
        className={cn(
          "relative mx-[1px] rounded-md px-0.5 py-[1px]",
          focusing && "bg-neutral-300 dark:bg-neutral-500",
        )}
      >
        <span
          className={cn(
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

DateInput.displayName = "DateInput";

export default DateInput;
