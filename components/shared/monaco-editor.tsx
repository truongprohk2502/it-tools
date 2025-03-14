"use client";

import { BackgroundColor } from "@/constants/system";
import { Editor, type EditorProps, loader } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Spinner from "./spinner";

enum Themes {
  Light = "CustomLight",
  Dark = "CustomDark",
}

interface Props extends EditorProps {
  asSimple?: boolean;
  hideMinimap?: boolean;
}

const MonacoEditor: React.FC<Props> = ({
  asSimple = true,
  hideMinimap,
  ...props
}) => {
  const { theme } = useTheme();

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme(Themes.Light, {
        base: "vs",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": BackgroundColor.Light,
        },
      });
      monaco.editor.defineTheme(Themes.Dark, {
        base: "vs-dark",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": BackgroundColor.Dark,
        },
      });
    });
  }, []);

  return (
    <Editor
      theme={theme === "dark" ? Themes.Dark : Themes.Light}
      width="100%"
      className="py-2"
      loading={<Spinner />}
      options={
        asSimple
          ? {
              lineNumbers: "off",
              showFoldingControls: "never",
              minimap: {
                enabled: false,
              },
            }
          : {
              minimap: {
                enabled: !hideMinimap,
              },
            }
      }
      {...props}
    />
  );
};

export default MonacoEditor;
