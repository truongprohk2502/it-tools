"use client";

import type { PuzzlePiece } from "../types";

interface Props {
  piece: PuzzlePiece;
  size: number;
  onClick: () => void;
}

const PuzzleCell: React.FC<Props> = ({ piece, size, onClick }) => {
  return (
    <div
      key={piece.id}
      style={{
        top: `${(piece.y * 100) / size}%`,
        left: `${(piece.x * 100) / size}%`,
        width: `${100 / size}%`,
        height: `${100 / size}%`,
        backgroundImage: `url(${piece.dataUrl})`,
      }}
      className="absolute cursor-pointer border border-neutral-700 bg-neutral-200 bg-contain bg-center transition-all duration-150 dark:bg-neutral-500"
      onClick={onClick}
    >
      <div className="m-0.5 flex h-6 w-6 select-none items-center justify-center rounded-full bg-red-500 text-xs text-white">
        {piece.id}
      </div>
    </div>
  );
};

export default PuzzleCell;
