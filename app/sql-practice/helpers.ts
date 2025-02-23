import type { QueryExecResult } from "sql.js";

export const checkQueryResultIsCorrect = (
  result: QueryExecResult,
  expected: QueryExecResult,
) => {
  if (result.columns.join("-") !== expected.columns.join("-")) return false;
  if (result.values.length !== expected.values.length) return false;

  for (let i = 0; i < result.values.length; i++) {
    if (result.values[i].join("-") !== expected.values[i].join("-"))
      return false;
  }

  return true;
};
