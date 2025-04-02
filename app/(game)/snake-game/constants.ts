import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

export const DIRECTION_ICONS = [ArrowLeft, ArrowUp, ArrowDown, ArrowRight];
export const DIRECTION_KEYS = ["A", "W", "S", "D"];

export enum GameLevel {
  Easy = 200,
  Medium = 150,
  Hard = 80,
}

export const GAME_OPTIONS = [
  { label: "Easy", value: GameLevel.Easy },
  { label: "Medium", value: GameLevel.Medium },
  { label: "Hard", value: GameLevel.Hard },
];

export enum GameResult {
  Undetermined = "Undetermined",
  GameOver = "Game Over!",
}

export enum CellStatus {
  Snake,
  Apple,
  None,
}

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export const BOARD_SIZE = 21;
