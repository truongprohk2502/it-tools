"use client";

import AudioCutterIcon from "@/assets/icons/audio-cutter.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { useState } from "react";
import { AudioEditor } from "./_components/audio-editor";
import { AudioUpload } from "./_components/audio-upload";

const AudioCutterPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = (file: File) => {
    setFile(file);
  };

  const handleResetFile = () => {
    setFile(null);
  };

  return (
    <div className="mx-auto min-w-[50rem] max-w-[70rem] px-6">
      <ToolHeader
        title="Audio Cutter"
        description="A simple online tool which lets you trim your audio files on the fly. Choose your file and click upload to get started!"
        href={Route.AudioCutter}
        icon={AudioCutterIcon}
      />
      <div className="h-[calc(100vh-20rem)] min-h-[20rem]">
        <div
          className="relative h-full w-full"
          style={{
            background: "linear-gradient(135deg, #bb71f3 0%, #3d4d91 100%)",
          }}
        >
          {file ? (
            <AudioEditor file={file} onResetFile={handleResetFile} />
          ) : (
            <AudioUpload onUpload={handleUpload} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioCutterPage;
