const X = "x";
const O = "o";

const MAP_SCORE_COMPUTER = new Map([
  [6, Infinity],
  [5, 99999],
  [4, 2000],
  [3, 500],
  [2, 300],
  [1, 100],
]);

const MAP_POINT_HUMAN = new Map([
  [5, 19999],
  [4, 9999],
  [3, 1000],
  [2, 400],
  [1, 10],
  [0, 0],
]);

function getHorizontal(x, y, player, matrixGame) {
  let count = 1;
  for (let i = 1; i < 5; i++) {
    if (y + i < matrixGame[0].length && matrixGame[x][y + i] === player) {
      count++;
    } else {
      break;
    }
  }

  for (let i = 1; i < 5; i++) {
    if (
      y - i >= 0 &&
      y - i < matrixGame[0].length &&
      matrixGame[x][y - i] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

function getVertical(x, y, player, matrixGame) {
  let count = 1;
  for (let i = 1; i < 5; i++) {
    if (x + i < matrixGame.length && matrixGame[x + i][y] === player) {
      count++;
    } else {
      break;
    }
  }

  for (let i = 1; i < 5; i++) {
    if (
      x - i >= 0 &&
      x - i < matrixGame.length &&
      matrixGame[x - i][y] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

function getRightDiagonal(x, y, player, matrixGame) {
  let count = 1;
  for (let i = 1; i < 5; i++) {
    if (
      x - i >= 0 &&
      x - i < matrixGame.length &&
      y + i < matrixGame[0].length &&
      matrixGame[x - i][y + i] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  for (let i = 1; i < 5; i++) {
    if (
      x + i < matrixGame.length &&
      y - i >= 0 &&
      y - i < matrixGame[0].length &&
      matrixGame[x + i][y - i] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

function getLeftDiagonal(x, y, player, matrixGame) {
  let count = 1;
  for (let i = 1; i < 5; i++) {
    if (
      x - i >= 0 &&
      x - i < matrixGame.length &&
      y - i >= 0 &&
      y - i < matrixGame[0].length &&
      matrixGame[x - i][y - i] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  for (let i = 1; i < 5; i++) {
    if (
      x + i < matrixGame.length &&
      y + i < matrixGame[0].length &&
      matrixGame[x + i][y + i] === player
    ) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

function getPointsComputer(matrixGame) {
  let maxScore = -Infinity;
  let pointsComputer = [];
  let listScorePoint = [];
  for (let i = 0; i < matrixGame.length; i++) {
    for (let j = 0; j < matrixGame[0].length; j++) {
      if (matrixGame[i][j] === "") {
        let score =
          MAP_SCORE_COMPUTER.get(
            Math.max(
              getHorizontal(i, j, O, matrixGame),
              getVertical(i, j, O, matrixGame),
              getRightDiagonal(i, j, O, matrixGame),
              getLeftDiagonal(i, j, O, matrixGame),
            ),
          ) +
          MAP_POINT_HUMAN.get(
            Math.max(
              getHorizontal(i, j, X, matrixGame),
              getVertical(i, j, X, matrixGame),
              getRightDiagonal(i, j, X, matrixGame),
              getLeftDiagonal(i, j, X, matrixGame),
            ) - 1,
          );
        if (maxScore <= score) {
          maxScore = score;
          listScorePoint.push({
            score: score,
            point: [i, j],
          });
        }
      }
    }
  }

  // get list max score
  for (const element of listScorePoint) {
    if (element.score === maxScore) {
      pointsComputer.push(element.point);
    }
  }

  return pointsComputer[Math.floor(Math.random() * pointsComputer.length)];
}

self.onmessage = (e) => {
  const matrixGame = e.data;
  const bestMove = getPointsComputer(matrixGame);
  self.postMessage(
    bestMove ? { row: bestMove[0], col: bestMove[1] } : undefined,
  );
};
