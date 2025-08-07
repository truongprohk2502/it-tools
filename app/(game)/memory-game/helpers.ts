import arrayShuffle from "array-shuffle";
import { MEMORY_ICONS } from "./constants";
import { MemoryCardState } from "./types";

export const getRandomIcons = (size: number) => {
  const totalIcons = size / 2;
  const icons = [...MEMORY_ICONS];
  const selectedIcons = [];

  for (let i = 0; i < totalIcons; i++) {
    const randomIndex = Math.floor(Math.random() * icons.length);
    selectedIcons.push(icons[randomIndex]);
    icons.splice(randomIndex, 1);
  }

  return selectedIcons;
};

export const getRandomCards = (size: number) => {
  const randomIcons = getRandomIcons(size);
  const cards: MemoryCardState[] = [];

  randomIcons.forEach((icon) => {
    cards.push({
      id: Math.random(),
      type: icon.type,
      icon: icon.icon,
      open: false,
      done: false,
    });
    cards.push({
      id: Math.random(),
      type: icon.type,
      icon: icon.icon,
      open: false,
      done: false,
    });
  });

  return arrayShuffle(cards);
};
