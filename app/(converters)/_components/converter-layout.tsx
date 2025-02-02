"use client";

import CopyButton from "@/components/shared/copy-button";
import MonacoEditor from "@/components/shared/monaco-editor";
import SyntaxHighlighter from "@/components/shared/syntax-highlighter";
import UploadButton from "@/components/shared/upload-button";
import { Button } from "@/components/ui/button";
import { LoaderCircle, SquareArrowRight, Trash2Icon } from "lucide-react";
import { useState } from "react";
import SettingDialog, { type Configs } from "./setting-dialog";

type Language = "json" | "xml";

interface Props {
  from: string;
  to: string;
  sourceLanguage: Language;
  settings?: Configs;
  runOnServer?: boolean;
  onTransform: (
    code: string,
    setting?: { [key: string]: boolean },
  ) => string | Promise<string>;
}

const ConverterLayout: React.FC<Props> = ({
  from,
  to,
  sourceLanguage,
  settings = [],
  runOnServer,
  onTransform,
}) => {
  const [sourceCode, setSourceCode] = useState<string>("");
  const [targetCode, setTargetCode] = useState<string>("");
  const [configs, setConfigs] = useState<Configs>(settings);
  const [loading, setLoading] = useState<boolean>(false);

  const clearSourceCode = () => setSourceCode("");

  const convertCode = async () => {
    try {
      if (runOnServer) setLoading(true);

      const configsData = configs.reduce((obj, item) => {
        const key = item[0];
        const checked = item[1].value;
        return {
          ...obj,
          [key]: checked,
        };
      }, {});

      const transformedCode = await onTransform(sourceCode, configsData);

      setTargetCode(transformedCode);
    } catch (err) {
      console.error(err);
    } finally {
      if (runOnServer) setLoading(false);
    }
  };

  return (
    <div className="-mx-6 -my-8 flex h-[calc(100vh-4rem)] min-w-[60rem] flex-col">
      <div className="grid flex-shrink-0 grid-cols-2 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between border-r border-neutral-200 px-4 py-2 dark:border-neutral-800">
          <h1 className="text-xl font-bold text-neutral-600 dark:text-neutral-300">
            {from}
          </h1>
          <div className="flex items-center gap-3">
            {configs.length > 0 && (
              <SettingDialog configs={configs} setConfigs={setConfigs} />
            )}
            <UploadButton onUpload={setSourceCode} />
            <Button size="icon" variant="ghost" onClick={clearSourceCode}>
              <Trash2Icon className="text-red-500" />
            </Button>
            <Button size="sm" variant="secondary" onClick={convertCode}>
              <SquareArrowRight />
              <span>Transform</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl font-bold text-neutral-600 dark:text-neutral-300">
            {to}
          </h1>
          <CopyButton text="" />
        </div>
      </div>
      <div className="grid flex-auto grid-cols-2">
        <div className="relative border-r border-neutral-200 dark:border-neutral-800">
          <MonacoEditor
            defaultLanguage={sourceLanguage}
            width="100%"
            height="100%"
            value={sourceCode}
            asSimple={false}
            hideMinimap
            onChange={(val) => setSourceCode(val || "")}
          />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-300 bg-opacity-60">
              <LoaderCircle className="animate-spin" />
            </div>
          )}
        </div>
        <div>
          <SyntaxHighlighter code={targetCode} showLineNumbers fullHeight />
        </div>
      </div>
    </div>
  );
};

export default ConverterLayout;
