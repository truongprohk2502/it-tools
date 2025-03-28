"use client";

import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { useEffect, useImperativeHandle, useRef } from "react";
import type { CaptureImage } from "../types";

export interface CaptureVideoRefProps {
  getCaptureImage: () => CaptureImage | undefined;
}

interface Props {
  ref: React.RefObject<CaptureVideoRefProps>;
  file: File | null;
}

const VideoPlayer: React.FC<Props> = ({ ref, file }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const loadedVideoRef = useRef<boolean>(false);

  useImperativeHandle(ref, () => {
    return {
      getCaptureImage,
    };
  }, []);

  useEffect(() => {
    loadedVideoRef.current = false;

    const video = videoRef.current;

    const canvas = document.createElement("canvas");

    if (!video || !file) return;

    const url = URL.createObjectURL(file);

    video.src = url;

    const handleLoadedMetadata = () => {
      loadedVideoRef.current = true;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvasRef.current = canvas;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      canvas.remove();
      URL.revokeObjectURL(url);
      canvasRef.current = null;
    };
  }, [file]);

  const getCaptureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const video = videoRef.current;
    const loadedVideo = loadedVideoRef.current;

    if (!canvas || !context || !video || !loadedVideo) return;

    context.fillRect(0, 0, video.videoWidth, video.videoHeight);
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

    const dataURI = canvas.toDataURL("image/jpeg");
    const fileName = `screen-capture-${dayjs().format("YYYY-MM-DDTHH:mm:ss_SSS")}.jpg`;
    return { fileName, dataURI };
  };

  return (
    <video
      ref={videoRef}
      controls
      className={cn("w-full", { hidden: !file })}
    />
  );
};

export default VideoPlayer;
