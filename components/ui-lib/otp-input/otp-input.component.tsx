"use client";

import { cn } from "@/lib/utils";
import { Fragment, useEffect, useRef, useState } from "react";

export interface OtpInputProps {
  total?: number;
  separator?: React.ReactNode;
  className?: string;
  separatorClassName?: string;
  inputClassName?: string;
  onFinish?: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({
  total = 5,
  separator,
  className,
  separatorClassName,
  inputClassName,
  onFinish,
}) => {
  const [otp, setOtp] = useState<number[]>([]);

  const refs = useRef<HTMLInputElement[]>([]);
  const focusingIndex = useRef<number | null>(null);

  const focusInput = (index: number) => {
    refs.current[index]?.select();
  };

  useEffect(() => {
    const handlePress = (e: KeyboardEvent) => {
      if (focusingIndex.current === null) return;

      if (e.key === "ArrowLeft") {
        const newIndex = (focusingIndex.current - 1 + total) % total;
        focusInput(newIndex);
      } else if (e.key === "ArrowRight") {
        const newIndex = (focusingIndex.current + 1) % total;
        focusInput(newIndex);
      } else if (e.key === "Enter") {
        if (focusingIndex.current === null) return;
        refs.current[focusingIndex.current]?.blur();
        const otpString = otp.join("");
        onFinish?.(otpString);
      } else if (e.key === "Backspace" || e.key === "Delete") {
        if (focusingIndex.current === null) return;
        setOtp((otp) => otp.filter((_, idx) => idx !== focusingIndex.current));
        setTimeout(() => {
          const newIndex =
            focusingIndex.current! > 0 ? focusingIndex.current! - 1 : 0;
          focusInput(newIndex);
        });
      }
    };

    document.addEventListener("keydown", handlePress);

    return () => {
      document.removeEventListener("keydown", handlePress);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, otp]);

  const handleInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    e.preventDefault();

    const value = e.key;
    if (!/\d/.test(value)) return;

    const code = Number(value);

    const newOtp =
      index <= otp.length - 1
        ? otp.map((item, idx) => (idx === index ? code : item))
        : [...otp, Number(value)].slice(-total);
    setOtp(newOtp);

    if (
      focusingIndex.current !== null &&
      focusingIndex.current < newOtp.length - 1
    ) {
      const newIndex = focusingIndex.current + 1;
      focusInput(newIndex);
    } else if (newOtp.length === total) {
      refs.current[total - 1]?.blur();
      onFinish?.(newOtp.join(""));
    } else if (newOtp.length < total) {
      const newIndex = newOtp.length;
      focusInput(newIndex);
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <div
              className={cn("mx-2 text-2xl font-semibold", separatorClassName)}
            >
              {separator}
            </div>
          )}
          <input
            ref={(ref) => {
              refs.current[index] = ref as HTMLInputElement;
            }}
            type="text"
            maxLength={1}
            value={otp[index] || ""}
            className={cn(
              "h-12 w-12 rounded-md border border-gray-300 text-center text-2xl font-semibold dark:border-gray-700",
              inputClassName,
            )}
            onKeyDown={(e) => handleInput(e, index)}
            onChange={() => {}}
            onFocus={() => (focusingIndex.current = index)}
            onBlur={() => (focusingIndex.current = null)}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default OtpInput;
