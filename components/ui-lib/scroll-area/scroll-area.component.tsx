"use client";

import { cn } from "@/lib/utils";
import debounce from "lodash/debounce";
import { forwardRef, useCallback, useEffect, useRef } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  wrapperClassname?: string;
}

const ScrollArea = forwardRef<HTMLDivElement, Props>(
  ({ className, wrapperClassname, children, ...props }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const scrollbarRef = useRef<HTMLDivElement>(null);
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const scrollThumbRef = useRef<HTMLDivElement>(null);
    const observer = useRef<ResizeObserver | null>(null);

    const thumbHeight = useRef<number>(20);
    const scrollStartPosition = useRef<number>(0);
    const initialScrollTop = useRef<number>(0);
    const isDragging = useRef<boolean>(false);
    const isHovering = useRef<boolean>(false);

    const handleResize = (ref: HTMLDivElement, trackSize: number) => {
      const { clientHeight, scrollHeight } = ref;
      thumbHeight.current = Math.max(
        (clientHeight / scrollHeight) * trackSize,
        20,
      );
      scrollThumbRef.current!.style.height = `${thumbHeight.current}px`;
    };

    const handleTrackClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();

        const { clientY } = e;
        const target = e.target as HTMLDivElement;
        const rect = target.getBoundingClientRect();
        const trackTop = rect.top;
        const thumbOffset = thumbHeight.current / 2;
        const clickRatio =
          (clientY - trackTop - thumbOffset) /
          scrollTrackRef.current!.clientHeight;
        const scrollAmount = Math.floor(
          clickRatio * contentRef.current!.scrollHeight,
        );
        contentRef.current!.scrollTo({
          top: scrollAmount,
          behavior: "smooth",
        });
      },
      [],
    );

    const handleThumbMousedown = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
      e.preventDefault();
      e.stopPropagation();

      scrollStartPosition.current = e.clientY;
      initialScrollTop.current = contentRef.current!.scrollTop;
      isDragging.current = true;
    };

    useEffect(() => {
      const handleThumbMouseup = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isDragging.current = false;
      };

      const handleThumbMousemove = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isDragging.current) return;

        const {
          scrollHeight: contentScrollHeight,
          offsetHeight: contentOffsetHeight,
        } = contentRef.current!;

        const deltaY =
          (e.clientY - scrollStartPosition.current) *
          (contentOffsetHeight / thumbHeight.current);
        const newScrollTop = Math.min(
          initialScrollTop.current + deltaY,
          contentScrollHeight - contentOffsetHeight,
        );

        contentRef.current!.scrollTop = newScrollTop;
      };

      document.addEventListener("mousemove", handleThumbMousemove);
      document.addEventListener("mouseup", handleThumbMouseup);
      document.addEventListener("mouseleave", handleThumbMouseup);

      return () => {
        document.removeEventListener("mousemove", handleThumbMousemove);
        document.removeEventListener("mouseup", handleThumbMouseup);
        document.removeEventListener("mouseleave", handleThumbMouseup);
      };
    }, []);

    useEffect(() => {
      const ref = contentRef.current!;
      const { clientHeight: trackSize } = scrollTrackRef.current!;

      handleResize(ref, trackSize);

      observer.current = new ResizeObserver(() => {
        handleResize(ref, trackSize);
      });

      observer.current.observe(ref);

      return () => {
        observer.current?.unobserve(ref);
      };
    }, []);

    useEffect(() => {
      const ref = contentRef.current!;

      const handleThumbPosition = () => {
        const { scrollTop: contentTop, scrollHeight: contentHeight } =
          contentRef.current!;
        const { clientHeight: trackHeight } = scrollTrackRef.current!;
        let newTop = (+contentTop / +contentHeight) * trackHeight;
        newTop = Math.min(newTop, trackHeight - thumbHeight.current);
        const thumb = scrollThumbRef.current!;
        thumb.style.top = `${newTop}px`;
      };

      ref.addEventListener("scroll", handleThumbPosition);

      return () => {
        ref.removeEventListener("scroll", handleThumbPosition);
      };
    }, []);

    useEffect(() => {
      const ref = contentRef.current!;

      const handleMouseLeaveDebounce = debounce(() => {
        if (isDragging.current || isHovering.current) return;
        scrollbarRef.current!.style.visibility = "hidden";
      }, 1000);

      const handleMouseEnter = () => {
        isHovering.current = true;
        const element = contentRef.current!;
        if (element.scrollHeight > element.offsetHeight)
          scrollbarRef.current!.style.visibility = "visible";
      };

      const handleMouseLeave = () => {
        isHovering.current = false;
      };

      ref.addEventListener("mouseleave", handleMouseLeaveDebounce);
      ref.addEventListener("mouseleave", handleMouseLeave);
      ref.addEventListener("mouseenter", handleMouseEnter);
      document.addEventListener("mouseup", handleMouseLeaveDebounce);
      document.addEventListener("mouseleave", handleMouseLeaveDebounce);

      return () => {
        ref.removeEventListener("mouseleave", handleMouseLeaveDebounce);
        ref.removeEventListener("mouseleave", handleMouseLeave);
        ref.removeEventListener("mouseenter", handleMouseEnter);
        document.removeEventListener("mouseup", handleMouseLeaveDebounce);
        document.removeEventListener("mouseleave", handleMouseLeaveDebounce);
      };
    }, []);

    return (
      <div
        ref={ref}
        className={cn("relative h-full w-full", className)}
        {...props}
      >
        <div
          ref={contentRef}
          className={cn(
            "h-full w-full overflow-auto scrollbar-hide",
            wrapperClassname,
          )}
        >
          {children}
        </div>
        <div
          ref={scrollbarRef}
          className="absolute inset-y-0 right-0 w-2 rounded-md"
        >
          <div
            ref={scrollTrackRef}
            className="absolute inset-0 rounded-md bg-neutral-200"
            onClick={handleTrackClick}
          />
          <div
            ref={scrollThumbRef}
            className="absolute inset-x-0 rounded-md bg-neutral-400"
            onMouseDown={handleThumbMousedown}
          />
        </div>
      </div>
    );
  },
);

ScrollArea.displayName = "ScrollArea";

export default ScrollArea;
