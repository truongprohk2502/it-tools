import { cn } from "@/lib/utils";
import { progressBarVariants, progressVariants } from "./progress.helpers";
import type { ProgressProps } from "./progress.types";

const Progress: React.FC<ProgressProps> = ({
  value,
  size,
  color,
  hasStripes,
  animateStripes,
  className,
}) => {
  return (
    <div className={cn(progressVariants({ size }), className)}>
      <div
        data-stripe={Boolean(hasStripes)}
        data-animate={Boolean(animateStripes)}
        className={progressBarVariants({ color })}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;
