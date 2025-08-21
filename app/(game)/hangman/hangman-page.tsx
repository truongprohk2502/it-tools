"use client";

import HangmanIcon from "@/assets/icons/hangman.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { RefreshCcwDot } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Character from "./_components/character";
import Hangman from "./_components/hangman";
import Key from "./_components/key";
import { GameStatus, HangmanStatus, KeyStatus } from "./constants";
import { getInitialKeyStates, getRandomWordState } from "./helpers";
import type { KeyState, WordState } from "./types";

const HangmanPage: React.FC = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Default);
  const [hangmanStatus, setHangmanStatus] = useState<HangmanStatus>(
    HangmanStatus.Invisible,
  );
  const [characters, setCharacters] = useState<WordState[]>([]);
  const [keys, setKeys] = useState<KeyState[]>(getInitialKeyStates());

  useEffect(() => {
    const newWordState = getRandomWordState();
    setCharacters(newWordState);
  }, []);

  const handleReset = () => {
    setKeys(getInitialKeyStates());
    setGameStatus(GameStatus.Default);
    setHangmanStatus(HangmanStatus.Invisible);
    const newWordState = getRandomWordState();
    setCharacters(newWordState);
  };

  const handlePressKey = (key: string) => {
    const isCorrect = characters.some(
      (item) => !item.isSample && item.character === key,
    );

    setKeys((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, isPressed: true, isCorrect } : item,
      ),
    );

    if (isCorrect) {
      const newCharacters = characters.map((item) =>
        item.character === key ? { ...item, isShowing: true } : item,
      );
      setCharacters(newCharacters);

      if (newCharacters.every((item) => item.isShowing)) {
        setGameStatus(GameStatus.Win);
        toast.success("Congratulations! You guessed the word.");
      }
    } else {
      const newStatus: HangmanStatus = hangmanStatus + 1;
      setHangmanStatus(newStatus);

      if (newStatus === HangmanStatus.RightLeg) {
        setGameStatus(GameStatus.Lose);
        toast.error("Game Over! You lost.");
      }
    }
  };

  return (
    <div className="mx-auto w-[55rem] px-6">
      <ToolHeader
        title="Hangman Game"
        description="Play Hangman game."
        href={Route.HangmanGame}
        icon={HangmanIcon}
      />
      <Hangman status={hangmanStatus} />
      <div
        style={{
          gridTemplateColumns: `repeat(${characters.length}, minmax(0, 1fr)`,
        }}
        className="mx-auto my-6 grid w-fit gap-4"
      >
        {characters.map((item, index) => (
          <Character
            key={index}
            ended={gameStatus !== GameStatus.Default}
            {...item}
          />
        ))}
      </div>
      <div className="mx-auto my-6 grid w-fit grid-cols-9 gap-2">
        {keys.map((item) => (
          <Key
            key={item.key}
            character={item.key}
            status={
              item.isPressed
                ? item.isCorrect
                  ? KeyStatus.Correct
                  : KeyStatus.Incorrect
                : KeyStatus.Default
            }
            ended={gameStatus !== GameStatus.Default}
            onClick={() => handlePressKey(item.key)}
          />
        ))}
        <Key
          character={<RefreshCcwDot />}
          status={KeyStatus.Action}
          onClick={handleReset}
        />
      </div>
    </div>
  );
};

export default HangmanPage;
