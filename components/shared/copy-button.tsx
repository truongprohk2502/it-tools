"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";

interface Props {
  text: string;
}

const CopyButton: React.FC<Props> = ({ text }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const copying = useRef<boolean>(false);

  const copyText = async () => {
    try {
      if (copied || copying.current) return;
      copying.current = true;
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
    <Button variant="outline" size="sm" className="ml-3" onClick={copyText}>
      {copied ? "Copied" : "Copy code"}
    </Button>
  );
};

export default CopyButton;
