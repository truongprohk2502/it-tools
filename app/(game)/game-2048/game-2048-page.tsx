"use client";

import Puzzle2048Icon from "@/assets/icons/puzzle-2048,icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import { Route } from "@/constants/routes";
import { useState } from "react";
import BoardBackground from "./_components/board-background";
import BoardCard from "./_components/board-card";
import { GameResult } from "./constants";

const Game2048Page: React.FC = () => {
  const [result, setResult] = useState<GameResult>(GameResult.Undetermined);

  const handleReset = () => {
    setResult(GameResult.Undetermined);
  };

  return (
    <div className="mx-auto w-[45rem] px-6">
      <ToolHeader
        title="Game 2048"
        description="Play 2048 puzzle game."
        href={Route.Game2048}
        icon={Puzzle2048Icon}
      />
      <div className="my-4 flex gap-4">
        <div className="flex flex-auto flex-col">
          <Button variant="destructive" onClick={handleReset}>
            New game
          </Button>
          <Button variant="secondary" className="mt-4">
            Undo
          </Button>
        </div>
        <div className="relative grid h-[28rem] w-[28rem] flex-shrink-0 grid-cols-4 gap-2 rounded-xl bg-neutral-400 p-2 dark:bg-neutral-700">
          <BoardBackground />
          <BoardCard value={2} x={3} y={2} />
          {result !== GameResult.Undetermined && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
              <p className="text-2xl font-semibold text-neutral-200">
                {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game2048Page;
