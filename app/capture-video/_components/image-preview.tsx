"use client";

import { DownloadIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { PhotoView } from "react-photo-view";
import type { CaptureImage } from "../types";

interface Props {
  image: CaptureImage;
  onRemove: () => void;
  onDownload: () => void;
}

const ImagePreview: React.FC<Props> = ({ image, onRemove, onDownload }) => {
  const date = image.fileName.slice(15, 34).replace("T", " ");

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove();
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDownload();
  };

  return (
    <PhotoView src={image.dataURI}>
      <div>
        <div className="relative aspect-video">
          <Image src={image.dataURI} alt={image.fileName} layout="fill" />
          <div
            className="absolute left-1 top-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-lime-700 text-white"
            onClick={handleDownload}
          >
            <DownloadIcon width={16} height={16} />
          </div>
          <div
            className="absolute right-1 top-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-orange-700 text-white"
            onClick={handleRemove}
          >
            <XIcon width={16} height={16} />
          </div>
        </div>
        <div className="mt-1 line-clamp-1 text-xs">{`Date: ${date}`}</div>
      </div>
    </PhotoView>
  );
};

export default ImagePreview;
