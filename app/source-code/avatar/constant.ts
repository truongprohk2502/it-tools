export const avatarHelpersCode = `// helpers.ts
import { cva } from "class-variance-authority";
import tinycolor from "tinycolor2";

export const getRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const getTextColor = (hex: string) => {
  return tinycolor(hex).isDark() ? "white" : "black";
};

export const radiusVariants = cva("", {
  variants: {
    radius: {
      small: "rounded-md",
      large: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    radius: "full",
  },
});

export const wrapperVariants = cva(
  "overflow-hidden p-[1px] data-[bordered=true]:border-[3px] border-solid data-[disabled=true]:opacity-60",
  {
    variants: {
      size: {
        small: "w-8 h-8",
        medium: "w-10 h-10",
        large: "w-14 h-14",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export const textVariants = cva("font-bold !leading-[0]", {
  variants: {
    size: {
      small: "text-lg",
      medium: "text-xl",
      large: "text-3xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
`;

export const avatarComponentCode = `// avatar.component.tsx
import { VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { useMemo, useState } from "react";
import {
  getRandomHexColor,
  getTextColor,
  radiusVariants,
  textVariants,
  wrapperVariants,
} from "./helpers";

interface Props
  extends VariantProps<typeof wrapperVariants>,
    VariantProps<typeof radiusVariants> {
  src?: string;
  name: string;
  bordered?: boolean;
  disabled?: boolean;
  randomFallbackColor?: boolean;
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
}

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
      className={clsx(
        wrapperVariants({ size }),
        radiusVariants({ radius }),
        className
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
          className={clsx(
            "flex h-full w-full items-center justify-center",
            radiusVariants({ radius }),
            fallbackClassName
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
          className={clsx(
            "h-full w-full",
            radiusVariants({ radius }),
            imageClassName
          )}
          onError={() => setShowingFallback(true)}
        />
      )}
    </div>
  );
};

export default Avatar;
`;
