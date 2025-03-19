export enum PuzzleLevel {
  Easy = 3,
  Medium = 4,
  Hard = 5,
}

export const PUZZLE_OPTIONS = [
  { label: "Easy", value: PuzzleLevel.Easy },
  { label: "Medium", value: PuzzleLevel.Medium },
  { label: "Hard", value: PuzzleLevel.Hard },
];

export const PUZZLE_IMAGES = [
  { label: "Lake", value: "/puzzle-images/lake.jpeg" },
  { label: "Girl", value: "/puzzle-images/girl.webp" },
  { label: "Cat", value: "/puzzle-images/cat.webp" },
  { label: "Motorbike", value: "/puzzle-images/motorbike.jpeg" },
];
