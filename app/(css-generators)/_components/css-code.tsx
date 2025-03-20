"use client";

import { useRef, useState } from "react";

interface Props {
  cssKey: string;
  cssValue: string;
}

const CssCode: React.FC<Props> = ({ cssKey, cssValue }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const copying = useRef<boolean>(false);

  const copyText = async () => {
    try {
      if (copied || copying.current) return;
      copying.current = true;
      const text = `${cssKey}: ${cssValue};`;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    } finally {
      copying.current = false;
    }
  };

  return (
    <div>
      <p className="text-lg font-semibold">Code</p>
      <div className="mt-2 rounded-md bg-neutral-200 dark:bg-neutral-700">
        <div className="px-4 py-6 text-sm font-medium">
          <span className="text-blue-400">{cssKey}: </span>
          <span className="text-red-400">{cssValue};</span>
        </div>
        <div
          className="cursor-pointer rounded-b-md bg-blue-500 py-2 text-center font-semibold text-white"
          onClick={copyText}
        >
          {copied ? "Copied" : "Copy"}
        </div>
      </div>
    </div>
  );
};

export default CssCode;
