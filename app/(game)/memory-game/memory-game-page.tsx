"use client";

import MemoryIcon from "@/assets/icons/memory.icon";
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
import { useEffect, useState } from "react";
import MemoryCard from "./_components/memory-card";
import { GAME_OPTIONS, GameLevel } from "./constants";
import { getRandomCards } from "./helpers";
import type { MemoryCardSize, MemoryCardState } from "./types";

const MemoryGamePage: React.FC = () => {
  const [size, setSize] = useState<MemoryCardSize>({ width: 5, height: 2 });
  const [cards, setCards] = useState<MemoryCardState[]>([]);

  const initializeCards = (size: number) => {
    const randomCards = getRandomCards(size);
    setCards(randomCards);
  };

  useEffect(() => {
    initializeCards(10);
  }, []);

  const handleChangeLevel = (level: GameLevel) => {
    switch (level) {
      case GameLevel.Easy:
        initializeCards(10);
        setSize({ width: 5, height: 2 });
        break;
      case GameLevel.Medium:
        initializeCards(20);
        setSize({ width: 5, height: 4 });
        break;
      case GameLevel.Hard:
        initializeCards(24);
        setSize({ width: 6, height: 4 });
        break;
    }
  };

  const handleReset = () => {
    initializeCards(size.width * size.height);
  };

  const handleClickCard = (id: number) => {
    const openedCount = cards.filter((card) => card.open).length;
    if (openedCount >= 2) return;

    const selectedCard = cards.find((card) => card.id === id);
    if (!selectedCard || selectedCard.done || selectedCard.open) return;

    if (openedCount === 0) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, open: true } : card,
        ),
      );
    } else {
      const firstOpenCard = cards.find((card) => card.open)!;

      if (firstOpenCard.type === selectedCard.type) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === id || card.id === firstOpenCard.id
              ? { ...card, open: false, done: true }
              : card,
          ),
        );
      } else {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === id ? { ...card, open: true } : card,
          ),
        );

        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === id || card.id === firstOpenCard.id
                ? { ...card, open: false }
                : card,
            ),
          );
        }, 1000);
      }
    }
  };

  return (
    <div className="mx-auto w-[45rem] px-6">
      <ToolHeader
        title="Memory Game"
        description="Play Memory game."
        href={Route.MemoryGame}
        icon={MemoryIcon}
      />
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Button variant="destructive" onClick={handleReset}>
          New game
        </Button>
        <Select defaultValue={GameLevel.Easy} onValueChange={handleChangeLevel}>
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
      <div
        className="mb-8 mt-8 grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${size.width}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${size.height}, minmax(0, 1fr))`,
        }}
      >
        {cards.map((card) => (
          <MemoryCard
            key={card.id}
            open={card.open}
            done={card.done}
            icon={card.icon}
            onClick={() => handleClickCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGamePage;
