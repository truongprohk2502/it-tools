"use client";

import { ImageIcon, LoaderCircleIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ACCEPTED_IMAGE_EXTENSIONS } from "../constants";

interface Props {
  isLoading: boolean;
  onUpload: (file: File) => void;
}

const ImageDropzone: React.FC<Props> = ({ isLoading, onUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;
    onUpload(acceptedFiles[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    accept: {
      "image/*": ACCEPTED_IMAGE_EXTENSIONS,
    },
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className="relative mx-auto flex h-[20rem] w-[40rem] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-neutral-700"
    >
      <ImageIcon className="text-blue-500" width={40} height={40} />
      <input {...getInputProps()} />
      <div className="my-4 rounded-md bg-neutral-700 px-4 py-2 text-white">
        Select image
      </div>
      {isDragActive ? (
        <p className="text-center text-sm font-semibold">
          Drop the image here ...
        </p>
      ) : (
        <p className="text-center text-sm font-semibold">
          Or drag and drop the image here
        </p>
      )}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-60">
          <LoaderCircleIcon className="h-8 w-8 animate-spin text-white" />
        </div>
      )}
    </div>
  );
};

export default ImageDropzone;
