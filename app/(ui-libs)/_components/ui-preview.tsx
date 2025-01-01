"use client";

import SyntaxHighlighter from "@/components/shared/syntax-highlighter";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  code: string;
  children: React.ReactNode;
}

const UIPreview: React.FC<Props> = ({ code, children }) => {
  const [showingCode, setShowingCode] = useState<boolean>(false);

  const toggleShowCode = () => {
    setShowingCode(!showingCode);
  };

  return (
    <div className="rounded-sm border border-neutral-300 bg-background text-foreground dark:border-neutral-700">
      <div className="relative rounded-sm p-4">
        <div className="mr-20">{children}</div>
        <div
          className="absolute bottom-0 right-0 cursor-pointer rounded-br-md rounded-tl-sm border-l border-t border-neutral-300 px-2 py-1 text-xs dark:border-neutral-700"
          onClick={toggleShowCode}
        >
          {showingCode ? "Hide code" : "Show code"}
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-700" />
        </div>
      </div>
      <div
        className={cn(
          "overflow-hidden rounded-b-sm border-t border-neutral-300 dark:border-neutral-700",
          {
            hidden: !showingCode,
          },
        )}
      >
        <SyntaxHighlighter code={code} />
      </div>
    </div>
  );
};

export default UIPreview;
