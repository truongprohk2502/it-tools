"use client";

import { StorageKeys } from "@/constants/storage";
import useDomLoaded from "@/hooks/use-dom-loaded";
import useSyncLocalStorage from "@/hooks/use-sync-local-storage";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ScreenButton from "./screen-button";
import SettingButton from "./setting-button";

interface Props {
  onFinish: (blob: Blob) => void;
}

const ScreenRecorder: React.FC<Props> = ({ onFinish }) => {
  const [requireMicrophone, setRequireMicrophone] =
    useSyncLocalStorage<boolean>(StorageKeys.RequireMicrophone, false);

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

  const mediaRecorder = useRef<MediaRecorder>(null);
  const countingRef = useRef<HTMLSpanElement>(null);
  const countNumber = useRef<number>(3);
  const chunks = useRef<Blob[]>([]);

  const domLoaded = useDomLoaded();

  const isNotSupported = useMemo(() => {
    if (!domLoaded) return false;
    if (!MediaRecorder) return true;
    if (!navigator?.mediaDevices?.getDisplayMedia) return true;
    return false;
  }, [domLoaded]);

  useEffect(() => {
    return () => {
      mediaStream?.getTracks().forEach((track) => track.stop());
    };
  }, [mediaStream]);

  const videoCallbackRef = useCallback(
    (video: HTMLVideoElement) => {
      if (!video || !mediaStream) return;
      video.srcObject = mediaStream;
    },
    [mediaStream],
  );

  const initMediaRecorder = (stream: MediaStream) => {
    mediaRecorder.current = new MediaRecorder(stream);

    mediaRecorder.current.ondataavailable = (e) => {
      chunks.current.push(e.data);
    };

    mediaRecorder.current.onstop = () => {
      const blob = new Blob(chunks.current, { type: "video/mp4" });
      onFinish(blob);
    };
  };

  const startRecord = async (stream: MediaStream) => {
    countNumber.current = 3;
    setIsCounting(false);

    try {
      initMediaRecorder(stream);
      mediaRecorder.current?.start();
      setIsRecording(true);
    } catch (err: unknown) {
      setIsRecording(false);

      if (err instanceof Error && err.name === "NotAllowedError") {
        setErrorMessage("Screen shared permission is not allowed.");
      } else {
        setErrorMessage("Unexpected error. Please try again.");
      }
    }
  };

  const setCountdown = (stream: MediaStream) => {
    setIsCounting(true);

    const interval = setInterval(() => {
      countNumber.current--;

      if (countingRef.current)
        countingRef.current.innerHTML = countNumber.current.toString();

      if (countNumber.current === 0) {
        clearInterval(interval);
        startRecord(stream);
      }
    }, 1000);
  };

  const getAudioTrack = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioTracks = stream.getAudioTracks();
      if (!audioTracks.length) throw Error();
      return audioTracks;
    } catch {
      setErrorMessage("Cannot get audio stream from microphone.");
      setRequireMicrophone(false);
      return [];
    }
  };

  const handleStart = async () => {
    try {
      let audioTracks: MediaStreamTrack[] = [];

      if (requireMicrophone) {
        audioTracks = await getAudioTrack();
        if (!audioTracks.length) return;
      }

      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: requireMicrophone,
      });

      audioTracks.forEach((track) => stream.addTrack(track));

      setMediaStream(stream);
      setCountdown(stream);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "NotAllowedError") {
        setErrorMessage("Screen shared permission is not allowed.");
      } else {
        setErrorMessage("Unexpected error. Please try again.");
      }
    }
  };

  const handleStop = () => {
    setIsRecording(false);
    setMediaStream(null);
    mediaRecorder.current?.stop();
  };

  const toggleRequireMicrophone = () =>
    setRequireMicrophone(!requireMicrophone);

  useEffect(() => {
    if (!mediaStream) return;

    mediaStream.addEventListener("ended", handleStop, false);
    mediaStream.addEventListener("inactive", handleStop, false);
    mediaStream.getTracks().forEach(function (track) {
      track.addEventListener("ended", handleStop, false);
      track.addEventListener("inactive", handleStop, false);
    });
  }, [mediaStream]);

  return (
    <div
      className="relative h-[calc(100vh-20rem)] min-h-[20rem] w-full"
      style={{
        background: isRecording
          ? "transparent"
          : "linear-gradient(135deg, #bb71f3 0%, #3d4d91 100%)",
      }}
    >
      {isNotSupported ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-medium text-neutral-200">
            Your browser does not support this feature.
          </span>
        </div>
      ) : (
        <>
          {isRecording ? (
            <div className="absolute inset-x-0 top-0">
              <video ref={videoCallbackRef} autoPlay muted className="w-full" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center py-4">
                <ScreenButton type="stop" onClick={handleStop} />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              {isCounting ? (
                <span
                  ref={countingRef}
                  className="text-6xl font-bold text-neutral-300"
                >
                  3
                </span>
              ) : (
                <span className="font-medium text-neutral-200">
                  {errorMessage || "Click the button to start recording..."}
                </span>
              )}
            </div>
          )}
          {!isCounting && !isRecording && (
            <div className="absolute inset-x-0 bottom-0 flex h-20 items-center justify-center gap-4 px-6">
              <ScreenButton type="start" onClick={handleStart} />
              <SettingButton
                type="microphone"
                tooltip="Microphone"
                isOn={requireMicrophone}
                onToggle={toggleRequireMicrophone}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ScreenRecorder;
