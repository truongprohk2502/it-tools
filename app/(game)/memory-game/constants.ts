import BuffaloIcon from "./_icons/buffalo.icon";
import CatIcon from "./_icons/cat.icon";
import ChickenIcon from "./_icons/chicken.icon";
import DogIcon from "./_icons/dog.icon";
import DragonIcon from "./_icons/dragon.icon";
import GoatIcon from "./_icons/goat.icon";
import HorseIcon from "./_icons/horse.icon";
import MonkeyIcon from "./_icons/monkey.icon";
import MouseIcon from "./_icons/mouse.icon";
import PigIcon from "./_icons/pig.icon";
import SnakeIcon from "./_icons/snake.icon";
import TigerIcon from "./_icons/tiger.icon";

export enum GameLevel {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export const GAME_OPTIONS = [
  { label: "Easy", value: GameLevel.Easy },
  { label: "Medium", value: GameLevel.Medium },
  { label: "Hard", value: GameLevel.Hard },
];

export enum CardType {
  Mouse = "Mouse",
  Buffalo = "Buffalo",
  Tiger = "Tiger",
  Cat = "Cat",
  Dragon = "Dragon",
  Snake = "Snake",
  Horse = "Horse",
  Goat = "Goat",
  Monkey = "Monkey",
  Chicken = "Chicken",
  Dog = "Dog",
  Pig = "Pig",
}

export const MEMORY_ICONS = [
  { type: CardType.Mouse, icon: MouseIcon },
  { type: CardType.Buffalo, icon: BuffaloIcon },
  { type: CardType.Tiger, icon: TigerIcon },
  { type: CardType.Cat, icon: CatIcon },
  { type: CardType.Dragon, icon: DragonIcon },
  { type: CardType.Snake, icon: SnakeIcon },
  { type: CardType.Horse, icon: HorseIcon },
  { type: CardType.Goat, icon: GoatIcon },
  { type: CardType.Monkey, icon: MonkeyIcon },
  { type: CardType.Chicken, icon: ChickenIcon },
  { type: CardType.Dog, icon: DogIcon },
  { type: CardType.Pig, icon: PigIcon },
];
