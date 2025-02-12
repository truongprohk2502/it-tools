"use client";

import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";
import { useCallback } from "react";

interface Props {
  blob: Blob;
  onRemove: () => void;
}

const ScreenPreview: React.FC<Props> = ({ blob, onRemove }) => {
  const videoCallbackRef = useCallback(
    (video: HTMLVideoElement) => {
      const url = URL.createObjectURL(blob);
      video.src = url;
      return () => {
        URL.revokeObjectURL(url);
      };
    },
    [blob],
  );

  const handleDownload = () => saveAs(blob, "video.mp4");

  return (
    <div className="relative w-full">
      <div className="mb-4 flex items-center justify-between">
        <Button onClick={handleDownload}>Download</Button>
        <p className="text-2xl font-bold">Video preview</p>
        <Button variant="destructive" className="ml-3" onClick={onRemove}>
          Remove
        </Button>
      </div>
      <video ref={videoCallbackRef} controls />
    </div>
  );
};

export default ScreenPreview;
