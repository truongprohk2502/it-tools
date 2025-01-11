import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Image as ImageJS } from "image-js";
import { CircleHelp, DownloadIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Area } from "react-easy-crop";
import { toast } from "sonner";

const PREVIEW_WIDTH = 160;

interface Props {
  imgSrc: { normal: string; rotated: string };
  rotate: number;
  scale: number;
  isFlipVertical: boolean;
  isFlipHorizontal: boolean;
  croppedArea: Area;
  aspect: number;
}

const ImagePreview: React.FC<Props> = ({
  imgSrc,
  rotate,
  scale,
  isFlipVertical,
  isFlipHorizontal,
  croppedArea,
  aspect,
}) => {
  const [isDownloadingImage, setIsDownloadingImage] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const rotated90 = rotate === 90 || rotate === 270;
  const canvasImgSrc = rotated90 ? imgSrc.rotated : imgSrc.normal;

  useEffect(() => {
    if (!canvasImgSrc) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const img = new Image();
    img.onload = function () {
      const naturalWidth = img.width;
      const naturalHeight = img.height;
      const imgNaturalAspect = naturalWidth / naturalHeight;

      let width = 0;
      let height = 0;

      if (imgNaturalAspect <= aspect) {
        width = PREVIEW_WIDTH;
        height = width / imgNaturalAspect;
      } else {
        height = PREVIEW_WIDTH / aspect;
        width = height * imgNaturalAspect;
      }

      ctx.reset();
      canvas.width = width;
      canvas.height = height;

      ctx.imageSmoothingQuality = "high";

      ctx.drawImage(
        img,
        0,
        0,
        naturalWidth,
        naturalHeight,
        0,
        0,
        width,
        height,
      );
    };
    img.src = canvasImgSrc;

    return () => {
      img.remove();
    };
  }, [canvasImgSrc, aspect]);

  const handleDownload = async () => {
    try {
      setIsDownloadingImage(true);
      let image = await ImageJS.load(imgSrc.normal);

      if (rotate) {
        image = image.rotate(rotate);
      }

      if (isFlipVertical) {
        image = image.flipY();
      }

      if (isFlipHorizontal) {
        image = image.flipX();
      }

      const x = (croppedArea.x * image.width) / 100;
      const y = (croppedArea.y * image.height) / 100;
      const width = (croppedArea.width * image.width) / 100;
      const height = (croppedArea.height * image.height) / 100;

      image = image.crop({ x, y, width, height });

      const blob = await image.toBlob();

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "image.png";

      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      toast.error("An error occurs when downloading image.");
    } finally {
      setIsDownloadingImage(false);
    }
  };

  return (
    <div className="h-fit flex-shrink-0 rounded-md border border-neutral-400 px-4 py-3">
      <div className="flex items-center justify-center">
        <p className="text-center text-sm font-bold">Preview</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <CircleHelp width={20} height={20} className="ml-2" />
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="w-96 bg-neutral-700 text-xs font-medium text-white"
            >
              The resolution of original image is keeping when crop to specific
              aspect ratio. Please not concern if the resolution of preview
              image is low.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div
        className="relative mt-2 overflow-hidden"
        style={{
          width: PREVIEW_WIDTH,
          height: PREVIEW_WIDTH / aspect,
        }}
      >
        <div className="h-fit w-fit" style={{ transform: `scale(${scale})` }}>
          <canvas
            ref={canvasRef}
            className="absolute left-0 top-0"
            style={{
              transform: `
                translate(${-croppedArea.x}%, ${-croppedArea.y}%)
                rotateX(${isFlipVertical ? 180 : 0}deg)
                rotateY(${isFlipHorizontal ? 180 : 0}deg)
                rotateZ(${rotate === 180 || rotate === 270 ? 180 : 0}deg)
              `,
            }}
          />
        </div>
      </div>
      <Button
        size="sm"
        className="mb-4 mt-4 w-full"
        onClick={handleDownload}
        disabled={isDownloadingImage}
      >
        <DownloadIcon className="mr-2 h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default ImagePreview;
