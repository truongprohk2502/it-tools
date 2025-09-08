"use client";

import VideoConverterIcon from "@/assets/icons/video-converter.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Route } from "@/constants/routes";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { useEffect, useRef, useState } from "react";
import {
  EXTRA_SETTINGS,
  SUPPORTING_INPUT_FORMATS,
  VIDEO_CONVERTERS,
  VIDEO_TYPES,
  VideoFormat,
} from "./constants";
import { getFileExtension } from "./helpers";

const VideoConvertersPage: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [inputFormat, setInputFormat] = useState<VideoFormat | null>(null);
  const [outputFormat, setOutputFormat] = useState<VideoFormat | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [convertedFileUrl, setConvertedFileUrl] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const ffmpegRef = useRef<FFmpeg>(null);

  useEffect(() => {
    ffmpegRef.current = new FFmpeg();

    const loadFfmpeg = async () => {
      const baseURL =
        "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd";

      const ffmpeg = ffmpegRef.current as FFmpeg;

      ffmpeg.on("progress", (data) => {
        setProgress(100 * data.progress);
      });

      const coreUrl = await toBlobURL(
        `${baseURL}/ffmpeg-core.js`,
        "text/javascript",
      );
      const wasmUrl = await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm",
      );

      await ffmpeg.load({
        coreURL: coreUrl,
        wasmURL: wasmUrl,
      });

      setLoaded(true);
    };

    loadFfmpeg();
  }, []);

  const handleConvert = async () => {
    if (!uploadedFile || !inputFormat || !outputFormat) return;

    const videoURL = URL.createObjectURL(uploadedFile);

    const ffmpeg = ffmpegRef.current;
    if (!ffmpeg) return;

    try {
      setIsConverting(true);
      setProgress(0);

      await ffmpeg.writeFile(`input.${inputFormat}`, await fetchFile(videoURL));
      const extraSettings = EXTRA_SETTINGS[outputFormat] ?? [];
      await ffmpeg.exec([
        "-i",
        `input.${inputFormat}`,
        ...extraSettings,
        `output.${outputFormat}`,
      ]);

      const fileData = await ffmpeg.readFile(`output.${outputFormat}`);

      // @ts-expect-error ignore convert data type
      const data = new Uint8Array(fileData as ArrayBuffer);

      const convertedUrl = URL.createObjectURL(
        new Blob([data.buffer], { type: VIDEO_TYPES[outputFormat] }),
      );

      setConvertedFileUrl((prevUrl) => {
        if (prevUrl) URL.revokeObjectURL(prevUrl);
        return convertedUrl;
      });
      URL.revokeObjectURL(videoURL);
    } catch (error) {
      console.error("Error converting video:", error);
    } finally {
      setIsConverting(false);
    }
  };

  const reset = () => {
    if (convertedFileUrl) URL.revokeObjectURL(convertedFileUrl);
    setUploadedFile(null);
    setConvertedFileUrl(null);
    setOutputFormat(null);
  };

  const handleChangeOutput = (format: VideoFormat) => {
    if (convertedFileUrl) URL.revokeObjectURL(convertedFileUrl);
    setConvertedFileUrl(null);
    setOutputFormat(format);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return reset();

    const inputExtension = getFileExtension(file);
    if (!inputExtension) return reset();

    setUploadedFile(file);
    setConvertedFileUrl(null);
    setInputFormat(inputExtension as VideoFormat);
    setOutputFormat(null);
  };

  const handleDownload = () => {
    if (!convertedFileUrl) return;
    const fileName =
      uploadedFile?.name.split(".").slice(0, -1).join(".") || "converted";
    const link = document.createElement("a");
    link.href = convertedFileUrl;
    link.download = `${fileName}.${outputFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-[40rem] px-6">
      <ToolHeader
        title="Video Converters"
        description="Convert your videos to different formats easily."
        href={Route.VideoConverters}
        icon={VideoConverterIcon}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="file"
          disabled={isConverting}
          accept={SUPPORTING_INPUT_FORMATS.map((ext) => "." + ext).join(",")}
          onChange={handleUpload}
          className="col-start-1 col-end-3"
        />
        <Select
          disabled={!uploadedFile || isConverting}
          value={outputFormat ?? ""}
          onValueChange={(val) => handleChangeOutput(val as VideoFormat)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select output format" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {(inputFormat && inputFormat in VIDEO_CONVERTERS
                ? VIDEO_CONVERTERS[inputFormat]
                : []
              ).map((value) => (
                <SelectItem key={value} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          onClick={handleConvert}
          disabled={!loaded || !uploadedFile || !outputFormat || isConverting}
        >
          Convert
        </Button>
      </div>
      <div className="mt-4">
        {isConverting && (
          <div className="my-4">
            <p className="mb-2 mt-4 text-lg font-medium">Converting video...</p>
            <Progress value={progress} />
          </div>
        )}
        {!isConverting && convertedFileUrl && (
          <div className="my-4">
            <p className="mb-2 mt-4 text-lg font-medium">
              Converted video:{" "}
              <span className="text-red-500">{`converted.${outputFormat}`}</span>
            </p>
            <Button variant="destructive" onClick={handleDownload}>
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoConvertersPage;
