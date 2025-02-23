import type { QueryExecResult } from "sql.js";
import type { Level, SqlKeyword } from "./constants";

interface Column {
  name: string;
  type: string;
}

export interface DatabaseTable {
  tableName: string;
  columns: Column[];
}

export interface Question {
  id: number;
  question: string;
  query: string;
  level: Level;
  keywords: SqlKeyword[];
  expectedResult: QueryExecResult;
}
