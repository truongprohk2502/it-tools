import { BOARD_SIZE, Direction } from "./constants";
import type { CellState, Position } from "./types";

const getRandomAppleIndex = (occupiedCells: Position[]) => {
  const availableIndices: Position[] = [];

  for (let x = 0; x < BOARD_SIZE; x++) {
    for (let y = 0; y < BOARD_SIZE; y++) {
      const exist = occupiedCells.find((cell) => cell.x === x && cell.y === y);
      if (!exist) availableIndices.push({ x, y });
    }
  }

  const randIndex = Math.floor(Math.random() * availableIndices.length);
  return availableIndices[randIndex];
};

export const checkWin = (snakeCells: Position[]) => {
  return snakeCells.length === BOARD_SIZE * BOARD_SIZE;
};

export const checkGameOver = (snakeCells: Position[], direction: Direction) => {
  const headPosition = snakeCells[0];

  if (direction === Direction.Up) {
    if (headPosition.y === 0) return true;
    const nextCellIsSnake = snakeCells.some(
      (cell) => cell.x === headPosition.x && cell.y === headPosition.y - 1,
    );
    return nextCellIsSnake;
  } else if (direction === Direction.Down) {
    if (headPosition.y === BOARD_SIZE - 1) return true;
    const nextCellIsSnake = snakeCells.some(
      (cell) => cell.x === headPosition.x && cell.y === headPosition.y + 1,
    );
    return nextCellIsSnake;
  } else if (direction === Direction.Left) {
    if (headPosition.x === 0) return true;
    const nextCellIsSnake = snakeCells.some(
      (cell) => cell.x === headPosition.x - 1 && cell.y === headPosition.y,
    );
    return nextCellIsSnake;
  } else if (direction === Direction.Right) {
    if (headPosition.x === BOARD_SIZE - 1) return true;
    const nextCellIsSnake = snakeCells.some(
      (cell) => cell.x === headPosition.x + 1 && cell.y === headPosition.y,
    );
    return nextCellIsSnake;
  }

  return false;
};

export const getInitialState = (): CellState => {
  const centerX = Math.floor(BOARD_SIZE / 2);

  const snakeCells: Position[] = [
    { x: centerX, y: 2 },
    { x: centerX, y: 1 },
    { x: centerX, y: 0 },
  ];

  const appleCell = getRandomAppleIndex(snakeCells);

  return {
    snakeCells,
    appleCell,
  };
};

const getStateAfterEat = (snakeCells: Position[], appleCell: Position) => {
  const newSnakeCells = [...snakeCells];
  newSnakeCells.unshift({ x: appleCell.x, y: appleCell.y });
  const newAppleCell = getRandomAppleIndex(newSnakeCells);
  return { snakeCells: newSnakeCells, appleCell: newAppleCell };
};

const getStateAfterMove = (
  snakeCells: Position[],
  appleCell: Position,
  direction: Direction,
) => {
  const newSnakeCells = [...snakeCells];

  for (let i = newSnakeCells.length - 1; i > 0; i--) {
    const nextCell = newSnakeCells[i - 1];
    newSnakeCells[i] = {
      x: nextCell.x,
      y: nextCell.y,
    };
  }

  if (direction === Direction.Up) {
    newSnakeCells[0] = {
      x: newSnakeCells[0].x,
      y: newSnakeCells[0].y - 1,
    };
  } else if (direction === Direction.Down) {
    newSnakeCells[0] = {
      x: newSnakeCells[0].x,
      y: newSnakeCells[0].y + 1,
    };
  } else if (direction === Direction.Left) {
    newSnakeCells[0] = {
      x: newSnakeCells[0].x - 1,
      y: newSnakeCells[0].y,
    };
  } else if (direction === Direction.Right) {
    newSnakeCells[0] = {
      x: newSnakeCells[0].x + 1,
      y: newSnakeCells[0].y,
    };
  }

  return { snakeCells: newSnakeCells, appleCell };
};

export const getNextState = (
  snakeCells: Position[],
  appleCell: Position | null,
  direction: Direction,
): CellState => {
  if (
    !appleCell ||
    checkWin(snakeCells) ||
    checkGameOver(snakeCells, direction)
  ) {
    throw new Error();
  }

  const headPosition = snakeCells[0];

  if (direction === Direction.Up) {
    const nextCellIsApple =
      headPosition.x === appleCell.x && headPosition.y - 1 === appleCell.y;
    if (nextCellIsApple) {
      return getStateAfterEat(snakeCells, appleCell);
    } else {
      return getStateAfterMove(snakeCells, appleCell, direction);
    }
  } else if (direction === Direction.Down) {
    const nextCellIsApple =
      headPosition.x === appleCell.x && headPosition.y + 1 === appleCell.y;
    if (nextCellIsApple) {
      return getStateAfterEat(snakeCells, appleCell);
    } else {
      return getStateAfterMove(snakeCells, appleCell, direction);
    }
  } else if (direction === Direction.Left) {
    const nextCellIsApple =
      headPosition.x - 1 === appleCell.x && headPosition.y === appleCell.y;
    if (nextCellIsApple) {
      return getStateAfterEat(snakeCells, appleCell);
    } else {
      return getStateAfterMove(snakeCells, appleCell, direction);
    }
  } else if (direction === Direction.Right) {
    const nextCellIsApple =
      headPosition.x + 1 === appleCell.x && headPosition.y === appleCell.y;
    if (nextCellIsApple) {
      return getStateAfterEat(snakeCells, appleCell);
    } else {
      return getStateAfterMove(snakeCells, appleCell, direction);
    }
  }

  return { snakeCells, appleCell };
};
