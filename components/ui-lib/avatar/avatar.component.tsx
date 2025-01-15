"use client";

import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import {
  getRandomHexColor,
  getTextColor,
  radiusVariants,
  textVariants,
  wrapperVariants,
} from "./avatar.helpers";
import type { AvatarProps } from "./avatar.types";

const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  radius,
  size,
  hideImage,
  bordered,
  disabled,
  randomFallbackColor,
  className,
  imageClassName,
  fallbackClassName,
}) => {
  const [showingFallback, setShowingFallback] = useState<boolean>(!src);

  const randomColor = useMemo(() => {
    const bgColor = getRandomHexColor();
    const textColor = getTextColor(bgColor);
    return { bgColor, textColor };
  }, []);

  return (
    <div
      data-bordered={Boolean(bordered)}
      data-disabled={Boolean(disabled)}
      style={{
        borderColor:
          (hideImage || showingFallback) && randomFallbackColor
            ? randomColor.bgColor
            : "#a3a3a3",
      }}
      className={cn(
        wrapperVariants({ size }),
        radiusVariants({ radius }),
        className,
      )}
    >
      {hideImage || showingFallback ? (
        <div
          style={{
            backgroundColor: randomFallbackColor
              ? randomColor.bgColor
              : "#a3a3a3",
            color: randomFallbackColor ? randomColor.textColor : "white",
          }}
          className={cn(
            "flex h-full w-full items-center justify-center",
            radiusVariants({ radius }),
            fallbackClassName,
          )}
        >
          <span className={textVariants({ size })}>
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={name}
          className={cn(
            "h-full w-full",
            radiusVariants({ radius }),
            imageClassName,
          )}
          onError={() => setShowingFallback(true)}
        />
      )}
    </div>
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
