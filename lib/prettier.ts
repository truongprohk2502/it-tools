import { format } from "prettier";
import estreePlugin from "prettier/plugins/estree";
import tsPlugin from "prettier/plugins/typescript";

export const formatTypeScriptCode = (code: string) =>
  format(code, {
    parser: "typescript",
    plugins: [estreePlugin, tsPlugin],
  });
