"use client";

import Puzzle2048Icon from "@/assets/icons/puzzle-2048,icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import { Route } from "@/constants/routes";
import { useEffect, useState } from "react";
import BoardBackground from "./_components/board-background";
import BoardCard from "./_components/board-card";
import Instruction from "./_components/instruction";
import { Direction, GameResult } from "./constants";
import {
  checkGameOver,
  checkWin,
  getInitialBoardState,
  getNextBoardState,
} from "./helpers";
import type { BoardCell } from "./types";

const Game2048Page: React.FC = () => {
  const [result, setResult] = useState<GameResult>(GameResult.Undetermined);
  const [boardCells, setBoardCells] = useState<BoardCell[]>([]);
  const [prevBoardCells, setPrevBoardCells] = useState<BoardCell[] | null>(
    null,
  );

  useEffect(() => {
    setBoardCells(getInitialBoardState());
  }, []);

  useEffect(() => {
    const isAnimatingDestroyedCell = boardCells.some((cell) => cell.destroyed);

    if (isAnimatingDestroyedCell) return;

    const checkGameStatus = (boardCells: BoardCell[]) => {
      if (checkGameOver(boardCells)) {
        setResult(GameResult.Lose);
      } else if (checkWin(boardCells)) {
        setResult(GameResult.Win);
      }
    };

    const handlePressKey = (e: KeyboardEvent) => {
      let newBoardCells: BoardCell[] | null = null;

      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        newBoardCells = getNextBoardState(boardCells, Direction.Up);
      } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
        newBoardCells = getNextBoardState(boardCells, Direction.Down);
      } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        newBoardCells = getNextBoardState(boardCells, Direction.Left);
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        newBoardCells = getNextBoardState(boardCells, Direction.Right);
      }

      if (!newBoardCells) return;

      setPrevBoardCells(boardCells);
      setBoardCells(newBoardCells);
      checkGameStatus(newBoardCells);
    };

    document.addEventListener("keydown", handlePressKey);

    return () => {
      document.removeEventListener("keydown", handlePressKey);
    };
  }, [boardCells]);

  const handleRemove = (id: number) => {
    setBoardCells((prev) => prev.filter((cell) => cell.id !== id));
  };

  const handleReset = () => {
    setResult(GameResult.Undetermined);
    setBoardCells(getInitialBoardState());
    setPrevBoardCells(null);
  };

  const handleUndo = () => {
    if (!prevBoardCells) return;
    setBoardCells(prevBoardCells);
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
          <Button
            variant="secondary"
            className="mt-4"
            disabled={!prevBoardCells}
            onClick={handleUndo}
          >
            Undo
          </Button>
          <Instruction />
        </div>
        <div className="relative grid h-[28rem] w-[28rem] flex-shrink-0 grid-cols-4 gap-2 rounded-xl bg-neutral-400 p-2 dark:bg-neutral-700">
          <BoardBackground />
          {boardCells.map((cell) => (
            <BoardCard key={cell.id} {...cell} onDestroy={handleRemove} />
          ))}
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
