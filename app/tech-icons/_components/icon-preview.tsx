"use client";

import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";
import snakeCase from "lodash/snakeCase";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { TechIconType } from "../types";

interface Props {
  icon: TechIconType;
  onClose: () => void;
}

const IconPreview: React.FC<Props> = ({ icon, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    setCopied(false);
  }, [icon]);

  const handleCopy = async () => {
    if (copied) return;
    const svgElement = document.getElementById(icon.id);
    if (!svgElement) return;
    await navigator.clipboard.writeText(svgElement.innerHTML);
    setCopied(true);
  };

  const handleDownload = () => {
    const svgElement = document.getElementById(icon.id);
    if (!svgElement) return;
    const blob = new Blob([svgElement.innerHTML], {
      type: "image/svg+xml;charset=utf-8",
    });
    const fileName = snakeCase(icon.name.toLowerCase());
    saveAs(blob, `${fileName}.svg`);
  };

  return (
    <div className="fixed bottom-4 right-12 rounded-2xl bg-gray-300 px-8 py-6 shadow-md dark:bg-gray-900">
      <div className="flex items-center">
        <icon.svg width={120} height={120} viewBox="0 0 256 256" />
        <div className="ml-4">
          <p className="mb-4 text-xl font-bold">{icon.name}</p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCopy} className="w-32">
              {copied ? "Copied!" : "Copy SVG"}
            </Button>
            <Button variant="outline" onClick={handleDownload}>
              Download SVG
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-4 top-3">
        <XIcon className="h-6 w-6 cursor-pointer" onClick={onClose} />
      </div>
    </div>
  );
};

export default IconPreview;
