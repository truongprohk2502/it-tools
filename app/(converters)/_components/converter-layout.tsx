"use client";

import CopyButton from "@/components/shared/copy-button";
import MonacoEditor from "@/components/shared/monaco-editor";
import SyntaxHighlighter, {
  type SyntaxHighlighterLanguage,
} from "@/components/shared/syntax-highlighter";
import UploadButton from "@/components/shared/upload-button";
import { Button } from "@/components/ui/button";
import {
  LoaderCircle,
  ShieldAlertIcon,
  SquareArrowRight,
  Trash2Icon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import SettingDialog, { type Configs } from "./setting-dialog";

type Language = "json" | "xml" | "toml";

type TransformerSuccess = {
  type: "success";
  code: string;
};

type TransformerFailed = {
  type: "failed";
  error: "invalid" | "unknown";
};

export type TransformerResponse = TransformerSuccess | TransformerFailed;

interface Props {
  from: string;
  to: string;
  initSource: string;
  initTarget: string;
  sourceLanguage: Language;
  targetLanguage: SyntaxHighlighterLanguage;
  settings?: Configs;
  runOnServer?: boolean;
  onTransform: (
    code: string,
    setting?: { [key: string]: boolean },
  ) => Promise<TransformerResponse>;
}

const ConverterLayout: React.FC<Props> = ({
  from,
  to,
  initSource,
  initTarget,
  sourceLanguage,
  targetLanguage,
  settings = [],
  runOnServer,
  onTransform,
}) => {
  const [sourceCode, setSourceCode] = useState<string>(initSource);
  const [latestCode, setLatestCode] = useState<string>(initSource);
  const [targetCode, setTargetCode] = useState<string>(initTarget);
  const [configs, setConfigs] = useState<Configs>(settings);
  const [loading, setLoading] = useState<boolean>(false);
  const [invalidSource, setInvalidSource] = useState<boolean>(false);

  const sourceSupportedLanguage = useMemo(() => {
    if (sourceLanguage === "toml") return "ruby";
    return sourceLanguage;
  }, [sourceLanguage]);

  const disabledTransformButton =
    !sourceCode.trim() || latestCode === sourceCode;

  useEffect(() => {
    if (!invalidSource) return;
    setTimeout(() => {
      setInvalidSource(false);
    }, 3000);
  }, [invalidSource]);

  const clearSourceCode = () => setSourceCode("");

  const convertCode = async () => {
    if (runOnServer) setLoading(true);

    const configsData = configs.reduce((obj, item) => {
      const key = item[0];
      const checked = item[1].value;
      return {
        ...obj,
        [key]: checked,
      };
    }, {});

    setLatestCode(sourceCode);
    const response = await onTransform(sourceCode, configsData);

    if (response.type === "success") {
      setTargetCode(response.code);
    } else if (response.error === "invalid") {
      setInvalidSource(true);
    } else {
      toast.error("Unknown error occurred.");
    }

    if (runOnServer) setLoading(false);
  };

  return (
    <div className="-mx-6 -my-8 flex h-[calc(100vh-4rem)] min-w-[60rem] flex-col">
      <div className="grid flex-shrink-0 grid-cols-2 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between border-r border-neutral-200 px-4 py-2 dark:border-neutral-800">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-neutral-600 dark:text-neutral-300">
              {from}
            </h1>
            {invalidSource && (
              <div className="ml-2 flex items-center rounded-md bg-red-500 py-0.5 pl-1 pr-2 text-white">
                <ShieldAlertIcon className="h-4 w-4" />
                <span className="ml-1 text-sm">Invalid</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            {configs.length > 0 && (
              <SettingDialog configs={configs} setConfigs={setConfigs} />
            )}
            <UploadButton onUpload={setSourceCode} />
            <Button size="icon" variant="ghost" onClick={clearSourceCode}>
              <Trash2Icon className="text-red-500" />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={convertCode}
              disabled={disabledTransformButton}
            >
              <SquareArrowRight />
              <span>Transform</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl font-bold text-neutral-600 dark:text-neutral-300">
            {to}
          </h1>
          <CopyButton text={targetCode} />
        </div>
      </div>
      <div className="grid flex-auto grid-cols-2">
        <div className="relative border-r border-neutral-200 dark:border-neutral-800">
          <MonacoEditor
            defaultLanguage={sourceSupportedLanguage}
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
          <SyntaxHighlighter
            code={targetCode}
            showLineNumbers
            fullHeight
            language={targetLanguage}
          />
        </div>
      </div>
    </div>
  );
};

export default ConverterLayout;
