import clsx from "clsx";
import { useCallback, useEffect, useRef } from "react";

type Position = {
  x: number;
  y: number;
};

interface Props {
  value?: number;
  max: number;
  showLabel?: boolean;
  size?: string | number;
  barSizePercent?: number;
  barThick?: string | number;
  labelSize?: "small" | "medium" | "large";
  onChange?: (value: number) => void;
  onEnd?: (value: number) => void;
}

const AngleSlider: React.FC<Props> = ({
  value = 0,
  showLabel,
  barSizePercent = 100,
  barThick = "2px",
  max,
  size = "5rem",
  labelSize = "medium",
  onChange,
  onEnd,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rotateBarRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const convertAngleToValue = useCallback(
    (angle: number) => {
      const positiveAngle = angle <= 0 ? 360 + angle : angle;
      const standardAngle = (positiveAngle + 90) % 360;
      const ratio = standardAngle / 360;
      const value = Math.round(ratio * max);
      return value;
    },
    [max],
  );

  const convertValueToAngle = useCallback(
    (value: number | undefined) => {
      if (value === undefined) return -90;
      const ratio = value / max;
      const angle = Math.round(ratio * 360) - 90;
      return angle;
    },
    [max],
  );

  const isRotating = useRef<boolean>(false);
  const centerPos = useRef<Position>({ x: 0, y: 0 });
  const rotateAngle = useRef<number>(convertValueToAngle(value));

  useEffect(() => {
    if (value === undefined) return;
    const angle = convertValueToAngle(value);
    rotateBarRef.current!.style.transform = `rotate(${angle}deg)`;
  }, [value, convertValueToAngle]);

  useEffect(() => {
    const wrapper = wrapperRef.current!;

    const getCenterPositionOfCircleSlider = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const centerX = wrapperRect.left + wrapperRect.width / 2;
      const centerY = wrapperRect.top + wrapperRect.height / 2;
      return { x: centerX, y: centerY };
    };

    const updateAndGetAngle = (e: MouseEvent) => {
      if (!isRotating.current) return;
      const deltaX = e.clientX - centerPos.current.x;
      const deltaY = e.clientY - centerPos.current.y;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      rotateBarRef.current!.style.transform = `rotate(${angle}deg)`;
      rotateAngle.current = angle;
      const value = convertAngleToValue(angle);
      labelRef.current!.textContent = value.toString();
      return angle;
    };

    const handleChangeAngle = (angle: number, ended?: boolean) => {
      const value = convertAngleToValue(angle);
      if (onChange) onChange(value);
      if (ended && onEnd) onEnd(value);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isRotating.current = true;
      centerPos.current = getCenterPositionOfCircleSlider();
      const angle = updateAndGetAngle(e);
      if (angle !== undefined) handleChangeAngle(angle);
    };

    const handleMouseUp = () => {
      if (!isRotating.current) return;
      isRotating.current = false;
      if (rotateAngle.current !== undefined)
        handleChangeAngle(rotateAngle.current, true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isRotating.current) return;
      const angle = updateAndGetAngle(e);
      if (angle !== undefined) handleChangeAngle(angle);
    };

    wrapper.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      wrapper.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [convertAngleToValue, onChange, onEnd]);

  return (
    <div
      ref={wrapperRef}
      style={{ width: size, height: size }}
      className="relative flex items-center justify-end rounded-full bg-neutral-200 dark:bg-neutral-700"
    >
      <div
        ref={rotateBarRef}
        style={{ height: barThick }}
        className="w-1/2 origin-left bg-neutral-700 dark:bg-neutral-200"
      />
      <div className="absolute flex h-full w-full items-center justify-center bg-transparent">
        <div
          style={{
            width: `${100 - barSizePercent}%`,
            height: `${100 - barSizePercent}%`,
          }}
          className="rounded-full bg-neutral-200 dark:bg-neutral-700"
        />
      </div>
      <div className="absolute flex h-full w-full items-center justify-center bg-transparent">
        <span
          ref={labelRef}
          className={clsx(
            "select-none",
            { invisible: !showLabel },
            {
              "text-xs": labelSize === "small",
              "text-sm": labelSize === "medium",
              "text-lg": labelSize === "large",
            },
          )}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

export default AngleSlider;
