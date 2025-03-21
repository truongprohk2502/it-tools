import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

export const DIRECTION_ICONS = [ArrowLeft, ArrowUp, ArrowDown, ArrowRight];

export enum GameResult {
  Undetermined = "Undetermined",
  Win = "Congratulations!",
  Lose = "Game Over!",
}

export enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

export const PADDING_SIZE = 0.5; // rem
export const CELL_SIZE = 6.375; // rem
