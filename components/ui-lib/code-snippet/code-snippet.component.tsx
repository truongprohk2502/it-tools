"use client";

import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { codeVariants, copyVariants } from "./code-snippet.helpers";
import type { CodeSnippetProps } from "./code-snippet.types";

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  showCopy,
  size,
  color,
  className,
  labelClassName,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.warn("Copy failed", error);
    }
  };

  return (
    <div className={cn(codeVariants({ size, color }), className)}>
      <code className={labelClassName}>{code}</code>
      {showCopy &&
        (copied ? (
          <CheckIcon className={copyVariants({ size })} />
        ) : (
          <CopyIcon className={copyVariants({ size })} onClick={handleCopy} />
        ))}
    </div>
  );
};

export default CodeSnippet;
