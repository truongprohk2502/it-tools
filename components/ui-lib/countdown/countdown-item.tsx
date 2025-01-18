"use client";

import { cn } from "@/lib/utils";
import padStart from "lodash/padStart";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { convertNumberToFullWidth, getTextWidth } from "./countdown.helpers";
import type { CountdownItemProps, CountdownRef } from "./countdown.types";

const CountdownItem = forwardRef<CountdownRef, CountdownItemProps>(
  ({ number, size }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const timeLeft = useRef<number>(number);

    const width = useMemo(() => {
      if (number < 100) {
        if (size === "large") return 8;
        if (size === "medium") return 5;
        return 4;
      } else {
        const charWidth = getTextWidth(size);
        const labelWidth = number.toString().length * charWidth;

        if (size === "large") return 1 + labelWidth;
        if (size === "medium") return 0.5 + labelWidth;
        return 0.25 + labelWidth;
      }
    }, [size, number]);

    const height = useMemo(() => {
      if (size === "large") return 4;
      if (size === "medium") return 2.5;
      return 2;
    }, [size]);

    useImperativeHandle(
      ref,
      () => ({
        setTimeLeft: (time: number) => {
          timeLeft.current = time;
          wrapperRef.current!.style.top = `-${time * height}rem`;
        },
      }),
      [height],
    );

    return (
      <div
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
        }}
        className="relative overflow-hidden"
      >
        <div
          ref={wrapperRef}
          className={cn(
            "absolute inset-x-0 flex flex-col items-center transition-all duration-150 motion-reduce:transform-none",
          )}
        >
          <p style={{ lineHeight: `${height}rem` }} className="whitespace-pre">
            {Array.from({ length: number + 1 })
              .map((_, index) =>
                padStart(
                  convertNumberToFullWidth(index),
                  number < 100 ? 2 : number.toString().length,
                  convertNumberToFullWidth(0),
                ),
              )
              .join("\n")}
          </p>
        </div>
      </div>
    );
  },
);

CountdownItem.displayName = "CountdownItem";

export default CountdownItem;
