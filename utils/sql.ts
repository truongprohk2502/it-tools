import type { Database, QueryExecResult, Statement } from "sql.js";

interface Column {
  name: string;
  type: string;
}

const SQL_FROM_REGEX = /FROM\s+((?=['"])((["'])(?<g1>[^'"]+))|(?<g2>\w+))/im;

export const getTableNameFromQuery = (query: string) => {
  const sqlRegex = SQL_FROM_REGEX.exec(query);
  if (!sqlRegex) return null;
  return sqlRegex.groups?.g1 ?? sqlRegex.groups?.g2 ?? null;
};

export const getDefaultQuery = (tableName: string) =>
  `select * from ${tableName}`;

export const checkTableExist = (db: Database, tableName: string) => {
  const result = db.exec(
    `SELECT 1 FROM sqlite_master WHERE type='table' AND name='${tableName}'`,
  );
  return result !== undefined && result.length > 0;
};

const checkIsForeignKey = (data: QueryExecResult[], keyName: string) => {
  for (const result of data) {
    const fk = result.values.find((v) => v[3] === keyName);
    if (fk) return true;
  }
  return false;
};

export const getTableColumnTypes = (db: Database, tableName: string) => {
  const result = new Map();
  const sel = db.prepare(`PRAGMA table_info('${tableName}')`);
  const foreignKeyList = db.exec(`PRAGMA foreign_key_list('${tableName}')`);

  while (sel.step()) {
    const obj = sel.getAsObject();
    const fk = checkIsForeignKey(foreignKeyList, obj.name as string);

    let type = obj["type"];
    if (obj["notnull"] === 1) {
      type += " NOT NULL";
    }
    if (obj["pk"] === 1) {
      type += " PRIMARY KEY";
    }
    if (fk) {
      type += " FOREIGN KEY";
    }
    result.set(obj.name, type);
  }
  sel.free();

  return result;
};

export const getColumns = (
  db: Database,
  tableName: string,
  statement?: Statement,
) => {
  let columnTypes = new Map();

  if (tableName != null) {
    columnTypes = getTableColumnTypes(db, tableName);
  }

  const columns: Column[] = [];

  const sel = statement || db.prepare(getDefaultQuery(tableName));
  const columnNames = sel.getColumnNames();

  for (let i = 0; i < columnNames.length; i++) {
    const columnName = columnNames[i];
    const type = columnTypes.has(columnName)
      ? columnTypes.get(columnNames[i])
      : "";
    columns.push({ name: columnNames[i], type });
  }

  return { columns, columnNames, columnTypes };
};
