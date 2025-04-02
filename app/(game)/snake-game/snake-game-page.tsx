"use client";

import CrossIcon from "@/assets/icons/cross.icon";
import SnakeIcon from "@/assets/icons/snake.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Route } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Instruction from "./_components/instruction";
import {
  BOARD_SIZE,
  Direction,
  GAME_OPTIONS,
  GameLevel,
  GameResult,
} from "./constants";
import { getInitialState, getNextState } from "./helpers";
import type { CellState } from "./types";

const SnakeGamePage: React.FC = () => {
  const boardWrapperRef = useRef<HTMLDivElement>(null);

  const [boardLoaded, setBoardLoaded] = useState<boolean>(false);
  const [intervalTime, setIntervalTime] = useState<GameLevel>(GameLevel.Easy);
  const [playing, setPlaying] = useState<boolean>(false);
  const [result, setResult] = useState<GameResult>(GameResult.Undetermined);
  const [cellState, setCellState] = useState<CellState | null>(null);

  const directionRef = useRef<Direction>(Direction.Down);
  const runningDirectionRef = useRef<Direction>(Direction.Down);

  useEffect(() => {
    setCellState(getInitialState());
  }, []);

  useEffect(() => {
    const handleResizeWindow = () => {
      const size = window.innerHeight - 200;
      const maxSize = 42 * 16;
      const boardSize = size > maxSize ? maxSize : size;
      boardWrapperRef.current!.style.width = `${boardSize}px`;
      boardWrapperRef.current!.style.height = `${boardSize}px`;
      setBoardLoaded(true);
    };

    handleResizeWindow();

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;

    const handlePressKey = (e: KeyboardEvent) => {
      const runningDirection = runningDirectionRef.current;

      const directionHorizontal =
        runningDirection === Direction.Left ||
        runningDirection === Direction.Right;
      const directionVertical =
        runningDirection === Direction.Up ||
        runningDirection === Direction.Down;

      if (
        (e.key === "ArrowUp" || e.key.toLowerCase() === "w") &&
        directionHorizontal
      ) {
        directionRef.current = Direction.Up;
      } else if (
        (e.key === "ArrowDown" || e.key.toLowerCase() === "s") &&
        directionHorizontal
      ) {
        directionRef.current = Direction.Down;
      } else if (
        (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") &&
        directionVertical
      ) {
        directionRef.current = Direction.Left;
      } else if (
        (e.key === "ArrowRight" || e.key.toLowerCase() === "d") &&
        directionVertical
      ) {
        directionRef.current = Direction.Right;
      }
    };

    document.addEventListener("keydown", handlePressKey);

    return () => {
      document.removeEventListener("keydown", handlePressKey);
    };
  }, [playing]);

  useEffect(() => {
    if (!playing) return;

    const interval = setInterval(() => {
      setCellState((prev) => {
        try {
          return prev
            ? getNextState(
                prev.snakeCells,
                prev.appleCell,
                directionRef.current,
              )
            : getInitialState();
        } catch {
          setPlaying(false);
          setResult(GameResult.GameOver);
          return prev;
        }
      });

      runningDirectionRef.current = directionRef.current;
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [playing, intervalTime]);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleReset = () => {
    setPlaying(false);
    setResult(GameResult.Undetermined);
    setCellState(getInitialState());
    directionRef.current = Direction.Down;
    runningDirectionRef.current = Direction.Down;
  };

  return (
    <div className="mx-auto w-[45rem] px-6">
      <ToolHeader
        title="Snake Game"
        description="Play Snake game."
        href={Route.Snake}
        icon={SnakeIcon}
      />
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-between gap-2">
          <Button variant="destructive" onClick={handleReset}>
            New game
          </Button>
          <Button
            variant="secondary"
            disabled={result !== GameResult.Undetermined}
            onClick={playing ? handlePause : handlePlay}
          >
            {playing ? "Pause" : "Play"}
          </Button>
          <Select
            disabled={result !== GameResult.Undetermined || playing}
            value={intervalTime.toString()}
            onValueChange={(val) => setIntervalTime(Number(val) as GameLevel)}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {GAME_OPTIONS.map((item) => (
                  <SelectItem key={item.value} value={item.value.toString()}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Instruction />
      </div>
      <div
        style={{
          gridTemplateRows: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
        }}
        className={cn(
          "relative my-4 grid max-w-[45rem] border-2 border-neutral-400 bg-neutral-300 p-0.5 dark:border-neutral-500 dark:bg-neutral-700",
          { invisible: !boardLoaded },
        )}
        ref={boardWrapperRef}
      >
        {cellState &&
          Array.from({ length: BOARD_SIZE }).map((_, y) =>
            Array.from({ length: BOARD_SIZE }).map((_, x) => {
              const { snakeCells, appleCell } = cellState;
              const isSnake = snakeCells.some(
                (cell) => cell.x === x && cell.y === y,
              );
              const isApple =
                appleCell && appleCell.x === x && appleCell.y === y;

              return (
                <div
                  key={`${x}-${y}`}
                  className={cn({
                    "rounded-lg bg-blue-500": isSnake,
                    "flex items-center justify-center": isApple,
                  })}
                >
                  {isApple && (
                    <CrossIcon
                      width={28}
                      height={28}
                      style={{
                        animationPlayState: playing ? "running" : "paused",
                      }}
                      className="animate-spin text-blue-500"
                    />
                  )}
                </div>
              );
            }),
          )}
        {result !== GameResult.Undetermined && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <p className="text-2xl font-semibold text-neutral-200">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakeGamePage;
