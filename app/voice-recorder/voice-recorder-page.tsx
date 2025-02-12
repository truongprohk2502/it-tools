"use client";

import VoiceRecorderIcon from "@/assets/icons/voice-recorder.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import useDomLoaded from "@/hooks/use-dom-loaded";
import { saveAs } from "file-saver";
import { useMemo, useState } from "react";
import { AudioPlayer } from "./_components/audio-player";
import { AudioRecorder } from "./_components/audio-recorder";

const VoiceRecorderPage: React.FC = () => {
  const [blob, setBlob] = useState<Blob | null>(null);

  const domLoaded = useDomLoaded();

  const isNotSupported = useMemo(() => {
    if (!domLoaded) return false;
    if (!MediaRecorder) return true;
    if (!navigator?.mediaDevices?.getUserMedia) return true;
    return false;
  }, [domLoaded]);

  const clearBlob = () => setBlob(null);

  const handleDownload = () => {
    if (blob) saveAs(blob, "recording.mp3");
  };

  return (
    <div className="mx-auto min-w-[50rem] max-w-[70rem] px-6">
      <ToolHeader
        title="Voice Recorder"
        description="Record audio through your computer or phone's inbuilt mic. Just press the red button to start recording! Download it if you want."
        href={Route.VoiceRecorder}
        icon={VoiceRecorderIcon}
      />
      <div className="h-[calc(100vh-20rem)] min-h-[20rem]">
        <div
          className="relative h-full w-full"
          style={{
            background: "linear-gradient(135deg, #bb71f3 0%, #3d4d91 100%)",
          }}
        >
          {isNotSupported ? (
            <div className="flex h-full w-full items-center justify-center p-6">
              <span className="text-neutral-200">
                Your browser does not support this feature.
              </span>
            </div>
          ) : blob ? (
            <AudioPlayer
              blob={blob}
              onDownload={handleDownload}
              onRemove={clearBlob}
            />
          ) : (
            <AudioRecorder onFinish={setBlob} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceRecorderPage;
