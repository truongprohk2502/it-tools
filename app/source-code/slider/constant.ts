export const sliderVariantCode = `// slider.helpers.ts
import { cva } from "class-variance-authority";

export const wrapperVariants = cva(
  "w-full relative flex items-center overflow-hidden rounded-full",
  {
    variants: {
      sliderSize: {
        small: "h-4",
        medium: "h-6",
        large: "h-7",
      },
    },
  },
);

export const barWrapperVariants = cva(
  "rounded-full w-full bg-neutral-200 dark:bg-neutral-500 relative overflow-hidden",
  {
    variants: {
      sliderSize: {
        small: "h-1",
        medium: "h-3",
        large: "h-7",
      },
    },
  },
);

export const colorVariants = cva("", {
  variants: {
    bgColor: {
      primary: "bg-blue-500 data-[disabled=true]:bg-blue-300",
      secondary: "bg-gray-500 data-[disabled=true]:bg-gray-300",
      success: "bg-green-500 data-[disabled=true]:bg-green-300",
      danger: "bg-red-500 data-[disabled=true]:bg-red-300",
      warning: "bg-yellow-500 data-[disabled=true]:bg-yellow-200",
      info: "bg-cyan-500 data-[disabled=true]:bg-cyan-200",
      light: "bg-gray-400 data-[disabled=true]:bg-gray-300",
      dark: "bg-black data-[disabled=true]:bg-gray-300",
    },
  },
});

export const thumbVariants = cva("absolute top-0", {
  variants: {
    sliderSize: {
      small: "w-4 h-4 p-0.5 rounded-full",
      medium: "w-6 h-6 p-0.5 rounded-full",
      large: "w-7 h-7 p-1 !bg-none",
    },
  },
});

export const getSliderInitValue = (
  value: number | undefined,
  defaultValue: number | undefined,
  min: number,
) => {
  if (value && !Number.isNaN(+value)) return value;
  if (defaultValue && !Number.isNaN(+defaultValue)) return defaultValue;
  return min;
};
`;

export const sliderComponentCode = `// slider.component.tsx
import clsx from "clsx";
"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import type { VariantProps } from "class-variance-authority";
import {
  barWrapperVariants,
  colorVariants,
  getSliderInitValue,
  thumbVariants,
  wrapperVariants,
} from "./slider.helpers";

export interface SliderProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof wrapperVariants>,
    VariantProps<typeof colorVariants> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  className?: string;
}

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
          style={{ width: \`\${percent * 100}%\` }}
          className={cn("absolute inset-0", colorVariants({ bgColor }))}
        />
      </div>
      <div
        data-disabled={Boolean(disabled)}
        style={{
          left: \`calc(\${percent} * (100% - \${sliderSize === "small" ? 1 : sliderSize === "medium" ? 1.5 : 1.75}rem))\`,
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
`;
