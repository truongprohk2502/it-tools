"use client";

import { cn } from "@/lib/utils";
import { Fragment, useId } from "react";
import { ratingVariants, STAR_ICON_URI } from "./rating.helpers";
import type { RatingProps } from "./rating.types";

const Rating: React.FC<RatingProps> = ({
  name,
  value,
  total = 5,
  hasHalfValue = false,
  disabled,
  color = "primary",
  size = "medium",
  className,
  onChange,
}) => {
  const id = useId();

  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: Math.floor(total) }, (_, i) => i + 1).map(
        (star) => (
          <Fragment key={star}>
            {Array.from({ length: 2 }).map((_, index) => {
              if (!hasHalfValue && index === 1) return null;

              const radioValue =
                hasHalfValue && index === 0 ? star - 0.5 : star;

              const maskImage = `url(${STAR_ICON_URI})`;
              const maskPosition = hasHalfValue
                ? index
                  ? "right"
                  : "left"
                : "center";
              const maskSize = hasHalfValue ? "200%" : "contain";
              const maskRepeat = "no-repeat";

              return (
                <input
                  key={index}
                  type="radio"
                  name={name || id}
                  value={radioValue}
                  data-checked={radioValue <= value}
                  data-left={index === 0 && star !== 1}
                  data-half={hasHalfValue}
                  disabled={disabled}
                  className={ratingVariants({ color, size })}
                  style={{
                    maskImage,
                    WebkitMaskImage: maskImage,
                    maskPosition,
                    WebkitMaskPosition: maskPosition,
                    maskSize,
                    WebkitMaskSize: maskSize,
                    maskRepeat,
                    WebkitMaskRepeat: maskRepeat,
                  }}
                  onChange={() => onChange(radioValue)}
                />
              );
            })}
          </Fragment>
        ),
      )}
    </div>
  );
};

export default Rating;
