import { Direction } from "./constants";
import type { BoardCell } from "./types";

export const checkWin = (cells: BoardCell[]) => {
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      const cell = cells.find((c) => c.x === x && c.y === y);
      if (cell?.value === 2048) return true;
    }
  }

  return false;
};

export const checkGameOver = (cells: BoardCell[]) => {
  const validCells = cells.filter((cell) => !cell.destroyed);

  if (validCells.length < 16) return false;

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      const cell = validCells.find((c) => c.x === x && c.y === y);

      if (!cell) return false;

      const nextRightCell = validCells.find((c) => c.x === x + 1 && c.y === y);

      if (!nextRightCell || cell.value === nextRightCell.value) return false;

      const nextDownCell = validCells.find((c) => c.x === x && c.y === y + 1);

      if (!nextDownCell || cell.value === nextDownCell.value) return false;
    }
  }

  return true;
};

const getShiftBlankCount = (
  cells: BoardCell[],
  current: BoardCell,
  direction: Direction,
) => {
  let count = 0;

  if (direction === Direction.Up) {
    if (current.y === 0) return count;
    for (let y = current.y - 1; y >= 0; y--) {
      const existCell = cells.some(
        (cell) => cell.x === current.x && cell.y === y,
      );
      if (existCell) break;
      count++;
    }
  } else if (direction === Direction.Down) {
    if (current.y === 3) return count;
    for (let y = current.y + 1; y < 4; y++) {
      const existCell = cells.some(
        (cell) => cell.x === current.x && cell.y === y,
      );
      if (existCell) break;
      count++;
    }
  } else if (direction === Direction.Left) {
    if (current.x === 0) return count;
    for (let x = current.x - 1; x >= 0; x--) {
      const existCell = cells.some(
        (cell) => cell.x === x && cell.y === current.y,
      );
      if (existCell) break;
      count++;
    }
  } else if (direction === Direction.Right) {
    if (current.x === 3) return count;
    for (let x = current.x + 1; x < 4; x++) {
      const existCell = cells.some(
        (cell) => cell.x === x && cell.y === current.y,
      );
      if (existCell) break;
      count++;
    }
  }

  return count;
};

const checkMerge = (
  cells: BoardCell[],
  current: BoardCell,
  direction: Direction,
) => {
  if (direction === Direction.Up) {
    if (current.y === 0) return false;
    for (let y = current.y - 1; y >= 0; y--) {
      const nearestCells = cells.filter((c) => c.x === current.x && c.y === y);
      if (nearestCells.length > 1) return false;
      const nearestCell = nearestCells[0];
      if (!nearestCell) continue;
      return nearestCell.destroyed;
    }
  } else if (direction === Direction.Down) {
    if (current.y === 3) return false;
    for (let y = current.y + 1; y < 4; y++) {
      const nearestCells = cells.filter((c) => c.x === current.x && c.y === y);
      if (nearestCells.length > 1) return false;
      const nearestCell = nearestCells[0];
      if (!nearestCell) continue;
      return nearestCell.destroyed;
    }
  } else if (direction === Direction.Left) {
    if (current.x === 0) return false;
    for (let x = current.x - 1; x >= 0; x--) {
      const nearestCells = cells.filter((c) => c.x === x && c.y === current.y);
      if (nearestCells.length > 1) return false;
      const nearestCell = nearestCells[0];
      if (!nearestCell) continue;
      return nearestCell.destroyed;
    }
  } else if (direction === Direction.Right) {
    if (current.x === 3) return false;
    for (let x = current.x + 1; x < 4; x++) {
      const nearestCells = cells.filter((c) => c.x === x && c.y === current.y);
      if (nearestCells.length > 1) return false;
      const nearestCell = nearestCells[0];
      if (!nearestCell) continue;
      return nearestCell.destroyed;
    }
  }

  return false;
};

const checkDestroy = (
  cells: BoardCell[],
  current: BoardCell,
  direction: Direction,
) => {
  if (direction === Direction.Up) {
    if (current.y === 3) return false;
    for (let y = current.y + 1; y < 4; y++) {
      const nearestCell = cells.find((c) => c.x === current.x && c.y === y);
      if (!nearestCell) continue;
      return nearestCell.value === current.value;
    }
  } else if (direction === Direction.Down) {
    if (current.y === 0) return false;
    for (let y = current.y - 1; y >= 0; y--) {
      const nearestCell = cells.find((c) => c.x === current.x && c.y === y);
      if (!nearestCell) continue;
      return nearestCell.value === current.value;
    }
  } else if (direction === Direction.Left) {
    if (current.x === 3) return false;
    for (let x = current.x + 1; x < 4; x++) {
      const nearestCell = cells.find((c) => c.x === x && c.y === current.y);
      if (!nearestCell) continue;
      return nearestCell.value === current.value;
    }
  } else if (direction === Direction.Right) {
    if (current.x === 0) return false;
    for (let x = current.x - 1; x >= 0; x--) {
      const nearestCell = cells.find((c) => c.x === x && c.y === current.y);
      if (!nearestCell) continue;
      return nearestCell.value === current.value;
    }
  }

  return false;
};

export const generateNewCell = (cells: BoardCell[], id?: number) => {
  const emptyPositions: Array<{ x: number; y: number }> = [];

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      const isEmpty = !cells.some((c) => c.x === x && c.y === y);
      if (isEmpty) emptyPositions.push({ x, y });
    }
  }

  if (emptyPositions.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * emptyPositions.length);
  const randomPosition = emptyPositions[randomIndex];

  return {
    id: id || Date.now(),
    x: randomPosition.x,
    y: randomPosition.y,
    value: 2,
    destroyed: false,
  };
};

const isSameBoardState = (
  originalCells: BoardCell[],
  newCells: BoardCell[],
) => {
  return JSON.stringify(originalCells) === JSON.stringify(newCells);
};

export const getNextBoardState = (cells: BoardCell[], direction: Direction) => {
  const clonedCells = cells.map((c) => ({ ...c }));

  if (direction === Direction.Up) {
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        const current = clonedCells.find((c) => c.x === x && c.y === y);

        if (!current) continue;

        const shiftCount = getShiftBlankCount(clonedCells, current, direction);

        current.y -= shiftCount;

        const isMerged = checkMerge(clonedCells, current, direction);

        if (isMerged) {
          current.value *= 2;
          current.y--;
        } else {
          const isDestroyed = checkDestroy(clonedCells, current, direction);

          if (isDestroyed) {
            current.value *= 2;
            current.destroyed = true;
          }
        }
      }
    }
  } else if (direction === Direction.Down) {
    for (let x = 0; x < 4; x++) {
      for (let y = 3; y >= 0; y--) {
        const current = clonedCells.find((c) => c.x === x && c.y === y);

        if (!current) continue;

        const shiftCount = getShiftBlankCount(clonedCells, current, direction);

        current.y += shiftCount;

        const isMerged = checkMerge(clonedCells, current, direction);

        if (isMerged) {
          current.value *= 2;
          current.y++;
        } else {
          const isDestroyed = checkDestroy(clonedCells, current, direction);

          if (isDestroyed) {
            current.value *= 2;
            current.destroyed = true;
          }
        }
      }
    }
  } else if (direction === Direction.Left) {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        const current = clonedCells.find((c) => c.x === x && c.y === y);

        if (!current) continue;

        const shiftCount = getShiftBlankCount(clonedCells, current, direction);

        current.x -= shiftCount;

        const isMerged = checkMerge(clonedCells, current, direction);

        if (isMerged) {
          current.value *= 2;
          current.x--;
        } else {
          const isDestroyed = checkDestroy(clonedCells, current, direction);

          if (isDestroyed) {
            current.value *= 2;
            current.destroyed = true;
          }
        }
      }
    }
  } else if (direction === Direction.Right) {
    for (let y = 0; y < 4; y++) {
      for (let x = 3; x >= 0; x--) {
        const current = clonedCells.find((c) => c.x === x && c.y === y);

        if (!current) continue;

        const shiftCount = getShiftBlankCount(clonedCells, current, direction);

        current.x += shiftCount;

        const isMerged = checkMerge(clonedCells, current, direction);

        if (isMerged) {
          current.value *= 2;
          current.x++;
        } else {
          const isDestroyed = checkDestroy(clonedCells, current, direction);

          if (isDestroyed) {
            current.value *= 2;
            current.destroyed = true;
          }
        }
      }
    }
  }

  const gameEnded = checkGameOver(clonedCells) || checkWin(clonedCells);

  const changedState = !isSameBoardState(cells, clonedCells);

  if (changedState && !gameEnded) {
    const newCell = generateNewCell(clonedCells);
    if (newCell) clonedCells.push(newCell);
  }

  return clonedCells;
};

export const getInitialBoardState = () => {
  const cells: BoardCell[] = [];

  cells.push(generateNewCell(cells, 1) as BoardCell);
  cells.push(generateNewCell(cells, 2) as BoardCell);

  return cells;
};
