import { cn } from "@/lib/utils";
import { CELL_SIZE, PADDING_SIZE } from "../constants";

interface Props {
  id: number;
  x: number;
  y: number;
  value: number;
  destroyed: boolean;
  onDestroy: (id: number) => void;
}

const BoardCard: React.FC<Props> = ({
  id,
  x,
  y,
  value,
  destroyed,
  onDestroy,
}) => {
  const getTop = () => PADDING_SIZE * (y + 1) + CELL_SIZE * y;
  const getLeft = () => PADDING_SIZE * (x + 1) + CELL_SIZE * x;

  const handleDestroy = () => {
    if (destroyed) onDestroy(id);
  };

  return (
    <div
      style={{
        width: `${CELL_SIZE}rem`,
        height: `${CELL_SIZE}rem`,
        top: `${getTop()}rem`,
        left: `${getLeft()}rem`,
      }}
      className={cn(
        "absolute flex animate-scale-in items-center justify-center rounded-lg opacity-100 transition-all duration-150",
        {
          "bg-amber-900 text-white": value === 1024,
          "bg-amber-800 text-white": value === 512,
          "bg-amber-700 text-white": value === 256,
          "bg-amber-600 text-white": value === 128,
          "bg-amber-500 text-black": value === 64,
          "bg-amber-400 text-black": value === 32,
          "bg-amber-300 text-black": value === 16,
          "bg-amber-200 text-black": value === 8,
          "bg-amber-100 text-black": value === 4,
          "bg-amber-50 text-black": value === 2,
        },
        {
          "opacity-0": destroyed,
        },
      )}
      onTransitionEnd={handleDestroy}
    >
      <span className="text-2xl font-bold text-neutral-700">{value}</span>
    </div>
  );
};

export default BoardCard;
