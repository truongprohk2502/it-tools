"use client";

import CompareIcon from "@/assets/icons/compare.icon";
import RadioTabs from "@/components/shared/radio-tabs";
import ToolHeader from "@/components/shared/tool-header";
import UploadableTextarea from "@/components/shared/uploadable-textarea";
import { Button } from "@/components/ui/button";
import { Route } from "@/constants/routes";
import { Theme } from "@/constants/system";
import useDomLoaded from "@/hooks/use-dom-loaded";
import useSystemTheme from "@/hooks/use-system-theme";
import { useState } from "react";
import ReactDiffViewer from "react-diff-viewer";

enum ModeType {
  Split = "split",
  Unified = "unified",
}

const CompareTextsPage: React.FC = () => {
  const [mode, setMode] = useState<ModeType>(ModeType.Split);
  const [originalText, setOriginalText] = useState<string>("");
  const [changedText, setChangedText] = useState<string>("");
  const [oldValue, setOldValue] = useState<string>("");
  const [newValue, setNewValue] = useState<string>("");

  const theme = useSystemTheme();
  const domLoaded = useDomLoaded();

  const findDifference = () => {
    setOldValue(originalText);
    setNewValue(changedText);
  };

  return (
    <div className="mx-auto min-w-[60rem] max-w-[80rem] px-6">
      <ToolHeader
        title="Compare Texts"
        description="Compare text to find the difference between two text files. Just paste your files and click Find Difference."
        href={Route.CompareTexts}
        icon={CompareIcon}
      />
      <div className="grid grid-cols-2 gap-4">
        <UploadableTextarea
          title="Original text"
          height="28rem"
          value={originalText}
          onChange={setOriginalText}
        />
        <UploadableTextarea
          title="Changed text"
          height="28rem"
          value={changedText}
          onChange={setChangedText}
        />
      </div>
      <div className="flex justify-center py-8">
        <Button className="mx-auto" onClick={findDifference}>
          Find difference
        </Button>
      </div>
      <div className="mb-8">
        {(oldValue || newValue) && (
          <div className="mb-4 flex justify-end">
            <RadioTabs
              value={mode}
              onChange={(val) => setMode(val as ModeType)}
              options={[
                { label: "Split", value: ModeType.Split },
                { label: "Unified", value: ModeType.Unified },
              ]}
            />
          </div>
        )}
        {domLoaded && (
          <ReactDiffViewer
            oldValue={oldValue}
            newValue={newValue}
            splitView={mode === "split"}
            useDarkTheme={theme === Theme.Dark}
            styles={{
              contentText: { fontSize: 14 },
              lineNumber: { fontSize: 14 },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CompareTextsPage;
