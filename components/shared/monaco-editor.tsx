"use client";

import { Editor, type EditorProps } from "@monaco-editor/react";
import { useTheme } from "next-themes";

const MonacoEditor: React.FC<EditorProps> = (props) => {
  const { theme } = useTheme();

  return (
    <Editor
      theme={theme === "dark" ? "vs-dark" : "light"}
      width="100%"
      options={{
        lineNumbers: "off",
        showFoldingControls: "never",
        minimap: {
          enabled: false,
        },
      }}
      {...props}
    />
  );
};

export default MonacoEditor;
