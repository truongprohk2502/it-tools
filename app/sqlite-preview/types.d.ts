export interface Column {
  name: string;
  type: string;
}

export interface RecordValue {
  type: "null" | "string" | "blob";
  value: unknown;
}

export interface DatabaseRecord {
  [key: number]: RecordValue;
}

export interface TableInfo {
  name: string;
  columns: Column[];
}
