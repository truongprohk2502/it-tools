import { format } from "prettier";
import sqlPlugin from "prettier-plugin-sql";
import estreePlugin from "prettier/plugins/estree";
import tsPlugin from "prettier/plugins/typescript";

export const formatTypeScriptCode = (code: string) =>
  format(code, {
    parser: "typescript",
    plugins: [estreePlugin, tsPlugin],
  });

export const formatSqlCode = (code: string) =>
  format(code, {
    parser: "sql",
    plugins: [sqlPlugin],
  });
