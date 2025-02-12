"use client";

import getBlobDuration from "get-blob-duration";
import { Howl, Howler } from "howler";
import { useEffect, useMemo, useRef, useState } from "react";
import Footer from "./footer";
import Header, { HeaderRef } from "./header";
import Main from "./main";
import Visualizer from "./visualizer";

interface Props {
  blob: Blob;
  onDownload: () => void;
  onRemove: () => void;
}

const AudioPlayer: React.FC<Props> = ({ blob, onDownload, onRemove }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const progressRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HeaderRef>(null);
  const audioUrl = useRef<string>("");
  const duration = useRef<number>(0);

  const sound = useMemo(() => {
    audioUrl.current = URL.createObjectURL(blob);

    const howl = new Howl({
      src: audioUrl.current,
      html5: true,
      onend: () => {
        setIsPlaying(false);
      },
    });

    return howl;
  }, []);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(audioUrl.current);
    };
  }, []);

  useEffect(() => {
    sound.on("load", async () => {
      const soundDuration = Number.isFinite(sound.duration())
        ? sound.duration()
        : await getBlobDuration(blob);

      duration.current = soundDuration;
      headerRef.current?.setDuration(Math.round(soundDuration));
      setAudioSeek(0);
    });
  }, [sound]);

  useEffect(() => {
    const updateSeek = () => {
      const seek = sound.seek() || 0;
      setAudioSeek((100 * seek) / duration.current);
      requestAnimationFrame(updateSeek);
    };

    sound.on("play", updateSeek);
  }, [sound]);

  const setAudioSeek = (percentage: number) => {
    const percent = percentage > 100 ? 100 : percentage;
    headerRef.current?.setTimer(Math.round((duration.current * percent) / 100));
    if (progressRef.current) progressRef.current.style.width = `${percent}%`;
  };

  const handleSetSeek = (percentage: number) => {
    sound.seek((duration.current * percentage) / 100);
    setAudioSeek(percentage);
  };

  const handleSetVolume = (volume: number) => {
    Howler.volume(volume / 100);
  };

  const handleTogglePlaying = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  const handleReset = () => {
    handleSetSeek(0);
  };

  return (
    <>
      <div
        ref={progressRef}
        className="absolute inset-y-0 left-0 bg-black bg-opacity-10"
      />
      <Header ref={headerRef} onDownload={onDownload} onRemove={onRemove} />
      <Visualizer isPlaying={isPlaying} />
      <Main onClick={handleSetSeek} />
      <Footer
        isPlaying={isPlaying}
        onTogglePlaying={handleTogglePlaying}
        onVolumeChange={handleSetVolume}
        onReset={handleReset}
      />
    </>
  );
};

export default AudioPlayer;
