import { generate } from "random-words";
import { KEYS } from "./constants";
import { KeyState, WordState } from "./types";

export const getRandomWordState = (): WordState[] => {
  const word = generate({
    exactly: 1,
    minLength: 4,
    maxLength: 10,
  })[0].toLowerCase();

  const showingIndex = Math.floor(Math.random() * word.length);

  return word.split("").map((character, index) => ({
    character,
    isShowing: index === showingIndex,
    isSample: index === showingIndex,
  }));
};

export const getInitialKeyStates = (): KeyState[] => {
  return KEYS.map((key) => ({
    key,
    isPressed: false,
    isCorrect: false,
  }));
};
