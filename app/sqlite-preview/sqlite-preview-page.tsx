"use client";

import SqliteIcon from "@/assets/icons/sqlite.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import { Route } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { useEffect, useRef, useState } from "react";
import initSqlJs, {
  type Database,
  type SqlJsStatic,
  type Statement,
} from "sql.js";
import ExportButton from "./_components/export-button";
import SqlAlert from "./_components/sql-alert";
import SqlDataTable from "./_components/sql-data-table";
import SqlEditor, { type SqlEditorRef } from "./_components/sql-editor";
import SqliteUpload from "./_components/sqlite-upload";
import TableSelect, {
  type TableSelectOption,
} from "./_components/table-select";
import TablesInformation from "./_components/tables-information";
import {
  convertArrayToCsv,
  exportCsvTableQuery,
  getColumns,
  getDefaultQuery,
  getTableNameFromQuery,
} from "./helpers";
import type { Column, DatabaseRecord, TableInfo } from "./types";

const SqlitePreviewPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [displayingTablesInfo, setDisplayingTablesInfo] =
    useState<boolean>(false);
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [tableOptions, setTableOptions] = useState<TableSelectOption[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [columns, setColumns] = useState<Column[]>([]);
  const [data, setData] = useState<DatabaseRecord[]>([]);
  const [tablesList, setTablesList] = useState<TableInfo[]>([]);

  const sql = useRef<SqlJsStatic>(null);
  const db = useRef<Database>(null);
  const sqlEditorRef = useRef<SqlEditorRef>(null);

  useEffect(() => {
    initSqlJs({
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    })
      .then((sqlInstance) => {
        sql.current = sqlInstance;
      })
      .catch((err: Error) => {
        throw err;
      });
  }, []);

  const getTableRowsCount = (name: string) => {
    const sel = db.current!.prepare(`SELECT COUNT(*) AS count FROM '${name}'`);
    if (sel.step()) {
      const count = sel.getAsObject()["count"];
      sel.free();
      return Number(count);
    } else {
      sel.free();
      return 0;
    }
  };

  const initializeTableInfoList = (tableNames: string[]) => {
    const tableInfoList: TableInfo[] = [];

    for (const tableName of tableNames) {
      const sel = db.current!.prepare(getDefaultQuery(tableName));
      const { columns } = getColumns(db.current!, tableName, sel);
      tableInfoList.push({ name: tableName, columns });
    }

    setTablesList(tableInfoList);
  };

  const initializeTableOptions = () => {
    //Get all table names from master table
    const tableQuery = db.current!.prepare(
      "SELECT * FROM sqlite_master WHERE type='table' OR type='view' ORDER BY name",
    );

    let firstTable: string | null = null;

    const tableOptions: TableSelectOption[] = [];

    while (tableQuery.step()) {
      const rowObj = tableQuery.getAsObject();

      const name = rowObj["name"] as string;
      const type = rowObj["type"] as string;

      if (firstTable === null) {
        firstTable = name;
      }

      const count = getTableRowsCount(name);

      tableOptions.push({
        name,
        count,
        type,
      });
    }

    tableQuery.free();

    setTableOptions(tableOptions);
    setSelectedTable(firstTable || "");
    initializeTableInfoList(tableOptions.map((table) => table.name));

    if (firstTable) {
      const defaultQuery = getDefaultQuery(firstTable);
      sqlEditorRef.current?.setQueryString(defaultQuery);
      handleQuery(defaultQuery);
    }

    setIsLoading(false);
  };

  const handleUpload = (data: ArrayBuffer) => {
    try {
      setIsLoading(true);
      const buffer = new Uint8Array(data);
      db.current = new sql.current!.Database(buffer as Buffer);
      setIsReady(true);
      initializeTableOptions();
    } catch {
      setIsLoading(false);
    }
  };

  const handleQuery = (query: string) => {
    let sel: Statement | null = null;
    try {
      sel = db.current!.prepare(query);
    } catch (ex) {
      if (sel != null) {
        sel.free();
      }
      setError(String(ex));
      return;
    }

    try {
      const tableName = getTableNameFromQuery(query);

      if (!tableName) {
        setError("Table name does not exist in query.");
        return;
      }

      const { columns, columnNames, columnTypes } = getColumns(
        db.current!,
        tableName,
        sel,
      );

      const data: DatabaseRecord[] = [];

      while (sel.step()) {
        const s = sel.get();

        const record: DatabaseRecord = {};

        for (let i = 0; i < s.length; i++) {
          const columnName = columnNames[i];
          const type = columnTypes.has(columnName)
            ? columnTypes.get(columnName).toLowerCase()
            : "";

          if (type === "blob" || type === "blob sub_type binary") {
            if (s[i] === null) {
              record[i] = { type: "null", value: null };
            } else {
              record[i] = { type: "blob", value: s[i] };
            }
          } else {
            record[i] = { type: "null", value: null };
            record[i] = { type: "string", value: s[i] };
          }
        }

        data.push(record);
      }
      sel.free();

      setColumns(columns);
      setData(data);
      setError(null);
    } catch (err: unknown) {
      setError(String(err));
    }
  };

  const handleChangeTable = (tableName: string) => {
    setSelectedTable(tableName);
    const defaultQuery = getDefaultQuery(tableName);
    sqlEditorRef.current?.setQueryString(defaultQuery);
    handleQuery(defaultQuery);
  };

  const exportAllToCsv = () => {
    try {
      const zip = new JSZip();

      const tableNames = tableOptions.map((table) => table.name);

      for (const tableName of tableNames) {
        const exportedRows = exportCsvTableQuery(
          db.current!,
          getDefaultQuery(tableName),
        );

        if (exportedRows != null) {
          zip.file(tableName + ".csv", convertArrayToCsv(exportedRows));
        } else {
          continue;
        }
      }

      zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "exported_all_db.zip");
      });
    } catch (err: unknown) {
      setError(String(err));
    }
  };

  const exportSelectedTableToCsv = () => {
    try {
      const exportedRows = exportCsvTableQuery(
        db.current!,
        getDefaultQuery(selectedTable),
      );

      if (exportedRows != null) {
        const blob = new Blob([convertArrayToCsv(exportedRows)], {
          type: "text/plain;charset=utf-8",
        });
        saveAs(blob, "exported_" + selectedTable.toLowerCase() + "_db.csv");
      }
    } catch (err: unknown) {
      setError(String(err));
    }
  };

  const exportQueryTableToCsv = () => {
    try {
      const query = sqlEditorRef.current!.getQueryString();

      const exportedRows = exportCsvTableQuery(db.current!, query);

      if (exportedRows != null) {
        const blob = new Blob([convertArrayToCsv(exportedRows)], {
          type: "text/plain;charset=utf-8",
        });
        const tableName = getTableNameFromQuery(query) || "table";
        saveAs(blob, `exported_${tableName.toLowerCase()}_db.csv`);
      }
    } catch (err: unknown) {
      setError(String(err));
    }
  };

  return (
    <div className="mx-auto min-w-[60rem] max-w-[70rem] px-6">
      <ToolHeader
        title="Sqlite Preview"
        description="Upload SQLite file to preview table, view results execute sql query. Download result as CSV file if you want."
        href={Route.SqlitePreview}
        icon={SqliteIcon}
      />
      <SqliteUpload
        compact={isReady}
        loading={isLoading}
        onUpload={handleUpload}
      />
      <div className={cn({ hidden: !isReady })}>
        <TablesInformation
          open={tablesList.length > 0 && displayingTablesInfo}
          data={tablesList}
        />
        <div className="flex items-center justify-between gap-4 pr-24">
          <TableSelect
            options={tableOptions}
            value={selectedTable}
            onChange={handleChangeTable}
          />
          <div className="flex gap-3">
            {tablesList.length > 0 && (
              <Button
                variant="secondary"
                onClick={() => setDisplayingTablesInfo(!displayingTablesInfo)}
              >
                {`${displayingTablesInfo ? "Hide" : "Display"} tables information`}
              </Button>
            )}
            <ExportButton
              disabledExportByQuery={data.length === 0}
              onExportAll={exportAllToCsv}
              onExportBySelectedTable={exportSelectedTableToCsv}
              onExportByQuery={exportQueryTableToCsv}
            />
          </div>
        </div>
        <div className="mt-4">
          <SqlEditor ref={sqlEditorRef} onQuery={handleQuery} />
        </div>
      </div>
      {(error || (isReady && data.length === 0)) && (
        <SqlAlert message={error || "No data for given select."} />
      )}
      {isReady && data.length > 0 && (
        <SqlDataTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default SqlitePreviewPage;
