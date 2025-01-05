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
}

const Avatar: React.FC<Props> = ({
  src,
  name,
  radius,
  size,
  bordered,
  disabled,
  randomFallbackColor,
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
          showingFallback && randomFallbackColor
            ? randomColor.bgColor
            : "#a3a3a3",
      }}
      className={clsx(wrapperVariants({ size }), radiusVariants({ radius }))}
    >
      {showingFallback ? (
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
          )}
        >
          <span className={textVariants({ size })}>
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          className={clsx("h-full w-full", radiusVariants({ radius }))}
          onError={() => setShowingFallback(true)}
        />
      )}
    </div>
  );
};

export default Avatar;
