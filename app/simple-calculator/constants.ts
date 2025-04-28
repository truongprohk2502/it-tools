import { CalculatorKey } from "./types";

export const CALCULATOR_BUTTONS = [
  {
    label: CalculatorKey.OpenBracket,
    color: "gray",
  },
  {
    label: CalculatorKey.CloseBracket,
    color: "gray",
  },
  {
    label: CalculatorKey.Remain,
    color: "gray",
  },
  {
    label: CalculatorKey.Clear,
    color: "yellow",
  },
  {
    label: CalculatorKey.Number7,
    color: "gray",
  },
  {
    label: CalculatorKey.Number8,
    color: "gray",
  },
  {
    label: CalculatorKey.Number9,
    color: "gray",
  },
  {
    label: CalculatorKey.Divide,
    color: "orange",
  },
  {
    label: CalculatorKey.Number4,
    color: "gray",
  },
  {
    label: CalculatorKey.Number5,
    color: "gray",
  },
  {
    label: CalculatorKey.Number6,
    color: "gray",
  },
  {
    label: CalculatorKey.Multiply,
    color: "orange",
  },
  {
    label: CalculatorKey.Number1,
    color: "gray",
  },
  {
    label: CalculatorKey.Number2,
    color: "gray",
  },
  {
    label: CalculatorKey.Number3,
    color: "gray",
  },
  {
    label: CalculatorKey.Minus,
    color: "orange",
  },
  {
    label: CalculatorKey.Number0,
    color: "gray",
  },
  {
    label: CalculatorKey.Dot,
    color: "gray",
  },
  {
    label: CalculatorKey.Equal,
    color: "green",
  },
  {
    label: CalculatorKey.Plus,
    color: "orange",
  },
];

export const OPERATION_KEYS = [
  CalculatorKey.Plus,
  CalculatorKey.Minus,
  CalculatorKey.Multiply,
  CalculatorKey.Divide,
  CalculatorKey.Remain,
];

export const NUMBER_KEYS = [
  CalculatorKey.Number0,
  CalculatorKey.Number1,
  CalculatorKey.Number2,
  CalculatorKey.Number3,
  CalculatorKey.Number4,
  CalculatorKey.Number5,
  CalculatorKey.Number6,
  CalculatorKey.Number7,
  CalculatorKey.Number8,
  CalculatorKey.Number9,
];

export const KEYWORD_KEYS = [
  ...OPERATION_KEYS,
  ...NUMBER_KEYS,
  CalculatorKey.OpenBracket,
  CalculatorKey.CloseBracket,
  CalculatorKey.Dot,
];

export enum MathKeyword {
  Error = "Error",
  Infinity = "Infinity",
  Ans = "Ans",
}
