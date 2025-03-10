"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Chess, Square } from "chess.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { CHESS_OPTIONS, ChessLevel } from "./constants";
import Engine from "./engine";

const ChessGamePage: React.FC = () => {
  const chessWrapperRef = useRef<HTMLDivElement>(null);

  const engine = useMemo(() => new Engine(), []);
  const game = useMemo(() => new Chess(), []);

  const [position, setPosition] = useState<string>(game.fen());
  const [level, setLevel] = useState<ChessLevel>(ChessLevel.Easy);

  useEffect(() => {
    const handleResizeWindow = () => {
      const size = window.innerHeight - 200;
      const maxSize = 42 * 16;
      const boardSize = size > maxSize ? maxSize : size;
      chessWrapperRef.current!.style.width = `${boardSize}px`;
      chessWrapperRef.current!.style.height = `${boardSize}px`;
    };

    handleResizeWindow();

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const findBestMove = () => {
    engine.evaluatePosition(game.fen(), +level);
    engine.onMessage(({ bestMove }) => {
      if (bestMove) {
        game.move({
          from: bestMove.substring(0, 2),
          to: bestMove.substring(2, 4),
          promotion: bestMove.substring(4, 5),
        });
        setPosition(game.fen());
      }
    });
  };

  const handleDrop = (
    sourceSquare: Square,
    targetSquare: Square,
    piece: string,
  ) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1].toLowerCase() ?? "q",
    });
    setPosition(game.fen());
    if (move === null) return false;
    if (game.isGameOver() || game.isDraw()) return false;
    findBestMove();
    return true;
  };

  const handleReset = () => {
    game.reset();
    setPosition(game.fen());
  };

  const handleUndo = () => {
    game.undo();
    game.undo();
    setPosition(game.fen());
  };

  return (
    <div className="mx-auto w-[45rem] px-6">
      {/* <ToolHeader
        title="Chess Game"
        description="Play chess game with computer."
        href={Route.NoteNotifications}
        icon={NoteNotificationIcon}
      /> */}
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
      <div ref={chessWrapperRef} className="my-4 max-w-[45rem]">
        <Chessboard position={position} onPieceDrop={handleDrop} />
      </div>
    </div>
  );
};

export default ChessGamePage;
