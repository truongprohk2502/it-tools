"use client";

import MonacoEditor from "@/components/shared/monaco-editor";
import debounce from "lodash/debounce";
import { WebViewFileType } from "../constants";

interface Props {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  selectedFile: WebViewFileType;
  onChange: (val: string) => void;
}

const WebViewEditor: React.FC<Props> = ({
  htmlCode,
  cssCode,
  jsCode,
  selectedFile,
  onChange,
}) => {
  const getCode = () => {
    switch (selectedFile) {
      case WebViewFileType.HTML:
        return { code: htmlCode, language: "html" };
      case WebViewFileType.CSS:
        return { code: cssCode, language: "css" };
      case WebViewFileType.JS:
        return { code: jsCode, language: "javascript" };
      default:
        return { code: "", language: "" };
    }
  };

  const { code, language } = getCode();

  const handleChange = debounce(
    (val: string | undefined) => onChange(val || ""),
    1000,
  );

  return (
    <div className="my-4 rounded-md border border-neutral-400">
      <MonacoEditor
        height="24rem"
        asSimple={false}
        language={language}
        value={code}
        onChange={handleChange}
      />
    </div>
  );
};

export default WebViewEditor;
