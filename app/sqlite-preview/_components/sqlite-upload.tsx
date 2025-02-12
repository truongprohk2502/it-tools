"use client";

import { cn } from "@/lib/utils";
import { saveAs } from "file-saver";
import { Loader2Icon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  compact: boolean;
  loading: boolean;
  onUpload: (buffer: ArrayBuffer) => void;
}

const SqliteUpload: React.FC<Props> = ({ compact, loading, onUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;

    const file = acceptedFiles[0];

    const reader = new FileReader();

    reader.onload = async function () {
      onUpload(reader.result as ArrayBuffer);
    };

    reader.readAsArrayBuffer(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "application/x-sqlite3": [".sqlite", ".db"],
      "application/octet-stream": [".sqlite"],
    },
    onDrop,
  });

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    saveAs("/sqlite/sample.sqlite", "sample.sqlite");
  };

  return (
    <div
      className={cn(
        "relative my-8 flex w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-neutral-500",
        compact ? "h-16" : "h-80",
      )}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p className="text-center">
        <b>Drop file here</b> to load content or click on this box to open file
        dialog.
      </p>
      {!compact && (
        <span className="mt-3 text-sm text-blue-500" onClick={handleDownload}>
          … or download & try this sample file
        </span>
      )}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <Loader2Icon className="h-16 w-16 text-neutral-700 dark:text-neutral-300" />
        </div>
      )}
    </div>
  );
};

export default SqliteUpload;
