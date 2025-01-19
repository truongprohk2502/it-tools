import { cn } from "@/lib/utils";

export interface SkeletonProps {
  shape?: "square" | "circle";
  width?: string | number;
  height?: string | number;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  shape = "square",
  width = "100%",
  height = "auto",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex-shrink-0 flex-grow-0 overflow-hidden bg-neutral-300 shadow-md dark:bg-neutral-500",
        {
          "aspect-square rounded-full": shape === "circle",
          "rounded-md": shape === "square",
        },
        className,
      )}
      style={{ width, height }}
    >
      <div
        className="animate-skeleton absolute inset-0"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0) 25%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 75%,
            rgba(255, 255, 255, 0)
          )`,
        }}
      />
    </div>
  );
};

export default Skeleton;
