"use client";

import { ACCEPTED_IMAGE_EXTENSIONS } from "@/constants/files";
import { UserIcon, XIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  url: string;
  onChange: (url: string) => void;
}

const UserPhoto: React.FC<Props> = ({ url, onChange }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;
    const file = acceptedFiles[0];
    const objectUrl = URL.createObjectURL(file);
    onChange(objectUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": ACCEPTED_IMAGE_EXTENSIONS,
    },
    onDrop,
  });

  const handleClear = () => {
    URL.revokeObjectURL(url);
    onChange("");
  };

  return url ? (
    <div className="group relative aspect-[3/4]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt="User Photo"
        className="h-full w-full rounded-md object-cover"
      />
      <button
        className="absolute right-2 top-2 hidden h-10 w-10 items-center justify-center rounded-md bg-[rgba(255,160,160,0.5)] group-hover:flex"
        onClick={handleClear}
      >
        <XIcon width={32} height={32} className="text-red-500" />
      </button>
    </div>
  ) : (
    <div
      className="flex aspect-[3/4] items-center justify-center bg-neutral-300"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <UserIcon width={100} height={100} className="text-neutral-500" />
    </div>
  );
};

export default UserPhoto;
