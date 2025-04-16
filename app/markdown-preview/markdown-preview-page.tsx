"use client";

import MonacoEditor from "@/components/shared/monaco-editor";
import { ScrollArea } from "@/components/ui/scroll-area";
import useDomLoaded from "@/hooks/use-dom-loaded";
import useSystemTheme from "@/hooks/use-system-theme";
import { useState } from "react";
import { MarkdownHooks } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import Title from "./_components/title";
import { MARKDOWN_SOURCE } from "./constants";
import "./github-markdown.css";

const MarkdownPreviewPage: React.FC = () => {
  const [sourceCode, setSourceCode] = useState<string>(MARKDOWN_SOURCE);

  const domLoaded = useDomLoaded();
  const theme = useSystemTheme();

  return (
    <div className="-mx-6 -my-8 h-[calc(100vh-4rem)] min-w-[60rem]">
      <div className="grid h-[3rem] grid-cols-2 border-b border-neutral-200 dark:border-neutral-800">
        <Title title="Editor" border />
        <Title title="Preview" />
      </div>
      <div className="grid h-[calc(100vh-7rem)] grid-cols-2">
        <div className="relative border-r border-neutral-200 dark:border-neutral-800">
          <MonacoEditor
            defaultLanguage="markdown"
            width="100%"
            height="100%"
            value={sourceCode}
            asSimple={false}
            hideMinimap
            options={{
              tabSize: 2,
              codeLens: false,
              minimap: {
                enabled: false,
              },
              quickSuggestions: false,
              renderValidationDecorations: "off",
            }}
            onChange={(val) => setSourceCode(val || "")}
          />
        </div>
        {domLoaded && (
          <div
            className="markdown-body h-[calc(100vh-7rem)] w-full"
            data-theme={theme}
          >
            <ScrollArea className="h-full w-full px-4 py-3">
              <MarkdownHooks
                remarkPlugins={[remarkToc, remarkGfm]}
                rehypePlugins={[rehypeSlug, rehypeRaw]}
              >
                {sourceCode}
              </MarkdownHooks>
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarkdownPreviewPage;
