export interface Position {
  x: number;
  y: number;
}

export interface CellState {
  snakeCells: Position[];
  appleCell: Position | null;
}
