"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import convert from "color-convert";
import { useRef, useState } from "react";
import { getContrastTextColor } from "../helpers";

interface Props {
  onConfirm: (val: string) => void;
  onClose: () => void;
}

const ColorImage: React.FC<Props> = ({ onConfirm, onClose }) => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [hoveringColor, setHoveringColor] = useState<string | null>(null);
  const [bitmapSize, setBitmapSize] = useState<ImageBitmap | null>(null);

  const handleChangeFile = async (file: File) => {
    if (bitmapSize) bitmapSize.close();
    const bitmap = await createImageBitmap(file);
    canvasRef.current!.width = bitmap.width;
    canvasRef.current!.height = bitmap.height;
    const ctx = canvasRef.current!.getContext("2d");
    ctx!.drawImage(bitmap, 0, 0);
    setBitmapSize(bitmap);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ) => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ratioX = bitmapSize!.width / rect.width;
    const ratioY = bitmapSize!.height / rect.height;
    const pixelData = ctx!.getImageData(ratioX * x, ratioY * y, 100, 100).data;
    const hex = "#" + convert.rgb.hex(pixelData[0], pixelData[1], pixelData[2]);
    setHoveringColor(hex);
  };

  const handleClose = () => {
    setSelectedColor(null);
    if (bitmapSize) bitmapSize.close();
    setBitmapSize(null);
    onClose();
  };

  const handleConfirm = () => {
    onConfirm(selectedColor!);
    handleClose();
  };

  return (
    <div>
      <input
        ref={inputFileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleChangeFile(e.target.files?.[0] as File)}
      />
      {hoveringColor && (
        <div className="fixed bottom-4 right-4">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-400 text-sm font-bold uppercase shadow-sm"
            style={{
              backgroundColor: hoveringColor,
              color: getContrastTextColor(hoveringColor),
            }}
          >
            {hoveringColor}
          </div>
        </div>
      )}
      {bitmapSize && (
        <div className="mb-4 flex justify-center gap-4">
          {selectedColor ? (
            <div
              className="flex h-10 cursor-pointer items-center rounded-lg px-4"
              style={{
                backgroundColor: selectedColor,
                color: getContrastTextColor(selectedColor),
              }}
              onClick={handleConfirm}
            >
              Get {selectedColor.toUpperCase()}
            </div>
          ) : (
            <Button variant="outline" onClick={handleClose}>
              Close
            </Button>
          )}
          <Button onClick={() => inputFileRef.current!.click()}>
            Change image
          </Button>
        </div>
      )}
      <div
        className={cn("flex min-w-[45rem] flex-col items-center pb-32", {
          hidden: !bitmapSize,
        })}
      >
        <canvas
          ref={canvasRef}
          className="w-full"
          onMouseMove={handleMouseMove}
          onMouseOut={() => setHoveringColor(null)}
          onClick={() => setSelectedColor(hoveringColor)}
        />
      </div>
      <div
        className={cn("mb-16 flex flex-col items-center", {
          hidden: bitmapSize,
        })}
      >
        <div
          className="flex w-96 items-center justify-center rounded-lg border border-dashed border-neutral-500 py-16"
          onClick={() => inputFileRef.current!.click()}
        >
          <span className="font-semibold">Please upload your image</span>
        </div>
        <Button variant="outline" className="mt-4" onClick={handleClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default ColorImage;
