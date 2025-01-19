export const imageDiffComponentCode = `// image-diff.component.tsx
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export interface ImageDiffProps {
  imgSrcLeft: string;
  imgSrcRight: string;
  resizePosition?: number;
  size: { width: number; height: number } | { ratio: number };
  className?: string;
}

const ImageDiff: React.FC<ImageDiffProps> = ({
  imgSrcLeft,
  imgSrcRight,
  resizePosition = 50,
  size,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetImageRef = useRef<HTMLDivElement | null>(null);
  const resizeWrapperRef = useRef<HTMLDivElement | null>(null);
  const resizeButtonRef = useRef<HTMLDivElement | null>(null);

  const isClicked = useRef<boolean>(false);
  const startMouseX = useRef<number>(0);
  const posXBeforeMove = useRef<number>(0);

  const [calcWidth, setCalcWidth] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const width = "ratio" in size ? calcWidth : size.width;
  const height = "ratio" in size ? calcWidth / size.ratio : size.height;

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setCalcWidth(entry.contentRect.width);
      });
    });
    observer.observe(containerRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const slider = resizeButtonRef.current!;

    const setPosition = (x: number) => {
      targetImageRef.current!.style.width = \`\${x}px\`;
      resizeWrapperRef.current!.style.left = \`\${x - 16}px\`;
      setLoaded(true);
    };

    const slideReady = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      isClicked.current = true;
      startMouseX.current =
        e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      posXBeforeMove.current = targetImageRef.current!.offsetWidth;
    };

    const slideFinish = () => {
      isClicked.current = false;
    };

    const slideMove = (e: MouseEvent | TouchEvent) => {
      if (!isClicked.current) return;
      const movedX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const diffX = posXBeforeMove.current + movedX - startMouseX.current;
      const newPosX = diffX < 16 ? 16 : diffX > width - 16 ? width - 16 : diffX;
      setPosition(newPosX);
    };

    setPosition((width * resizePosition) / 100);

    slider.addEventListener("mousedown", slideReady);
    slider.addEventListener("touchstart", slideReady);

    window.addEventListener("mouseup", slideFinish);
    window.addEventListener("touchend", slideFinish);

    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);

    return () => {
      slider.removeEventListener("mousedown", slideReady);
      slider.removeEventListener("touchstart", slideReady);

      window.removeEventListener("mouseup", slideFinish);
      window.removeEventListener("touchend", slideFinish);

      window.removeEventListener("mousemove", slideMove);
      window.removeEventListener("touchmove", slideMove);
    };
  }, [width, resizePosition]);

  return (
    <div
      ref={containerRef}
      style={{ width: width || "auto", height }}
      className={clsx(
        "relative w-full overflow-hidden rounded-lg",
        { invisible: !loaded },
        className,
      )}
    >
      <div className="absolute h-auto w-auto overflow-hidden">
        <img
          style={{ width, height }}
          className="block object-cover align-middle"
          src={imgSrcRight}
        />
      </div>
      <div
        ref={targetImageRef}
        className="absolute h-auto w-auto overflow-hidden"
      >
        <img
          style={{ minWidth: width, width, height }}
          className="block object-cover align-middle"
          src={imgSrcLeft}
        />
      </div>
      <div ref={resizeWrapperRef} className="absolute inset-y-0 w-[32px]">
        <div className="mx-auto h-full w-[2px] bg-white dark:bg-neutral-800" />
        <div className="absolute inset-0 flex items-center">
          <div
            ref={resizeButtonRef}
            className="h-[32px] w-[32px] cursor-ew-resize rounded-full border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDiff;
`;
