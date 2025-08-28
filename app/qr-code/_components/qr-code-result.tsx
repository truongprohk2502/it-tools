"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StorageKeys } from "@/constants/storage";
import { BackgroundColor, Theme } from "@/constants/system";
import useSystemTheme from "@/hooks/use-system-theme";
import { cn } from "@/lib/utils";
import uniq from "lodash/uniq";
import { CircleXIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useRef, useState } from "react";
import { saveSvgAsPng } from "save-svg-as-png";
import { ERROR_CORRECTION_LEVELS, QR_FRAMES, QR_LOGOS } from "../constants";
import type { ErrorCorrectionType } from "../types";

interface Props {
  value: string;
}

const QrCodeResult: React.FC<Props> = ({ value }) => {
  const [selectedFrameId, setSelectedFrameId] = useState<number>(0);
  const [selectedLogoId, setSelectedLogoId] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [foregroundColor, setForegroundColor] = useState<string>("#000000");
  const [errorLevel, setErrorLevel] = useState<ErrorCorrectionType>("L");
  const [ownLogos, setOwnLogos] = useState<Array<string | null>>([]);

  const inputLogoRef = useRef<HTMLInputElement | null>(null);
  const qrImageRef = useRef<SVGSVGElement | null>(null);

  const theme = useSystemTheme();

  useEffect(() => {
    const getOwnLogos = () => {
      const logos = localStorage.getItem(StorageKeys.QrLogos);
      if (logos) {
        return uniq(
          logos.split("[]").filter((item) => typeof item === "string"),
        );
      } else {
        return [];
      }
    };

    setOwnLogos(getOwnLogos());
  }, []);

  const QrFrame = QR_FRAMES[selectedFrameId].frame;
  const qrLogos = QR_LOGOS.concat(ownLogos);

  const handleSetOwnLogos = (newLogos: string[]) => {
    if (newLogos.length)
      localStorage.setItem(StorageKeys.QrLogos, newLogos.join("[]"));
    else localStorage.removeItem(StorageKeys.QrLogos);
    setOwnLogos(newLogos);
  };

  const handleUploadLogo = (file: File | undefined) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event: ProgressEvent<FileReader>) {
      if (!inputLogoRef.current) return;
      const base64Image = event.target?.result;

      if (typeof base64Image !== "string" || ownLogos.includes(base64Image))
        return;

      const newLogos = [...ownLogos, base64Image];
      handleSetOwnLogos(newLogos as string[]);
      inputLogoRef.current.value = "";
    };

    reader.onerror = () => {
      if (!inputLogoRef.current) return;
      inputLogoRef.current.value = "";
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveLogo = (removeIndex: number) => {
    const newLogos = ownLogos.filter(
      (_, index) => index !== removeIndex - QR_LOGOS.length,
    );

    handleSetOwnLogos(newLogos as string[]);
    if (removeIndex === selectedLogoId) setSelectedLogoId(0);
    if (removeIndex < selectedLogoId) setSelectedLogoId(selectedLogoId - 1);
  };

  const handleDownload = () => {
    if (!qrImageRef.current) return;
    saveSvgAsPng(qrImageRef.current, "qrcode.png");
  };

  return (
    <div className="ml-4 w-96 flex-shrink-0 rounded-lg border border-neutral-400 px-8 py-8 dark:border-neutral-700">
      <div className="aspect-square w-full overflow-hidden">
        <div className="-ml-[40px] -mt-[40px] w-[calc(100%+80px)]">
          <QrFrame
            ref={qrImageRef}
            bgColor={backgroundColor}
            fgColor={foregroundColor}
          >
            <QRCodeSVG
              size={220}
              value={value}
              bgColor={backgroundColor}
              fgColor={foregroundColor}
              level={errorLevel}
              x={QR_FRAMES[selectedFrameId].x}
              y={QR_FRAMES[selectedFrameId].y}
              imageSettings={
                selectedLogoId
                  ? {
                      src: qrLogos[selectedLogoId] as string,
                      x: undefined,
                      y: undefined,
                      height: 50,
                      width: 50,
                      excavate: true,
                    }
                  : undefined
              }
            />
          </QrFrame>
        </div>
      </div>
      <div className="mb-1 mt-4 font-bold">Frame</div>
      <div className="grid grid-cols-5 gap-3">
        {QR_FRAMES.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-transparent",
              {
                "border-neutral-400 bg-neutral-100 dark:border-neutral-400 dark:bg-neutral-600":
                  selectedFrameId === index,
              },
            )}
            onClick={() => setSelectedFrameId(index)}
          >
            {index ? (
              <item.frame
                bgColor={
                  theme === Theme.Dark ? BackgroundColor.Dark : undefined
                }
                fgColor={theme === Theme.Dark ? "white" : undefined}
              />
            ) : (
              <XIcon width={24} height={24} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="mb-1 font-bold">Background</p>
          <Input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div>
          <p className="mb-1 font-bold">Foreground</p>
          <Input
            type="color"
            value={foregroundColor}
            onChange={(e) => setForegroundColor(e.target.value)}
          />
        </div>
      </div>
      <p className="mb-1 mt-4 font-bold">Error correction level</p>
      <Select
        value={errorLevel}
        onValueChange={(val) => setErrorLevel(val as ErrorCorrectionType)}
      >
        <SelectTrigger className="w-[12rem] flex-shrink-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {ERROR_CORRECTION_LEVELS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="mb-1 mt-4 font-bold">Logo</div>
      <div className="grid grid-cols-5 gap-3">
        {qrLogos.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-transparent",
              {
                "border-neutral-400 bg-neutral-100 dark:border-neutral-400 dark:bg-neutral-600":
                  selectedLogoId === index,
              },
            )}
          >
            {item?.startsWith("data:") && (
              <CircleXIcon
                width={18}
                height={18}
                className="absolute -right-2 -top-2"
                onClick={() => handleRemoveLogo(index)}
              />
            )}
            {item ? (
              <Image
                src={item}
                alt="qr"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
                onClick={() => setSelectedLogoId(index)}
              />
            ) : (
              <XIcon
                width={24}
                height={24}
                onClick={() => setSelectedLogoId(index)}
              />
            )}
          </div>
        ))}
      </div>
      <p className="relative mt-4 w-fit text-sm text-blue-500">
        Upload logo
        <Input
          ref={inputLogoRef}
          type="file"
          accept="image/*"
          className="absolute inset-0 cursor-pointer opacity-0"
          onChange={(e) => handleUploadLogo(e.target.files?.[0])}
        />
      </p>
      <Button onClick={handleDownload} className="mt-6">
        Download
      </Button>
    </div>
  );
};

export default QrCodeResult;
