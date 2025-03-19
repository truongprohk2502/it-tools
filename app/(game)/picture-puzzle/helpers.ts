import random from "lodash/random";
import { PuzzlePiece } from "./types";

export const getDefaultPieces = (size: number) =>
  Array.from({ length: size * size })
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      x: index % size,
      y: Math.floor(index / size),
    }));

export const checkWin = (pieces: PuzzlePiece[], size: number) => {
  let count = 0;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (x === size - 1 && y === size - 1) return true;

      const piece = pieces[count];

      if (piece.id !== count + 1 || piece.x !== x || piece.y !== y)
        return false;

      count++;
    }
  }

  return true;
};

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

  return pieces;
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

const getAvailablePositions = (
  pieces: PuzzlePiece[],
  blankPosition: { x: number; y: number },
  size: number,
) => {
  const availablePieces: PuzzlePiece[] = [];

  if (blankPosition.x > 0) {
    const availablePiece = pieces.find(
      (piece) => piece.x === blankPosition.x - 1 && piece.y === blankPosition.y,
    );
    if (availablePiece) availablePieces.push(availablePiece);
  }

  if (blankPosition.x < size - 1) {
    const availablePiece = pieces.find(
      (piece) => piece.x === blankPosition.x + 1 && piece.y === blankPosition.y,
    );
    if (availablePiece) availablePieces.push(availablePiece);
  }

  if (blankPosition.y > 0) {
    const availablePiece = pieces.find(
      (piece) => piece.x === blankPosition.x && piece.y === blankPosition.y - 1,
    );
    if (availablePiece) availablePieces.push(availablePiece);
  }

  if (blankPosition.y < size - 1) {
    const availablePiece = pieces.find(
      (piece) => piece.x === blankPosition.x && piece.y === blankPosition.y + 1,
    );
    if (availablePiece) availablePieces.push(availablePiece);
  }

  return availablePieces;
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
  const clonedPieces = JSON.parse(JSON.stringify(pieces));

  for (let i = 0; i < size * 30; i++) {
    const blankPosition = getBlankPosition(clonedPieces, size);
    const availablePieces = getAvailablePositions(
      clonedPieces,
      blankPosition,
      size,
    );
    const rand = random(availablePieces.length - 1);
    const newPosition = availablePieces[rand];
    newPosition.x = blankPosition.x;
    newPosition.y = blankPosition.y;
  }

  return clonedPieces;
};
