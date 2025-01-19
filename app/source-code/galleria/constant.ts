export const galleriaTailwindCode = `// tailwind.config.js
module.exports = {
  ...
  theme: {
    ...
    extend: {
      ...
      keyframes: {
        splash: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        splash: "splash 0.15s ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
  ]
};
`;

export const galleriaComponentCode = `// galleria.component.tsx
import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface GalleriaProps {
  images: Array<{ photoUrl: string; thumbUrl: string }>;
  animation?: boolean;
  className?: string;
}

const Galleria: React.FC<GalleriaProps> = ({
  images,
  animation = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef<number>(0);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleImages, setVisibleImages] = useState<number>(5);
  const [changedCount, setChangedCount] = useState<number>(0);

  const getVisibleImagesCount = (containerWidth: number) => {
    const imageWidth = 88;
    return Math.floor(containerWidth / imageWidth);
  };

  useEffect(() => {
    const updateScrollPosition = (
      containerWidth: number,
      visibleImages: number,
    ) => {
      const container = containerRef.current!;
      const itemWidth = containerWidth / visibleImages;
      const scrollLeft = itemWidth * currentIndexRef.current;
      container.scrollTo({
        left: scrollLeft,
        behavior: "instant",
      });
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const containerWidth = entry.contentRect.width;
        const visibleImages = getVisibleImagesCount(containerWidth);
        setVisibleImages(visibleImages);
        updateScrollPosition(containerWidth, visibleImages);
      });
    });

    observer.observe(containerRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const containerWidth = containerRef.current!.clientWidth;
    const visibleImages = getVisibleImagesCount(containerWidth);
    setVisibleImages(visibleImages);
  }, []);

  useEffect(() => {
    const container = containerRef.current!;
    const itemWidth = container.clientWidth / visibleImages;
    const scrollLeft = itemWidth * currentIndexRef.current;
    container.scrollTo({
      left: scrollLeft,
      behavior: "instant",
    });
  }, [visibleImages]);

  const changeCurrentIndex = (index: number) => {
    setChangedCount((prev) => prev + 1);
    setCurrentIndex(index);
    currentIndexRef.current = index;
  };

  const handleNext = (step: number) => {
    if (currentIndex >= images.length - step) return;

    const newIndex = currentIndex + step;

    const container = containerRef.current!;

    const scrollLeft =
      container.scrollLeft + (step * container.clientWidth) / visibleImages;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    changeCurrentIndex(newIndex);
  };

  const handlePrev = (step: number) => {
    if (currentIndex < step) return;

    const newIndex = currentIndex - step;

    const container = containerRef.current!;

    const scrollLeft =
      container.scrollLeft - (step * container.clientWidth) / visibleImages;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    changeCurrentIndex(newIndex);
  };

  const handleClick = (index: number) => {
    if (index === currentIndex) return;
    if (index < currentIndex) handlePrev(currentIndex - index);
    else handleNext(index - currentIndex);
  };

  return (
    <div
      style={{ aspectRatio: 1 }}
      className={clsx(
        "flex w-full min-w-[32rem] flex-col bg-neutral-900",
        className,
      )}
    >
      <div className="relative flex-auto">
        <img
          src={images[currentIndex]?.photoUrl}
          alt=""
          className="h-full w-full object-cover"
        />
        {animation && changedCount > 0 && (
          <div
            key={changedCount}
            className="animate-splash absolute inset-0 bg-white fill-mode-forwards"
          />
        )}
      </div>
      <div className="flex h-[5rem] items-center">
        <button
          className="mx-2 bg-transparent text-white disabled:text-neutral-500"
          disabled={currentIndex === 0}
          onClick={() => handlePrev(1)}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <div
          ref={containerRef}
          className="scrollbar-hide flex flex-auto flex-nowrap overflow-auto"
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{ width: \`\${100 / visibleImages}%\` }}
              className="h-[3.5rem] flex-shrink-0 px-2"
            >
              <div
                className="relative h-full w-full cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <img
                  src={image.thumbUrl}
                  alt=""
                  className="h-full w-full cursor-pointer select-none object-cover"
                />
                {index !== currentIndex && (
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          className="mx-2 bg-transparent text-white disabled:text-neutral-500"
          disabled={currentIndex === images.length - 1}
          onClick={() => handleNext(1)}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Galleria;
`;
