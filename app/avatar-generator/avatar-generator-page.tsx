"use client";

import AvatarGeneratorIcon from "@/assets/icons/avatar-generator.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Route } from "@/constants/routes";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { DownloadIcon, FlipHorizontal2Icon, ShuffleIcon } from "lucide-react";
import { useRef, useState } from "react";
import CharacteristicOption from "./_components/characteristic-option";
import ColorOption from "./_components/color-option";
import GeneratedAvatar from "./_components/generated-avatar";
import MainCharacteristic from "./_components/main-characteristic";
import ShapeOption from "./_components/shape-option";
import {
  AVATAR_ROUNDED_OPTIONS,
  BACKGROUND_COLORS,
  BEARD_OPTIONS,
  CLOTHING_OPTIONS,
  DEFAULT_AVATAR_INFORMATION,
  EAR_OPTIONS,
  EARRING_OPTIONS,
  EYE_OPTIONS,
  EYEBROW_OPTIONS,
  FACE_OPTIONS,
  GLASSES_OPTIONS,
  MOUTH_OPTIONS,
  NOSE_OPTIONS,
  SKINK_COLORS,
  TOP_OPTIONS,
} from "./constants";
import { generateRandomAvatar } from "./helpers";
import type { AvatarInformation } from "./types";

const AvatarGeneratorPage: React.FC = () => {
  const [avatarInformation, setAvatarInformation] = useState<AvatarInformation>(
    DEFAULT_AVATAR_INFORMATION,
  );
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const avatarRef = useRef<HTMLDivElement>(null);

  const handleSetAvatarInformation = <K extends keyof AvatarInformation>(
    key: K,
    value: AvatarInformation[K],
  ) => {
    setAvatarInformation((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleRandomize = () => {
    const randomAvatar = generateRandomAvatar();
    setAvatarInformation(randomAvatar);
  };

  const handleDownload = async () => {
    const element = avatarRef.current;
    if (!element) return;
    const canvas = await html2canvas(element, { backgroundColor: null });
    const imgData = canvas.toDataURL("image/png");
    saveAs(imgData, "avatar.png");
  };

  return (
    <div className="mx-auto flex h-[calc(100vh-8rem)] min-w-[50rem] max-w-[70rem] flex-col px-6">
      <ToolHeader
        title="Avatar Generator"
        description="Generate a unique avatar based on your preferences."
        href={Route.AvatarGenerator}
        icon={AvatarGeneratorIcon}
      />
      <div className="grid h-[calc(100%-8rem)] grid-cols-2">
        <div className="flex flex-col items-center border-r border-neutral-300 p-4 dark:border-neutral-700">
          <GeneratedAvatar
            ref={avatarRef}
            avatarInformation={avatarInformation}
            isFlipped={isFlipped}
          />
          <div className="mt-8 flex gap-4">
            <Button
              variant="secondary"
              size="icon"
              className="size-10"
              title="Randomize"
              onClick={handleRandomize}
            >
              <ShuffleIcon />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="size-10"
              title="Flip"
              onClick={() => setIsFlipped((prev) => !prev)}
            >
              <FlipHorizontal2Icon />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="size-10"
              title="Download"
              onClick={handleDownload}
            >
              <DownloadIcon />
            </Button>
          </div>
        </div>
        <ScrollArea className="h-full px-6">
          <MainCharacteristic label="Rounded" showMarginTop={false}>
            {AVATAR_ROUNDED_OPTIONS.map((option) => (
              <ShapeOption
                key={option.label}
                radius={option.value}
                selected={avatarInformation.rounded.label === option.label}
                onClick={() => handleSetAvatarInformation("rounded", option)}
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic label="Background color">
            {BACKGROUND_COLORS.map((color) => (
              <ColorOption
                key={color}
                color={color}
                checked={avatarInformation.bgColor === color}
                onClick={() => handleSetAvatarInformation("bgColor", color)}
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic
            label="Face"
            showColor
            colors={SKINK_COLORS}
            selectedColor={avatarInformation.skinColor}
            onColorSelect={(color) =>
              handleSetAvatarInformation("skinColor", color)
            }
          >
            {FACE_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={avatarInformation.faceStyle.label === option.label}
                onClick={() => handleSetAvatarInformation("faceStyle", option)}
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic
            label="Top"
            showColor
            selectedColor={avatarInformation.topColor}
            onColorSelect={(color) =>
              handleSetAvatarInformation("topColor", color)
            }
          >
            {TOP_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={avatarInformation.topStyle.label === option.label}
                onClick={() => handleSetAvatarInformation("topStyle", option)}
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic label="Ear">
            {EAR_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={avatarInformation.earStyle.label === option.label}
                onClick={() => handleSetAvatarInformation("earStyle", option)}
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic
            label="Earring"
            showColor
            selectedColor={avatarInformation.earringColor}
            onColorSelect={(color) =>
              handleSetAvatarInformation("earringColor", color)
            }
          >
            {EARRING_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={avatarInformation.earringStyle.label === option.label}
                onClick={() =>
                  handleSetAvatarInformation("earringStyle", option)
                }
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic label="Eyebrows">
            {EYEBROW_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={avatarInformation.eyeBrowStyle.label === option.label}
                onClick={() =>
                  handleSetAvatarInformation("eyeBrowStyle", option)
                }
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic label="Eyes">
            {EYE_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={avatarInformation.eyeStyle.label === option.label}
                onClick={() => handleSetAvatarInformation("eyeStyle", option)}
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic label="Nose">
            {NOSE_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={avatarInformation.noseStyle.label === option.label}
                onClick={() => handleSetAvatarInformation("noseStyle", option)}
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic
            label="Glasses"
            showColor
            selectedColor={avatarInformation.glassesColor}
            onColorSelect={(color) =>
              handleSetAvatarInformation("glassesColor", color)
            }
          >
            {GLASSES_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={avatarInformation.glassesStyle.label === option.label}
                onClick={() =>
                  handleSetAvatarInformation("glassesStyle", option)
                }
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic label="Mouth">
            {MOUTH_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={avatarInformation.mouthStyle.label === option.label}
                onClick={() => handleSetAvatarInformation("mouthStyle", option)}
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic label="Beard">
            {BEARD_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={avatarInformation.beardStyle.label === option.label}
                onClick={() => handleSetAvatarInformation("beardStyle", option)}
              />
            ))}
          </MainCharacteristic>
          <MainCharacteristic
            label="Clothes"
            showColor
            selectedColor={avatarInformation.clothingColor}
            onColorSelect={(color) =>
              handleSetAvatarInformation("clothingColor", color)
            }
          >
            {CLOTHING_OPTIONS.map((option) => (
              <CharacteristicOption
                key={option.label}
                label={option.label}
                svg={option.component}
                selected={
                  avatarInformation.clothingStyle.label === option.label
                }
                onClick={() =>
                  handleSetAvatarInformation("clothingStyle", option)
                }
              />
            ))}
          </MainCharacteristic>
        </ScrollArea>
      </div>
    </div>
  );
};

export default AvatarGeneratorPage;
