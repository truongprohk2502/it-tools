export const countdownTypesCode = `// countdown.types.ts
export type CountdownVariant =
  | "line_label"
  | "bottom_label"
  | "bottom_fill_label"
  | "colon_label"
  | "abbreviated_label";

export type Size = "small" | "medium" | "large";

export type CountdownUnit = "day" | "hour" | "minute" | "second";

export type CountdownRef = {
  setTimeLeft: (time: number) => void;
};

export interface CountdownLabelProps {
  variant: CountdownVariant;
  type: CountdownUnit;
  size: Size;
  hidden?: boolean;
  children: React.ReactNode;
}

export interface CountdownItemProps {
  number: number;
  size: Size;
}

export interface CountdownProps {
  seconds: number;
  variant?: CountdownVariant;
  size?: Size;
  hasDay?: boolean;
  className?: string;
}
`;

export const countdownHelpersCode = `// countdown.helpers.ts
import { cva } from "class-variance-authority";
import type { Size } from "./countdown.types";

export const wrapperVariant = cva(
  "flex text-neutral-600 dark:text-neutral-200",
  {
    variants: {
      variant: {
        colon_label: "items-center",
        line_label: "items-end",
        abbreviated_label: "items-end",
        bottom_label: "flex-col justify-center items-center",
        bottom_fill_label:
          "flex-col justify-center items-center bg-neutral-300 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300",
      },
      size: {
        small: "text-2xl",
        medium: "text-4xl",
        large: "text-6xl",
      },
    },
    compoundVariants: [
      {
        variant: "bottom_fill_label",
        size: "small",
        className: "rounded-xl px-1 pt-1.5 pb-2.5",
      },
      {
        variant: "bottom_fill_label",
        size: "medium",
        className: "rounded-2xl px-2 py-3",
      },
      {
        variant: "bottom_fill_label",
        size: "large",
        className: "rounded-3xl px-2 py-4",
      },
    ],
  },
);

export const labelVariant = cva("", {
  variants: {
    variant: {
      colon_label: "text-neutral-600 dark:text-neutral-200",
      line_label: "text-neutral-500 dark:text-neutral-400",
      abbreviated_label: "text-neutral-600 dark:text-neutral-200",
      bottom_label: "text-neutral-500 dark:text-neutral-400",
      bottom_fill_label: "text-neutral-800 dark:text-neutral-200",
    },
    size: {
      small: "",
      medium: "",
      large: "",
    },
  },
  compoundVariants: [
    {
      variant: "colon_label",
      size: "large",
      className: "text-5xl mb-2 pl-3 pr-2",
    },
    {
      variant: "colon_label",
      size: "medium",
      className: "text-3xl mb-1 pl-3 pr-2",
    },
    {
      variant: "colon_label",
      size: "small",
      className: "text-xl mb-0.5",
    },
    {
      variant: "line_label",
      size: "large",
      className: "text-3xl pb-2 mr-2 px-2",
    },
    {
      variant: "line_label",
      size: "medium",
      className: "text-lg pb-[1px] mr-1",
    },
    {
      variant: "line_label",
      size: "small",
      className: "text-base pb-[1px]",
    },
    {
      variant: "abbreviated_label",
      size: "large",
      className: "text-5xl mb-1.5 px-1",
    },
    {
      variant: "abbreviated_label",
      size: "medium",
      className: "text-3xl mb-0.5 px-1",
    },
    {
      variant: "abbreviated_label",
      size: "small",
      className: "text-xl px-1 mb-0.5",
    },
    {
      variant: "bottom_label",
      size: "large",
      className: "text-2xl",
    },
    {
      variant: "bottom_label",
      size: "medium",
      className: "text-base",
    },
    {
      variant: "bottom_label",
      size: "small",
      className: "text-sm",
    },
    {
      variant: "bottom_fill_label",
      size: "large",
      className: "text-2xl",
    },
    {
      variant: "bottom_fill_label",
      size: "medium",
      className: "text-sm",
    },
    {
      variant: "bottom_fill_label",
      size: "small",
      className: "text-xs",
    },
  ],
});

export const getTextWidth = (size: Size) => {
  switch (size) {
    case "small":
      return 1.5;
    case "medium":
      return 2.25;
    case "large":
      return 3.75;
    default:
      return 0;
  }
};

export const convertNumberToFullWidth = (num: number) => {
  const fullWidthString = "０１２３４５６７８９";
  const charList: string[] = [];
  for (let char of num.toString()) {
    const charNum = Number(char);
    if (Number.isInteger(charNum)) {
      charList.push(fullWidthString[charNum]);
    } else {
      charList.push(char);
    }
  }
  return charList.join("");
};
`;

export const countdownLabelComponentCode = `// countdown-label.tsx
import clsx from "clsx";
import { labelVariant, wrapperVariant } from "./countdown.helpers";
import type { CountdownLabelProps } from "./countdown.types";

const CountdownLabel: React.FC<CountdownLabelProps> = ({
  variant,
  type,
  size,
  hidden,
  children,
}) => {
  const getLabel = () => {
    switch (type) {
      case "day": {
        if (variant === "colon_label") return ":";
        if (variant === "abbreviated_label") return "d";
        return "days";
      }
      case "hour": {
        if (variant === "colon_label") return ":";
        if (variant === "abbreviated_label") return "h";
        return "hours";
      }
      case "minute": {
        if (variant === "colon_label") return ":";
        if (variant === "line_label") return "minutes";
        if (variant === "abbreviated_label") return "m";
        return "min";
      }
      case "second": {
        if (variant === "colon_label") return "";
        if (variant === "line_label") return "seconds";
        if (variant === "abbreviated_label") return "s";
        return "sec";
      }
      default:
        return "";
    }
  };

  return (
    <div className={clsx(wrapperVariant({ variant, size }), { hidden })}>
      {children}
      <div className={labelVariant({ variant, size })}>{getLabel()}</div>
    </div>
  );
};

export default CountdownLabel;
`;

export const countdownItemComponentCode = `// countdown-item.tsx
import clsx from "clsx";
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
          wrapperRef.current!.style.top = \`-\${time * height}rem\`;
        },
      }),
      [height],
    );

    return (
      <div
        style={{
          width: \`\${width}rem\`,
          height: \`\${height}rem\`,
        }}
        className="relative overflow-hidden"
      >
        <div
          ref={wrapperRef}
          className={clsx(
            "absolute inset-x-0 flex flex-col items-center transition-all duration-150 motion-reduce:transform-none",
          )}
        >
          <p style={{ lineHeight: \`\${height}rem\` }} className="whitespace-pre">
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

export default CountdownItem;
`;

export const countdownComponentCode = `// countdown.component.tsx
import clsx from "clsx";
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
      className={clsx(
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
`;
