import {
  AVATAR_ROUNDED_OPTIONS,
  BACKGROUND_COLORS,
  BEARD_OPTIONS,
  CLOTHING_OPTIONS,
  EAR_OPTIONS,
  EARRING_OPTIONS,
  EYE_OPTIONS,
  EYEBROW_OPTIONS,
  FACE_OPTIONS,
  GLASSES_OPTIONS,
  MOUTH_OPTIONS,
  NOSE_OPTIONS,
  SKINK_COLORS,
  SOLID_COLORS,
  TOP_OPTIONS,
} from "./constants";
import type { AvatarInformation } from "./types";

export const generateRandomAvatar = (): AvatarInformation => {
  const seed: any = {
    rounded: AVATAR_ROUNDED_OPTIONS,
    bgColor: BACKGROUND_COLORS,
    skinColor: SKINK_COLORS,
    faceStyle: FACE_OPTIONS,
    topColor: SOLID_COLORS,
    topStyle: TOP_OPTIONS,
    earStyle: EAR_OPTIONS,
    earringColor: SOLID_COLORS,
    earringStyle: EARRING_OPTIONS,
    eyeBrowStyle: EYEBROW_OPTIONS,
    eyeStyle: EYE_OPTIONS,
    noseStyle: NOSE_OPTIONS,
    glassesColor: SOLID_COLORS,
    glassesStyle: GLASSES_OPTIONS,
    mouthStyle: MOUTH_OPTIONS,
    beardStyle: BEARD_OPTIONS,
    clothingColor: SOLID_COLORS,
    clothingStyle: CLOTHING_OPTIONS,
  };

  for (const key in seed) {
    const options = seed[key as keyof typeof seed];
    const randomIndex = Math.floor(Math.random() * options.length);
    seed[key as keyof typeof seed] = options[randomIndex];
  }

  return seed as AvatarInformation;
};
