"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  barWrapperVariants,
  colorVariants,
  getSliderInitValue,
  thumbVariants,
  wrapperVariants,
} from "./slider.helpers";
import type { SliderProps } from "./slider.types";

const Slider: React.FC<SliderProps> = ({
  disabled,
  value,
  defaultValue,
  min = 0,
  max = 100,
  sliderSize = "medium",
  bgColor = "primary",
  className,
  onChange,
  ...props
}) => {
  const [innerValue, setInnerValue] = useState<number>(
    getSliderInitValue(value, defaultValue, min),
  );

  const percent = Math.abs(innerValue - min) / Math.abs(max - min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = +e.target.value;
    setInnerValue(Number.isNaN(num) ? min : num);
    onChange?.(e);
  };

  return (
    <div className={cn(wrapperVariants({ sliderSize }), className)}>
      <div className={barWrapperVariants({ sliderSize })}>
        <div
          data-disabled={Boolean(disabled)}
          style={{ width: `${percent * 100}%` }}
          className={cn("absolute inset-0", colorVariants({ bgColor }))}
        />
      </div>
      <div
        data-disabled={Boolean(disabled)}
        style={{
          left: `calc(${percent} * (100% - ${sliderSize === "small" ? 1 : sliderSize === "medium" ? 1.5 : 1.75}rem))`,
        }}
        className={cn(
          colorVariants({ bgColor }),
          thumbVariants({ sliderSize }),
        )}
      >
        {sliderSize === "large" && (
          <>
            <div className="absolute inset-y-0 right-0 w-1/2 bg-neutral-200 dark:bg-neutral-500" />
            <div
              data-disabled={Boolean(disabled)}
              className={cn(
                "absolute inset-0 rounded-r-full",
                colorVariants({ bgColor }),
              )}
            />
          </>
        )}
        <div className="absolute inset-1 rounded-full bg-white" />
      </div>
      <input
        type="range"
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        onChange={handleChange}
        className="absolute inset-0 opacity-0"
        {...props}
      />
    </div>
  );
};

export default Slider;
