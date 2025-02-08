"use client";

import recordingAnimation from "@/assets/lotties/recording.json";
import { formatTime } from "@/lib/time";
import { MicIcon, PauseIcon, PlayIcon, SquareIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

interface Props {
  onFinish: (blob: Blob) => void;
}

const AudioRecorder: React.FC<Props> = ({ onFinish }) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isPausing, setIsPausing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const mediaRecorder = useRef<MediaRecorder>(null);
  const mediaStream = useRef<MediaStream>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const isPausingRef = useRef<boolean>(false);
  const chunks = useRef<Blob[]>([]);
  const durationMilliseconds = useRef<number>(0);
  const lastTimeMilliseconds = useRef<number>(0);

  const initMediaRecorder = (stream: MediaStream) => {
    mediaRecorder.current = new MediaRecorder(stream);

    mediaRecorder.current.ondataavailable = (e) => {
      chunks.current.push(e.data);
    };

    mediaRecorder.current.onstop = () => {
      const blob = new Blob(chunks.current, { type: "audio/mpeg" });
      onFinish(blob);
    };
  };

  const setDurationText = () => {
    if (!isPausingRef.current)
      durationMilliseconds.current += Date.now() - lastTimeMilliseconds.current;
    lastTimeMilliseconds.current = Date.now();
    const duration = Math.round(durationMilliseconds.current / 1000);
    const durationLabel = timeRef.current;
    if (!durationLabel) return;
    durationLabel.innerText = formatTime(duration);
    requestAnimationFrame(setDurationText);
  };

  const getMediaStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      mediaStream.current = stream;
      durationMilliseconds.current = 0;
      lastTimeMilliseconds.current = Date.now();
      setIsRecording(true);
      initMediaRecorder(stream);
      mediaRecorder.current?.start();
      setDurationText();
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "NotAllowedError") {
        setErrorMessage("Microphone permission is not allowed.");
      } else {
        setErrorMessage("Sound recording is unavailable.");
      }
    }
  };

  const handleStart = () => {
    getMediaStream();
  };

  const handleStop = () => {
    mediaRecorder.current?.stop();
    mediaStream.current?.getTracks().forEach((track) => track.stop());
  };

  const handleTogglePause = () => {
    if (isPausing) {
      mediaRecorder.current?.resume();
      isPausingRef.current = false;
      setIsPausing(false);
    } else {
      mediaRecorder.current?.pause();
      isPausingRef.current = true;
      setIsPausing(true);
    }
  };

  return (
    <div
      className="relative h-full w-full"
      style={{
        background: "linear-gradient(135deg, #bb71f3 0%, #3d4d91 100%)",
      }}
    >
      {errorMessage ? (
        <div className="flex h-full w-full items-center justify-center p-6">
          <span className="text-neutral-200">{errorMessage}</span>
        </div>
      ) : (
        <>
          <div className="absolute inset-x-0 top-0 flex h-20 items-center justify-center">
            <span
              ref={timeRef}
              className="text-2xl font-semibold text-neutral-200"
            />
          </div>
          <div className="absolute inset-x-0 bottom-20 top-20 flex items-center justify-center">
            {isRecording ? (
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: recordingAnimation,
                }}
                height={100}
                width={100}
                isPaused={isPausing}
              />
            ) : (
              <span className="font-medium text-neutral-200">
                Click the button to start recording...
              </span>
            )}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex h-20 items-center justify-center gap-4 px-6">
            {isRecording ? (
              <>
                <div
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-20 p-2"
                  onClick={handleStop}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <SquareIcon className="h-4 w-4 text-neutral-700" />
                  </div>
                </div>
                <div
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-20 p-2"
                  onClick={handleTogglePause}
                >
                  {isPausing ? (
                    <PlayIcon className="h-8 w-8 text-white" />
                  ) : (
                    <PauseIcon className="h-8 w-8 text-white" />
                  )}
                </div>
              </>
            ) : (
              <div
                className="h-14 w-14 cursor-pointer rounded-full bg-black bg-opacity-20 p-2 transition-all duration-150 hover:p-1.5"
                onClick={handleStart}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-red-500">
                  <MicIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AudioRecorder;
