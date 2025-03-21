import { CELL_SIZE, PADDING_SIZE } from "../constants";

interface Props {
  x: number;
  y: number;
  value: number;
}

const BoardCard: React.FC<Props> = ({ x, y, value }) => {
  const getTop = () => PADDING_SIZE * (y + 1) + CELL_SIZE * y;
  const getLeft = () => PADDING_SIZE * (x + 1) + CELL_SIZE * x;

  return (
    <div
      style={{
        width: `${CELL_SIZE}rem`,
        height: `${CELL_SIZE}rem`,
        top: `${getTop()}rem`,
        left: `${getLeft()}rem`,
      }}
      className="absolute flex items-center justify-center rounded-lg bg-red-200"
    >
      <span className="text-2xl font-bold text-neutral-700">{value}</span>
    </div>
  );
};

export default BoardCard;
