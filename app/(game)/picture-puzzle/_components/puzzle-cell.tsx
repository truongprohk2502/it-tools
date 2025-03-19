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
      {piece.id}
    </div>
  );
};

export default PuzzleCell;
