"use client";

import Siriwave from "react-siriwave";

interface Props {
  isPlaying: boolean;
}

const Visualizer: React.FC<Props> = ({ isPlaying }) => {
  return (
    <div className="absolute inset-x-0 bottom-16 top-16 flex items-center justify-center">
      {isPlaying ? (
        <div className="flex h-full w-full items-center [&>div>canvas]:!w-full [&>div]:w-full">
          <Siriwave speed={0.1} />
        </div>
      ) : (
        <div className="h-0.5 w-full bg-white" />
      )}
    </div>
  );
};

export default Visualizer;
