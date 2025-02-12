"use client";

import { Theme } from "@/constants/system";
import useDomLoaded from "@/hooks/use-dom-loaded";
import useSystemTheme from "@/hooks/use-system-theme";
import { cn } from "@/lib/utils";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-cloud9_day";
import "ace-builds/src-noconflict/theme-cloud9_night";
import { useState } from "react";
import ReactAce, { type IAceEditorProps } from "react-ace";

interface Props extends IAceEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const AceEditor: React.FC<Props> = ({ value, onChange, ...props }) => {
  const [focusing, setFocusing] = useState<boolean>(false);

  const theme = useSystemTheme();
  const domLoaded = useDomLoaded();

  if (!domLoaded) return null;

  return (
    <div
      className={cn(
        "rounded-md border bg-white px-2 py-2",
        theme === Theme.Dark ? "bg-[#181818]" : "bg-[#fbfbfb]",
        focusing
          ? "border-neutral-700 dark:border-neutral-300"
          : "border-neutral-300 dark:border-neutral-700",
      )}
    >
      <ReactAce
        mode="sql"
        theme={theme === Theme.Dark ? "cloud9_night" : "cloud9_day"}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={false}
        width="100%"
        value={value}
        onChange={onChange}
        onFocus={() => setFocusing(true)}
        onBlur={() => setFocusing(false)}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          enableMobileMenu: true,
          showLineNumbers: false,
        }}
        {...props}
      />
    </div>
  );
};

export default AceEditor;
