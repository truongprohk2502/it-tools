import type { Database, SqlValue } from "sql.js";

export const formatBytes = (bytes: number, decimals?: number) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024,
    dm = decimals || 2,
    sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export const convertArrayToCsv = (data: SqlValue[][]) =>
  data
    .map(
      (row) =>
        row
          .map(String) // convert every value to String
          .map((v) => v.replaceAll('"', '""')) // escape double quotes
          .map((v) => `"${v}"`) // quote it
          .join(","), // comma-separated
    )
    .join("\r\n"); // rows starting on new lines

export const exportCsvTableQuery = (db: Database, query: string) => {
  const exportedRows = [];
  const sel = db.prepare(query);
  const columnNames = sel.getColumnNames();

  exportedRows.push(...[columnNames]);
  while (sel.step()) {
    const rows = sel.get();
    exportedRows.push(...[rows]);
  }
  sel.free();

  return exportedRows;
};
