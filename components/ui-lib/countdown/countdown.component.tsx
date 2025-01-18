"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import CountdownItem from "./countdown-item";
import CountdownLabel from "./countdown-label";
import type { CountdownProps, CountdownRef } from "./countdown.types";

const Countdown: React.FC<CountdownProps> = ({
  seconds,
  variant = "line_label",
  size = "medium",
  hasDay,
  className,
}) => {
  const secondsRef = useRef<CountdownRef>(null);
  const minutesRef = useRef<CountdownRef>(null);
  const hoursRef = useRef<CountdownRef>(null);
  const daysRef = useRef<CountdownRef>(null);

  const timeLeft = useRef<number>(seconds);

  const setTimeLeft = (number: number) => {
    timeLeft.current = number;

    const secondsPerMinute = 60;
    const secondsPerHour = secondsPerMinute * 60;
    const secondsPerDay = secondsPerHour * 24;

    const days = hasDay ? Math.floor(number / secondsPerDay) : 0;
    const hours = Math.floor((number - days * secondsPerDay) / secondsPerHour);
    const minutes = Math.floor(
      (number - days * secondsPerDay - hours * secondsPerHour) /
        secondsPerMinute,
    );
    const seconds =
      number -
      days * secondsPerDay -
      hours * secondsPerHour -
      minutes * secondsPerMinute;

    daysRef.current?.setTimeLeft(days);
    hoursRef.current?.setTimeLeft(hours);
    minutesRef.current?.setTimeLeft(minutes);
    secondsRef.current?.setTimeLeft(seconds);
  };

  useEffect(() => {
    setTimeLeft(seconds);

    const interval = setInterval(() => {
      if (timeLeft.current === 0) {
        clearInterval(interval);
      } else {
        setTimeLeft(timeLeft.current - 1);
      }
    }, 1000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, hasDay]);

  return (
    <div
      className={cn(
        "te6 flex items-center",
        (variant === "bottom_label" || variant === "bottom_fill_label") && {
          "gap-1.5": size === "small",
          "gap-2.5": size === "medium",
          "gap-4": size === "large",
        },
        className,
      )}
    >
      <CountdownLabel size={size} variant={variant} type="day" hidden={!hasDay}>
        <CountdownItem
          ref={daysRef}
          size={size}
          number={Math.floor(seconds / (24 * 60 * 60))}
        />
      </CountdownLabel>
      <CountdownLabel size={size} variant={variant} type="hour">
        <CountdownItem
          ref={hoursRef}
          size={size}
          number={hasDay ? 23 : Math.floor(seconds / (60 * 60))}
        />
      </CountdownLabel>
      <CountdownLabel size={size} variant={variant} type="minute">
        <CountdownItem ref={minutesRef} size={size} number={59} />
      </CountdownLabel>
      <CountdownLabel size={size} variant={variant} type="second">
        <CountdownItem ref={secondsRef} size={size} number={59} />
      </CountdownLabel>
    </div>
  );
};

export default Countdown;
