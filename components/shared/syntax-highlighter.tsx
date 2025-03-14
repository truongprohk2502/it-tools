"use client";

import { Theme } from "@/constants/system";
import useDomLoaded from "@/hooks/use-dom-loaded";
import useSystemTheme from "@/hooks/use-system-theme";
import { PrismLight as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import graphql from "react-syntax-highlighter/dist/esm/languages/prism/graphql";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import toml from "react-syntax-highlighter/dist/esm/languages/prism/toml";
import ts from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/duotone-dark";
import light from "react-syntax-highlighter/dist/esm/styles/prism/duotone-light";

ReactSyntaxHighlighter.registerLanguage("ts", ts);
ReactSyntaxHighlighter.registerLanguage("jsx", jsx);
ReactSyntaxHighlighter.registerLanguage("json", json);
ReactSyntaxHighlighter.registerLanguage("toml", toml);
ReactSyntaxHighlighter.registerLanguage("yaml", yaml);
ReactSyntaxHighlighter.registerLanguage("sql", sql);
ReactSyntaxHighlighter.registerLanguage("graphql", graphql);

export type SyntaxHighlighterLanguage =
  | "ts"
  | "js"
  | "jsx"
  | "json"
  | "toml"
  | "yaml"
  | "xml"
  | "graphql"
  | "sql"
  | "csv";

interface Props {
  code: string;
  language?: SyntaxHighlighterLanguage;
  fullHeight?: boolean;
  showLineNumbers?: boolean;
}

const SyntaxHighlighter: React.FC<Props> = ({
  code,
  language = "jsx",
  fullHeight,
  showLineNumbers,
}) => {
  const theme = useSystemTheme();
  const domLoaded = useDomLoaded();

  const getSupportedLanguage = (language: SyntaxHighlighterLanguage) => {
    if (language === "csv") return undefined;
    return language;
  };

  return (
    domLoaded && (
      <ReactSyntaxHighlighter
        language={getSupportedLanguage(language)}
        style={theme === Theme.Light ? light : dark}
        customStyle={{ margin: 0, height: fullHeight ? "100%" : "auto" }}
        showLineNumbers={showLineNumbers}
      >
        {code}
      </ReactSyntaxHighlighter>
    )
  );
};

export default SyntaxHighlighter;
