"use client";

import { saveAs } from "file-saver";
import { useEffect, useRef, useState } from "react";
import wavesurfer from "wavesurfer.js";
import RegionsPlugin, {
  type Region,
} from "wavesurfer.js/dist/plugins/regions.esm.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm.js";
import { audioBufferToBlob, sliceAudioBuffer } from "../../helpers";
import Footer from "./footer";
import Header from "./header";

interface Props {
  file: File;
  onResetFile: () => void;
}

const AudioEditor: React.FC<Props> = ({ file, onResetFile }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const waveSurferRef = useRef<HTMLDivElement>(null);
  const timeLineRef = useRef<HTMLDivElement>(null);
  const regionRef = useRef<Region | null>(null);
  const duration = useRef<number>(0);

  const waveSufferInstance = useRef<wavesurfer | null>(null);

  useEffect(() => {
    const fileUrl = URL.createObjectURL(file);

    const timelinePlugin = TimelinePlugin.create({
      container: "#wave-timeline",
    });
    const regionsPlugin = RegionsPlugin.create();

    waveSufferInstance.current = wavesurfer.create({
      container: "#waveform",
      autoCenter: true,
      cursorColor: "red",
      waveColor: "#9bbeff",
      progressColor: "#436afc",
      url: fileUrl,
      plugins: [timelinePlugin, regionsPlugin],
    });

    waveSufferInstance.current.on("ready", () => {
      if (!waveSufferInstance.current) return;
      duration.current = waveSufferInstance.current.getDuration();

      regionsPlugin.enableDragSelection({
        color: "#436afc66",
      });

      regionRef.current = regionsPlugin.addRegion({
        start: 0,
        end: duration.current,
        color: "#436afc66",
      });

      regionsPlugin.on("region-created", (region) => {
        regionRef.current = region;
        const allRegions = regionsPlugin.getRegions();
        for (const regionItem of allRegions) {
          if (regionItem.id === region.id) continue;
          regionItem.remove();
        }
      });
    });

    waveSufferInstance.current.on("play", () => setIsPlaying(true));
    waveSufferInstance.current.on("pause", () => setIsPlaying(false));
    waveSufferInstance.current.on("finish", () => setIsPlaying(false));

    return () => {
      URL.revokeObjectURL(fileUrl);
      timelinePlugin.destroy();
      regionsPlugin.destroy();
      waveSufferInstance.current?.destroy();
    };
  }, []);

  const handleDownload = () => {
    const region = regionRef.current;

    if (!region) return;

    const { start, end } = region;

    const reader = new FileReader();

    reader.onloadend = async function (evt) {
      if (evt.target?.readyState == FileReader.DONE) {
        const arrayBuffer = evt.target.result as ArrayBuffer;
        const audioBuffer = await new AudioContext().decodeAudioData(
          arrayBuffer,
        );

        const startPos = Math.floor(
          (audioBuffer.length * start) / audioBuffer.duration,
        );
        const endPos = Math.floor(
          (audioBuffer.length * end) / audioBuffer.duration,
        );

        const audioSliced = sliceAudioBuffer(audioBuffer, startPos, endPos);
        const blob = audioBufferToBlob(audioSliced);
        saveAs(blob, "trimmed_audio.wav");
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const handleReload = () => {
    waveSufferInstance.current?.stop();
  };

  const handleTogglePlaying = () => {
    waveSufferInstance.current?.playPause();
  };

  const handleChangeZoom = (scale: number) => {
    waveSufferInstance.current?.zoom(scale);
  };

  return (
    <div className="relative h-full w-full">
      <Header
        fileName={file.name}
        onDownload={handleDownload}
        onRemove={onResetFile}
      />
      <div className="absolute inset-x-0 inset-y-16 flex flex-auto flex-col justify-center">
        <div ref={waveSurferRef} id="waveform" />
        <div ref={timeLineRef} id="wave-timeline" className="mb-12" />
      </div>
      <Footer
        playing={isPlaying}
        onReload={handleReload}
        onTogglePlaying={handleTogglePlaying}
        onChangeZoom={handleChangeZoom}
      />
    </div>
  );
};

export default AudioEditor;
