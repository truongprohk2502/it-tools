export enum ChessResult {
  Undetermined = "Undetermined",
  Draw = "Draw",
  YouWin = "You win!",
  ComputerWin = "Computer win!",
}

export enum ChessLevel {
  Easy = "2",
  Medium = "8",
  Hard = "18",
}

export const CHESS_OPTIONS = [
  { label: "Easy", value: ChessLevel.Easy },
  { label: "Medium", value: ChessLevel.Medium },
  { label: "Hard", value: ChessLevel.Hard },
];
