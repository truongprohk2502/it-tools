"use client";

import { cn } from "@/lib/utils";
import { UploadIcon } from "lucide-react";
import { useCallback } from "react";
import { toast } from "sonner";

interface Props {
  className?: string;
  onUpload: (code: string) => void;
}

const UploadButton: React.FC<Props> = ({ className, onUpload }) => {
  const handleUploadFile = useCallback((file: File | undefined) => {
    if (!file) return;

    const reader = new FileReader();

    const showError = () => toast.error("The file must be text file.");

    const handleLoadFile = () => {
      const contents = reader.result;

      if (typeof contents !== "string") return showError();

      const textFileRegex = /^[\x00-\x7F]*$/;
      if (!textFileRegex.test(contents)) return showError();

      onUpload(contents);
    };

    reader.addEventListener("load", handleLoadFile, false);

    reader.readAsText(file);

    return () => {
      reader.removeEventListener("load", handleLoadFile);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-md bg-gray-300 dark:bg-gray-700",
        className,
      )}
    >
      <UploadIcon width={16} height={16} />
      <input
        type="file"
        className="absolute inset-0 cursor-pointer opacity-0"
        onChange={(e) => handleUploadFile(e.target.files?.[0])}
      />
    </div>
  );
};

export default UploadButton;
