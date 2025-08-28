"use client";

import GomokuIcon from "@/assets/icons/gomoku.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import { Route } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import Cell from "./_components/Cell";
import { BOARD_SIZE, CellStatus, GameResult } from "./constants";
import { checkDraw, checkWin, getDefaultBoard } from "./helpers";

type Position = {
  row: number;
  col: number;
};

const GomokuGamePage: React.FC = () => {
  const boardWrapperRef = useRef<HTMLDivElement>(null);

  const workerRef = useRef<Worker>(null);

  const [boardLoaded, setBoardLoaded] = useState<boolean>(false);
  const [unsupported, setUnsupported] = useState<boolean>(false);
  const [boardCells, setBoardCells] =
    useState<CellStatus[][]>(getDefaultBoard());
  const [recentPlayerMove, setRecentPlayerMove] = useState<Position | null>(
    null,
  );
  const [recentComputerMove, setRecentComputerMove] = useState<Position | null>(
    null,
  );
  const [result, setResult] = useState<GameResult>(GameResult.Undetermined);

  useEffect(() => {
    const handleResizeWindow = () => {
      if (!boardWrapperRef.current) return;
      const size = window.innerHeight - 200;
      const maxSize = 42 * 16;
      const boardSize = size > maxSize ? maxSize : size;
      boardWrapperRef.current.style.width = `${boardSize}px`;
      boardWrapperRef.current.style.height = `${boardSize}px`;
      setBoardLoaded(true);
    };

    handleResizeWindow();

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const handleMove = useCallback(
    (row: number, col: number, player: CellStatus) => {
      if (player === CellStatus.Player) setRecentPlayerMove({ row, col });

      const newBoardCells = boardCells.map((_, rowId) =>
        boardCells[rowId].map((cell, colId) =>
          rowId === row && colId === col ? player : cell,
        ),
      );

      setBoardCells(newBoardCells);

      const isWin = checkWin(newBoardCells, player, row, col);
      const isDraw = checkDraw(newBoardCells);
      const isComputerTurn = player === "x";

      if (isWin) {
        setResult(player === "x" ? GameResult.YouWin : GameResult.ComputerWin);
      } else if (isDraw) {
        setResult(GameResult.Draw);
      } else if (isComputerTurn) {
        workerRef.current?.postMessage(newBoardCells);
      }
    },
    [boardCells],
  );

  useEffect(() => {
    if (!window.Worker) {
      setUnsupported(true);
      return;
    }

    const worker = new Worker("/workers/gomoku.js");

    workerRef.current = worker;

    return () => {
      worker.terminate();
    };
  }, []);

  useEffect(() => {
    if (!workerRef.current) return;

    const handleReceiveMessage = (
      e: MessageEvent<{ row: number; col: number }>,
    ) => {
      if (e.data) {
        const { row, col } = e.data;
        handleMove(row, col, CellStatus.Computer);
        setRecentComputerMove({ row, col });
      }
    };

    const worker = workerRef.current;

    worker.addEventListener("message", handleReceiveMessage);

    return () => {
      worker.removeEventListener("message", handleReceiveMessage);
    };
  }, [handleMove]);

  const handleReset = () => {
    setRecentPlayerMove(null);
    setRecentComputerMove(null);
    setResult(GameResult.Undetermined);
    setBoardCells(getDefaultBoard());
  };

  const handleUndo = () => {
    const newBoardCells = boardCells.map((_, rowId) =>
      boardCells[rowId].map((cell, colId) => {
        const isRecentComputer =
          recentComputerMove &&
          recentComputerMove.row === rowId &&
          recentComputerMove.col === colId;

        if (isRecentComputer) return CellStatus.None;

        const isRecentPlayer =
          recentPlayerMove &&
          recentPlayerMove.row === rowId &&
          recentPlayerMove.col === colId;

        if (isRecentPlayer) return CellStatus.None;

        return cell;
      }),
    );

    setBoardCells(newBoardCells);
    setRecentComputerMove(null);
    setRecentPlayerMove(null);
  };

  return (
    <div className="mx-auto w-[45rem] px-6">
      <ToolHeader
        title="Gomoku Game"
        description="Play Gomoku game with computer."
        href={Route.GomokuGame}
        icon={GomokuIcon}
      />
      {unsupported ? (
        <p className="text-center text-lg font-medium">
          Your browser does not support this game.
        </p>
      ) : (
        <>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Button variant="destructive" onClick={handleReset}>
              New game
            </Button>
            <Button
              variant="secondary"
              disabled={!recentPlayerMove}
              onClick={handleUndo}
            >
              Undo
            </Button>
          </div>
          <div
            ref={boardWrapperRef}
            style={{
              gridTemplateRows: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
              gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
            }}
            className={cn(
              "relative my-4 grid max-w-[45rem] gap-[1px] bg-neutral-700 py-[1px] pl-[1px]",
              { invisible: !boardLoaded },
            )}
          >
            {boardCells.map((_, rowId) =>
              boardCells[rowId].map((status, colId) => (
                <Cell
                  key={colId}
                  row={rowId}
                  col={colId}
                  status={status}
                  highlight={
                    recentComputerMove !== null &&
                    rowId === recentComputerMove.row &&
                    colId === recentComputerMove.col
                  }
                  onClick={handleMove}
                />
              )),
            )}
            {result !== GameResult.Undetermined && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                <p className="text-2xl font-semibold text-neutral-200">
                  {result}
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GomokuGamePage;
