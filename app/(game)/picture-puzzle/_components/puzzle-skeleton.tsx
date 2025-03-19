import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  size: number;
  x: number;
  y: number;
}

const PuzzleSkeleton: React.FC<Props> = ({ size, x, y }) => {
  return (
    <Skeleton
      style={{
        top: `${(y * 100) / size}%`,
        left: `${(x * 100) / size}%`,
        width: `${100 / size}%`,
        height: `${100 / size}%`,
      }}
      className="absolute bg-neutral-200 dark:bg-neutral-500"
    />
  );
};

export default PuzzleSkeleton;
