"use client";

import ScreenRecorderIcon from "@/assets/icons/screen-recorder.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { useState } from "react";
import { ScreenPreview } from "./_components/screen-preview";
import { ScreenRecorder } from "./_components/screen-record";

const ScreenRecorderPage: React.FC = () => {
  const [blob, setBlob] = useState<Blob | null>(null);

  const handleFinishRecord = (blob: Blob) => {
    setBlob(blob);
  };

  const handleRemove = () => {
    setBlob(null);
  };

  return (
    <div className="mx-auto min-w-[50rem] max-w-[70rem] px-6">
      <ToolHeader
        title="Screen Recorder"
        description="Record screen of your computer with microphone if needed. Just press the red button to start recording! Download it if you want."
        href={Route.ScreenRecorder}
        icon={ScreenRecorderIcon}
      />
      {blob ? (
        <ScreenPreview blob={blob} onRemove={handleRemove} />
      ) : (
        <ScreenRecorder onFinish={handleFinishRecord} />
      )}
    </div>
  );
};

export default ScreenRecorderPage;
