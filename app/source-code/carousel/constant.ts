export const carouselArrowButtonCode = `// arrow-button.tsx
import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { forwardRef } from "react";

interface Props {
  type: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}

const ArrowButton = forwardRef<HTMLButtonElement, Props>(
  ({ type, disabled, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={clsx(
          "absolute top-1/2 z-[1] h-12 w-12 -translate-y-1/2 rounded-full shadow-md",
          "bg-white text-neutral-900 opacity-80 disabled:opacity-50",
          "flex items-center justify-center",
          type === "prev" ? "left-6" : "right-6",
        )}
        disabled={disabled}
      >
        {type === "prev" ? (
          <ChevronLeftIcon width={24} height={24} />
        ) : (
          <ChevronRightIcon width={24} height={24} />
        )}
      </button>
    );
  },
);

ArrowButton.displayName = "ArrowButton";

export default ArrowButton;
`;

export const carouselPaginatorCode = `// paginator.tsx
import clsx from "clsx";

interface Props {
  current: number;
  total: number;
}

const Paginator: React.FC<Props> = ({ current, total }) => {
  const currentPage = current >= total - 1 ? total - 1 : current;

  return (
    <div className="absolute inset-x-3 bottom-4 z-[1] flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={clsx(
            "h-2 w-2 rounded-full shadow-md",
            index === currentPage ? "bg-neutral-200" : "bg-neutral-400",
          )}
        />
      ))}
    </div>
  );
};

export default Paginator;
`;

export const carouselComponentCode = `// carousel.component.tsx
import clsx from "clsx";
import { Children, useEffect, useLayoutEffect, useRef, useState } from "react";
import ArrowButton from "./arrow-button";
import Paginator from "./paginator";

export interface CarouselProps {
  children: React.ReactNode;
  show?: number;
  infiniteLoop?: boolean;
  showIndicator?: boolean;
  autoplay?: number;
  disabledAutoplay?: boolean;
  className?: string;
  itemClassName?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  show = 1,
  infiniteLoop = false,
  showIndicator = true,
  autoplay = 3000,
  disabledAutoplay,
  className,
  itemClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    infiniteLoop ? show : 0,
  );
  const [length, setLength] = useState<number>(
    infiniteLoop
      ? Children.count(children) + show * 2
      : Children.count(children),
  );
  const [totalPages, setTotalPages] = useState(
    Children.count(children) > show ? Children.count(children) - show + 1 : 1,
  );
  const [isRepeating, setIsRepeating] = useState<boolean>(
    infiniteLoop && Children.count(children) > show,
  );

  const isForeground = useRef<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const handleChangeIndex = (index: number, animation: boolean) => {
    wrapperRef.current!.style.transition = animation
      ? "transform 0.15s linear"
      : "none";
    wrapperRef.current!.style.transform = \`translateX(-\${(index * 100) / show}%)\`;
    setCurrentIndex(+index);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      isForeground.current = document.visibilityState === "hidden";
    };

    handleVisibilityChange();

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (autoplay <= 0 || !infiniteLoop || disabledAutoplay) return;

    const interval = setInterval(() => {
      if (isForeground.current) return;
      nextButtonRef.current?.click();
    }, autoplay);

    return () => clearInterval(interval);
  }, [autoplay, infiniteLoop, disabledAutoplay]);

  useLayoutEffect(() => {
    const childrenCount = Children.count(children);
    setLength(infiniteLoop ? childrenCount + show * 2 : childrenCount);
    setIsRepeating(infiniteLoop && childrenCount > show);
    handleChangeIndex(infiniteLoop ? show : 0, false);
    setTotalPages(childrenCount > show ? childrenCount - show + 1 : 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, infiniteLoop, show]);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      handleChangeIndex(currentIndex + 1, true);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      handleChangeIndex(currentIndex - 1, true);
    }
  };

  const handleTransitionEnd = () => {
    if (!isRepeating) return;

    if (currentIndex === 0) {
      handleChangeIndex(length - show * 2, false);
    } else if (currentIndex === length - show) {
      handleChangeIndex(show, false);
    }
  };

  const getList = () => {
    const childList = Children.toArray(children);
    const output = [];

    if (isRepeating) {
      for (let index = 0; index < show; index++) {
        output.unshift(childList[childList.length - 1 - index]);
      }
    }

    for (let index = 0; index < childList.length; index++) {
      output.push(childList[index]);
    }

    if (isRepeating) {
      for (let index = 0; index < show; index++) {
        output.push(childList[index]);
      }
    }

    return output;
  };

  return (
    <div className={clsx("flex w-full flex-col", className)}>
      <div className="relative flex w-full">
        <ArrowButton
          type="prev"
          disabled={!isRepeating && currentIndex <= 0}
          onClick={prev}
        />
        <ArrowButton
          ref={nextButtonRef}
          type="next"
          disabled={!isRepeating && currentIndex >= length - show}
          onClick={next}
        />
        {showIndicator && (
          <Paginator
            current={infiniteLoop ? currentIndex - show : currentIndex}
            total={totalPages}
          />
        )}
        <div className="h-full w-full overflow-hidden">
          <div
            ref={wrapperRef}
            style={{ transform: \`translateX(-\${infiniteLoop ? 100 : 0}%)\` }}
            className="scrollbar-hide flex"
            onTransitionEnd={handleTransitionEnd}
          >
            {getList().map((child, index) => (
              <div
                key={index}
                style={{ width: \`calc(100% / \${show})\` }}
                className={clsx(
                  "shrink-0 grow",
                  { "p-2": show > 1 },
                  itemClassName,
                )}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
`;
