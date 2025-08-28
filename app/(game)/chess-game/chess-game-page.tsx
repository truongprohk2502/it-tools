"use client";

import ChessIcon from "@/assets/icons/chess.icon";
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
import { Chess, type Square } from "chess.js";
import { LoaderCircleIcon, SettingsIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { toast } from "sonner";
import { CHESS_OPTIONS, ChessLevel, ChessResult } from "./constants";

const ChessGamePage: React.FC = () => {
  const chessWrapperRef = useRef<HTMLDivElement>(null);

  const workerRef = useRef<Worker>(null);
  const gameRef = useRef<Chess>(new Chess());

  const [unsupported, setUnsupported] = useState<boolean>(false);
  const [loadingEngine, setLoadingEngine] = useState<boolean>(false);
  const [thinking, setThinking] = useState<boolean>(false);
  const [position, setPosition] = useState<string>(gameRef.current.fen());
  const [level, setLevel] = useState<ChessLevel>(ChessLevel.Easy);
  const [result, setResult] = useState<ChessResult>(ChessResult.Undetermined);

  const checkIsPlaying = () => {
    if (gameRef.current.isDraw() || gameRef.current.isDrawByFiftyMoves()) {
      setResult(ChessResult.Draw);
      return false;
    }

    if (gameRef.current.isGameOver()) {
      if (gameRef.current.turn() === "w") {
        setResult(ChessResult.ComputerWin);
      } else {
        setResult(ChessResult.YouWin);
      }
      return false;
    }

    return true;
  };

  useEffect(() => {
    const handleResizeWindow = () => {
      if (!chessWrapperRef.current) return;
      const size = window.innerHeight - 200;
      const maxSize = 42 * 16;
      const boardSize = size > maxSize ? maxSize : size;
      chessWrapperRef.current.style.width = `${boardSize}px`;
      chessWrapperRef.current.style.height = `${boardSize}px`;
    };

    handleResizeWindow();

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (!window.Worker) {
      setUnsupported(true);
      return;
    }

    const worker = new Worker("/stockfish/stockfish.wasm.js");

    worker.addEventListener("message", (e) => {
      const message = e.data ?? e;

      if (message === "readyok") {
        setLoadingEngine(false);
      }

      if (message?.includes("bestmove")) {
        const bestMove = message.match(/bestmove\s+(\S+)/)?.[1];

        gameRef.current.move({
          from: bestMove.substring(0, 2),
          to: bestMove.substring(2, 4),
          promotion: "q",
        });
        setPosition(gameRef.current.fen());
        setThinking(false);
        checkIsPlaying();
      }
    });

    worker.postMessage("uci");
    worker.postMessage("isready");

    workerRef.current = worker;

    return () => {
      worker.postMessage("quit");
      worker.terminate();
    };
  }, []);

  const findBestMove = () => {
    if (!workerRef.current) return;
    workerRef.current.postMessage(`position fen ${gameRef.current.fen()}`);
    workerRef.current.postMessage(`go depth ${level}`);
    setThinking(true);
  };

  const handleDrop = (sourceSquare: Square, targetSquare: Square) => {
    try {
      const move = gameRef.current.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });

      setPosition(gameRef.current.fen());

      if (move === null) return false;

      const isPlaying = checkIsPlaying();

      if (!isPlaying) return false;

      findBestMove();

      return true;
    } catch {
      toast.error("Invalid move.");
      return false;
    }
  };

  const handleReset = () => {
    gameRef.current.reset();
    setPosition(gameRef.current.fen());
    setResult(ChessResult.Undetermined);
  };

  const handleUndo = () => {
    gameRef.current.undo();
    gameRef.current.undo();
    setPosition(gameRef.current.fen());
  };

  return (
    <div className="mx-auto w-[45rem] px-6">
      <ToolHeader
        title="Chess Game"
        description="Play chess game with computer."
        href={Route.ChessGame}
        icon={ChessIcon}
      />
      {unsupported ? (
        <p className="text-center text-lg font-medium">
          Your browser does not support chess game.
        </p>
      ) : loadingEngine ? (
        <div className="my-20 flex justify-center">
          <LoaderCircleIcon className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <Select
              value={level.toString()}
              onValueChange={(val) => setLevel(val as ChessLevel)}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {CHESS_OPTIONS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button variant="destructive" onClick={handleReset}>
              New game
            </Button>
            <Button variant="secondary" onClick={handleUndo}>
              Undo
            </Button>
          </div>
          <div ref={chessWrapperRef} className="relative my-4 max-w-[45rem]">
            <Chessboard
              autoPromoteToQueen
              position={position}
              onPieceDrop={handleDrop}
            />
            {thinking && (
              <SettingsIcon className="absolute right-4 top-4 h-8 w-8 animate-spin text-blue-500" />
            )}
            {result !== ChessResult.Undetermined && (
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

export default ChessGamePage;
