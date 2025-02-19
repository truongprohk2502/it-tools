"use client";

import { ACCEPTED_AUDIO_EXTENSIONS } from "@/constants/files";
import { UploadIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  onUpload: (file: File) => void;
}

const AudioUpload: React.FC<Props> = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;
    onUpload(acceptedFiles[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "audio/*": ACCEPTED_AUDIO_EXTENSIONS,
    },
    onDrop,
  });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="relative flex items-center rounded-md bg-primary px-4 py-2 text-white">
          <UploadIcon className="h-6 w-6" />
          <span className="ml-2">Upload audio</span>
        </div>
        <span className="mt-2 text-white">or drop file here...</span>
      </div>
    </div>
  );
};

export default AudioUpload;
