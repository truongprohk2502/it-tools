import { BOARD_SIZE, CellStatus } from "./constants";

const getHorizontal = (
  row: number,
  col: number,
  player: CellStatus,
  matrixGame: string[][],
) => {
  let count = 1;
  for (let i = 1; i < 5; i++) {
    if (col + i < matrixGame[0].length && matrixGame[row][col + i] === player) {
      count++;
    } else {
      break;
    }
  }

  for (let i = 1; i < 5; i++) {
    if (
      col - i >= 0 &&
      col - i < matrixGame[0].length &&
      matrixGame[row][col - i] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  return count;
};

const getVertical = (
  row: number,
  col: number,
  player: CellStatus,
  matrixGame: string[][],
) => {
  let count = 1;
  for (let i = 1; i < 5; i++) {
    if (row + i < matrixGame.length && matrixGame[row + i][col] === player) {
      count++;
    } else {
      break;
    }
  }

  for (let i = 1; i < 5; i++) {
    if (
      row - i >= 0 &&
      row - i < matrixGame.length &&
      matrixGame[row - i][col] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  return count;
};

const getRightDiagonal = (
  row: number,
  col: number,
  player: CellStatus,
  matrixGame: string[][],
) => {
  let count = 1;
  for (let i = 1; i < 5; i++) {
    if (
      row - i >= 0 &&
      row - i < matrixGame.length &&
      col + i < matrixGame[0].length &&
      matrixGame[row - i][col + i] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  for (let i = 1; i < 5; i++) {
    if (
      row + i < matrixGame.length &&
      col - i >= 0 &&
      col - i < matrixGame[0].length &&
      matrixGame[row + i][col - i] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  return count;
};

const getLeftDiagonal = (
  row: number,
  col: number,
  player: CellStatus,
  matrixGame: string[][],
) => {
  let count = 1;
  for (let i = 1; i < 5; i++) {
    if (
      row - i >= 0 &&
      row - i < matrixGame.length &&
      col - i >= 0 &&
      col - i < matrixGame[0].length &&
      matrixGame[row - i][col - i] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  for (let i = 1; i < 5; i++) {
    if (
      row + i < matrixGame.length &&
      col + i < matrixGame[0].length &&
      matrixGame[row + i][col + i] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  return count;
};

export const checkWin = (
  matrixGame: string[][],
  player: CellStatus,
  row: number,
  col: number,
) =>
  getHorizontal(row, col, player, matrixGame) >= 5 ||
  getVertical(row, col, player, matrixGame) >= 5 ||
  getRightDiagonal(row, col, player, matrixGame) >= 5 ||
  getLeftDiagonal(row, col, player, matrixGame) >= 5;

export const checkDraw = (matrixGame: string[][]) => {
  for (let i = 0; i < matrixGame.length; i++) {
    for (let j = 0; j < matrixGame[0].length; j++) {
      if (matrixGame[i][j] === "") {
        return false;
      }
    }
  }

  return true;
};

export const getDefaultBoard = () =>
  Array.from({ length: BOARD_SIZE }).map(() =>
    Array.from({ length: BOARD_SIZE }).map(() => CellStatus.None),
  );
