"use client";

import PicturePuzzleIcon from "@/assets/icons/picture-puzzle.icon";
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
import PuzzleCell from "./_components/puzzle-cell";
import PuzzleSkeleton from "./_components/puzzle-skeketon";
import { PUZZLE_IMAGES, PUZZLE_OPTIONS, PuzzleLevel } from "./constants";
import {
  getDefaultPieces,
  getNextPosition,
  shufflePieces,
  splitImage,
} from "./helpers";
import { PuzzlePiece } from "./types";

const PicturePuzzlePage: React.FC = () => {
  const boardWrapperRef = useRef<HTMLDivElement>(null);

  const [boardLoaded, setBoardLoaded] = useState<boolean>(false);
  const [level, setLevel] = useState<PuzzleLevel>(PuzzleLevel.Easy);
  const [image, setImage] = useState<string>(PUZZLE_IMAGES[0].value);
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);

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
    setLoadingImage(true);
    const canvas = document.createElement("canvas");
    const imageInstance = new Image();
    imageInstance.src = image;

    imageInstance.onload = () => {
      const pieces = splitImage(imageInstance, canvas, level);
      const shuffledPieces = shufflePieces(pieces, level);
      setPieces(shuffledPieces);
      setLoadingImage(false);
    };

    return () => {
      canvas.remove();
      imageInstance.remove();
    };
  }, [image, level]);

  const handleClickCell = (piece: PuzzlePiece) => {
    const nextPosition = getNextPosition(pieces, piece, level);
    if (!nextPosition) return;
    setPieces(
      pieces.map((item) => {
        if (item.id === piece.id)
          return { ...item, x: nextPosition.x, y: nextPosition.y };
        return item;
      }),
    );
  };

  return (
    <div className="mx-auto w-[45rem] px-6">
      <ToolHeader
        title="Picture Puzzle"
        description="Play picture puzzle game."
        href={Route.PicturePuzzle}
        icon={PicturePuzzleIcon}
      />
      <div className="mt-4 grid grid-cols-3 gap-4">
        <Select
          value={level.toString()}
          onValueChange={(val) => setLevel(Number(val) as PuzzleLevel)}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {PUZZLE_OPTIONS.map((item) => (
                <SelectItem key={item.value} value={item.value.toString()}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select value={image} onValueChange={setImage}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {PUZZLE_IMAGES.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="destructive">New game</Button>
      </div>
      <div
        ref={boardWrapperRef}
        style={{
          gridTemplateRows: `repeat(${level}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${level}, minmax(0, 1fr))`,
        }}
        className={cn(
          "relative my-4 grid max-w-[45rem] outline outline-1 outline-neutral-700",
          {
            invisible: !boardLoaded,
          },
        )}
      >
        {loadingImage
          ? getDefaultPieces(level).map((piece) => (
              <PuzzleSkeleton
                key={piece.id}
                size={level}
                x={piece.x}
                y={piece.y}
              />
            ))
          : pieces.map((piece) => (
              <PuzzleCell
                key={piece.id}
                piece={piece}
                size={level}
                onClick={() => handleClickCell(piece)}
              />
            ))}
      </div>
    </div>
  );
};

export default PicturePuzzlePage;
