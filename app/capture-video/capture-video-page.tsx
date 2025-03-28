"use client";

import ScreenRecorderIcon from "@/assets/icons/screen-recorder.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Route } from "@/constants/routes";
import { saveAs } from "file-saver";
import { useRef, useState } from "react";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ImagePreview from "./_components/image-preview";
import VideoPlayer, {
  type CaptureVideoRefProps,
} from "./_components/video-player";
import { CaptureImage } from "./types";

const CaptureVideoPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<CaptureImage[]>([]);

  const videoPlayerRef = useRef<CaptureVideoRefProps>({
    getCaptureImage: () => undefined,
  });

  const handleUpload = (file: File | undefined) => {
    if (!file) return;
    setFile(file);
  };

  const handleCapture = () => {
    const newFile = videoPlayerRef.current.getCaptureImage();
    if (newFile) setImages((prev) => [...prev, newFile]);
  };

  const handleRemove = (fileName: string) => {
    const removedFile = images.find((image) => image.fileName === fileName);
    if (!removedFile) return;
    URL.revokeObjectURL(removedFile.dataURI);
    setImages(images.filter((image) => image.fileName !== fileName));
  };

  const handleDownload = (image: CaptureImage) => {
    saveAs(image.dataURI, image.fileName);
  };

  const handleDownloadAll = () => {
    for (const image of images) {
      saveAs(image.dataURI, image.fileName);
    }
  };

  return (
    <div className="mx-auto min-w-[50rem] max-w-[55rem] px-6">
      <ToolHeader
        title="Capture Video"
        description="Capture an image from video! Download it if you want."
        href={Route.CaptureVideo}
        icon={ScreenRecorderIcon}
      />
      <div className="mb-4 mt-6">
        <VideoPlayer ref={videoPlayerRef} file={file} />
        <div className="mt-4 flex items-center justify-end gap-4">
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => handleUpload(e.target.files?.[0])}
          />
          <Button disabled={!file} variant="secondary" onClick={handleCapture}>
            Capture
          </Button>
          <Button variant="destructive" onClick={handleDownloadAll}>
            Download All
          </Button>
        </div>
        <PhotoProvider>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {images.map((image) => (
              <ImagePreview
                key={image.fileName}
                image={image}
                onRemove={() => handleRemove(image.fileName)}
                onDownload={() => handleDownload(image)}
              />
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default CaptureVideoPage;
