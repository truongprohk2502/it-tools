import { PuzzlePiece } from "./types";

export const getDefaultPieces = (size: number) =>
  Array.from({ length: size * size })
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      x: index % size,
      y: Math.floor(index / size),
    }));

export const splitImage = (
  img: HTMLImageElement,
  canvas: HTMLCanvasElement,
  size: number,
) => {
  const ctx = canvas.getContext("2d")!;

  const sourceSize = img.naturalWidth;
  const pieceSize = img.naturalWidth / size;

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const pieces: PuzzlePiece[] = [];

  let count = 0;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      count++;
      ctx.drawImage(
        img,
        x * pieceSize,
        y * pieceSize,
        pieceSize,
        pieceSize,
        0,
        0,
        sourceSize,
        sourceSize,
      );
      const dataUrl = canvas.toDataURL();
      pieces.push({ id: count, x, y, dataUrl });
    }
  }

  return pieces.slice(0, size * size - 1);
};

const getBlankPosition = (pieces: PuzzlePiece[], size: number) => {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const exist = pieces.find((piece) => piece.x === x && piece.y === y);
      if (!exist) return { x, y };
    }
  }

  return { x: -9999, y: -9999 };
};

export const getNextPosition = (
  pieces: PuzzlePiece[],
  current: PuzzlePiece,
  size: number,
) => {
  const blankPosition = getBlankPosition(pieces, size);

  if (current.x + 1 === blankPosition.x && current.y === blankPosition.y)
    return blankPosition;
  if (current.x - 1 === blankPosition.x && current.y === blankPosition.y)
    return blankPosition;
  if (current.x === blankPosition.x && current.y + 1 === blankPosition.y)
    return blankPosition;
  if (current.x === blankPosition.x && current.y - 1 === blankPosition.y)
    return blankPosition;

  return null;
};

export const shufflePieces = (pieces: PuzzlePiece[], size: number) => {
  // TODO: shuffle pieces
  return pieces;
};
