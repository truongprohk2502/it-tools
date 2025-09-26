import BeardScruff from "./_assets/beard/BeardScruff";
import ClothingCollared from "./_assets/clothes/ClothingCollared";
import ClothingCrew from "./_assets/clothes/ClothingCrew";
import ClothingOpen from "./_assets/clothes/ClothingOpen";
import CloseIcon from "./_assets/common/CloseIcon";
import EarAttached from "./_assets/ear/EarAttached";
import EarDetached from "./_assets/ear/EarDetached";
import EarringHoop from "./_assets/earrings/EarringHoop";
import EarringStud from "./_assets/earrings/EarringStud";
import EyebrowDown from "./_assets/eyebrows/EyebrowDown";
import EyebrowLashesDown from "./_assets/eyebrows/EyebrowSlashDown";
import EyebrowLashesUp from "./_assets/eyebrows/EyebrowSlashUp";
import EyebrowUp from "./_assets/eyebrows/EyebrowUp";
import EyeEllipse from "./_assets/eyes/EyeEllipse";
import EyeRound from "./_assets/eyes/EyeRound";
import EyeShadow from "./_assets/eyes/EyeShadow";
import EyeSmiling from "./_assets/eyes/EyeSmiling";
import FaceBase from "./_assets/face/FaceBase";
import GlassesRound from "./_assets/glasses/GlassesRound";
import GlassesSquare from "./_assets/glasses/GlassesSquare";
import MouthFrown from "./_assets/mouth/MouthFrown";
import MouthLaughing from "./_assets/mouth/MouthLaughing";
import MouthNervous from "./_assets/mouth/MouthNervous";
import MouthPucker from "./_assets/mouth/MouthPucker";
import MouthSad from "./_assets/mouth/MouthSad";
import MouthSmile from "./_assets/mouth/MouthSmile";
import MouthSmirk from "./_assets/mouth/MouthSmirk";
import MouthSurprised from "./_assets/mouth/MouthSurprised";
import NoseCurve from "./_assets/nose/NoseCurve";
import NosePointed from "./_assets/nose/NosePointed";
import NoseRound from "./_assets/nose/NoseRound";
import TopBeanie from "./_assets/tops/TopBeanie";
import TopClean from "./_assets/tops/TopClean";
import TopDanny from "./_assets/tops/TopDanny";
import TopFonze from "./_assets/tops/TopFonze";
import TopFunny from "./_assets/tops/TopFunny";
import TopPixie from "./_assets/tops/TopPixie";
import TopPunk from "./_assets/tops/TopPunk";
import TopTurban from "./_assets/tops/TopTurban";
import TopWave from "./_assets/tops/TopWave";
import type { AvatarInformation } from "./types";

export enum AvatarRounded {
  None = "none",
  Medium = "medium",
  Full = "full",
}

export enum FaceStyle {
  Base = "base",
}

export enum TopStyle {
  Fonze = "fonze",
  Funny = "funny",
  Clean = "clean",
  Punk = "punk",
  Danny = "danny",
  Wave = "wave",
  Turban = "turban",
  Pixie = "pixie",
  Beanie = "beanie",
}

export enum EarStyle {
  Attached = "attached",
  Detached = "detached",
}

export enum EarringStyle {
  Hoop = "hoop",
  Stud = "stud",
  None = "none",
}

export enum EyeBrowStyle {
  Up = "up",
  Down = "down",
  LashesDown = "lashes down",
  LashesUp = "lashes up",
}

export enum EyeStyle {
  Ellipse = "ellipse",
  Smiling = "smiling",
  EyeShadow = "eye shadow",
  Round = "round",
}

export enum NoseStyle {
  Curve = "curve",
  Round = "round",
  Pointed = "pointed",
}

export enum GlassesStyle {
  Round = "round",
  Square = "square",
  None = "none",
}

export enum MouthStyle {
  Laughing = "laughing",
  Surprised = "surprised",
  Nervous = "nervous",
  Frown = "frown",
  Pucker = "pucker",
  Sad = "sad",
  Smile = "smile",
  Smirk = "smirk",
}

export enum BeardStyle {
  Scruff = "scruff",
  None = "none",
}

export enum ClothingStyle {
  Collared = "collared",
  Crew = "crew",
  Open = "open",
}

export const AVATAR_ROUNDED_OPTIONS = [
  { label: AvatarRounded.None, value: "0px" },
  { label: AvatarRounded.Medium, value: "8px" },
  { label: AvatarRounded.Full, value: "9999px" },
];

export const FACE_OPTIONS = [{ label: FaceStyle.Base, component: FaceBase }];

export const TOP_OPTIONS = [
  { label: TopStyle.Fonze, component: TopFonze },
  { label: TopStyle.Funny, component: TopFunny },
  { label: TopStyle.Clean, component: TopClean },
  { label: TopStyle.Punk, component: TopPunk },
  { label: TopStyle.Danny, component: TopDanny },
  { label: TopStyle.Wave, component: TopWave },
  { label: TopStyle.Turban, component: TopTurban },
  { label: TopStyle.Pixie, component: TopPixie },
  { label: TopStyle.Beanie, component: TopBeanie },
];

export const EAR_OPTIONS = [
  { label: EarStyle.Attached, component: EarAttached },
  { label: EarStyle.Detached, component: EarDetached },
];

export const EARRING_OPTIONS = [
  { label: EarringStyle.Hoop, component: EarringHoop },
  { label: EarringStyle.Stud, component: EarringStud },
  { label: EarringStyle.None, component: CloseIcon },
];

export const EYEBROW_OPTIONS = [
  { label: EyeBrowStyle.Up, component: EyebrowUp },
  { label: EyeBrowStyle.Down, component: EyebrowDown },
  { label: EyeBrowStyle.LashesUp, component: EyebrowLashesUp },
  { label: EyeBrowStyle.LashesDown, component: EyebrowLashesDown },
];

export const EYE_OPTIONS = [
  { label: EyeStyle.Ellipse, component: EyeEllipse },
  { label: EyeStyle.Smiling, component: EyeSmiling },
  { label: EyeStyle.EyeShadow, component: EyeShadow },
  { label: EyeStyle.Round, component: EyeRound },
];

export const NOSE_OPTIONS = [
  { label: NoseStyle.Curve, component: NoseCurve },
  { label: NoseStyle.Round, component: NoseRound },
  { label: NoseStyle.Pointed, component: NosePointed },
];

export const GLASSES_OPTIONS = [
  { label: GlassesStyle.Round, component: GlassesRound },
  { label: GlassesStyle.Square, component: GlassesSquare },
  { label: GlassesStyle.None, component: CloseIcon },
];

export const MOUTH_OPTIONS = [
  { label: MouthStyle.Laughing, component: MouthLaughing },
  { label: MouthStyle.Surprised, component: MouthSurprised },
  { label: MouthStyle.Nervous, component: MouthNervous },
  { label: MouthStyle.Frown, component: MouthFrown },
  { label: MouthStyle.Pucker, component: MouthPucker },
  { label: MouthStyle.Sad, component: MouthSad },
  { label: MouthStyle.Smile, component: MouthSmile },
  { label: MouthStyle.Smirk, component: MouthSmirk },
];

export const BEARD_OPTIONS = [
  { label: BeardStyle.Scruff, component: BeardScruff },
  { label: BeardStyle.None, component: CloseIcon },
];

export const CLOTHING_OPTIONS = [
  { label: ClothingStyle.Collared, component: ClothingCollared },
  { label: ClothingStyle.Crew, component: ClothingCrew },
  { label: ClothingStyle.Open, component: ClothingOpen },
];

export const BACKGROUND_COLORS = [
  "rgb(107, 217, 233)",
  "rgb(252, 144, 159)",
  "rgb(244, 209, 80)",
  "rgb(224, 221, 255)",
  "rgb(210, 239, 243)",
  "rgb(255, 237, 239)",
  "rgb(255, 235, 164)",
  "rgb(80, 106, 244)",
  "rgb(244, 129, 80)",
  "rgb(72, 169, 154)",
  "rgb(192, 159, 255)",
  "rgb(253, 111, 93)",
  "rgb(255, 255, 255)",
  "rgb(0, 0, 0)",
  "linear-gradient(45deg, rgb(227, 100, 140), rgb(245 155 143))",
  "linear-gradient(62deg, rgb(142, 197, 252), rgb(224, 195, 252))",
  "linear-gradient(90deg, rgb(255, 236, 210), rgb(252, 182, 159))",
  "linear-gradient(120deg, rgb(91 146 235), rgb(194, 233, 251))",
  "linear-gradient(-135deg, rgb(252, 203, 144), rgb(213, 126, 235))",
];

export const SOLID_COLORS = BACKGROUND_COLORS.filter((color) =>
  color.startsWith("rgb"),
);

export const SKINK_COLORS = [
  "rgb(248, 217, 206)",
  "rgb(249, 201, 182)",
  "rgb(222, 179, 163)",
  "rgb(200, 149, 131)",
  "rgb(156, 100, 88)",
];

export const DEFAULT_AVATAR_INFORMATION: AvatarInformation = {
  rounded: AVATAR_ROUNDED_OPTIONS[1],
  bgColor: BACKGROUND_COLORS[18],
  skinColor: SKINK_COLORS[2],
  faceStyle: FACE_OPTIONS[0],
  topColor: SOLID_COLORS[13],
  topStyle: TOP_OPTIONS[0],
  earStyle: EAR_OPTIONS[1],
  earringColor: SOLID_COLORS[11],
  earringStyle: EARRING_OPTIONS[2],
  eyeBrowStyle: EYEBROW_OPTIONS[2],
  eyeStyle: EYE_OPTIONS[2],
  noseStyle: NOSE_OPTIONS[0],
  glassesColor: SOLID_COLORS[13],
  glassesStyle: GLASSES_OPTIONS[2],
  mouthStyle: MOUTH_OPTIONS[0],
  beardStyle: BEARD_OPTIONS[1],
  clothingColor: SOLID_COLORS[8],
  clothingStyle: CLOTHING_OPTIONS[0],
};
