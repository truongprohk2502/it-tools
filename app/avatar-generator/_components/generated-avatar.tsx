"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import {
  AvatarRounded,
  BeardStyle,
  EarringStyle,
  GlassesStyle,
} from "../constants";
import type { AvatarInformation } from "../types";

interface Props {
  avatarInformation: AvatarInformation;
  isFlipped: boolean;
}

const GeneratedAvatar = forwardRef<HTMLDivElement, Props>(
  (
    {
      avatarInformation: {
        rounded,
        bgColor,
        faceStyle,
        skinColor,
        eyeStyle,
        noseStyle,
        eyeBrowStyle,
        topStyle,
        topColor,
        glassesStyle,
        glassesColor,
        mouthStyle,
        beardStyle,
        earStyle,
        earringColor,
        earringStyle,
        clothingColor,
        clothingStyle,
      },
      isFlipped,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("relative mt-8 h-72 w-72 overflow-hidden", {
          "rounded-2xl": rounded.label === AvatarRounded.Medium,
          "rounded-full": rounded.label === AvatarRounded.Full,
        })}
      >
        <div className="absolute inset-0" style={{ background: bgColor }} />
        <div
          className={cn("absolute inset-0", {
            "scale-x-[-1] transform": isFlipped,
          })}
        >
          <svg
            width="280"
            height="280"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMax meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <g transform="translate(100, 65)">
              {/* Face */}
              <faceStyle.component color={skinColor} />
              {/* Eye */}
              <eyeStyle.component color="black" />
              {/* Nose */}
              <noseStyle.component color="black" />
              {/* Eyebrows */}
              <eyeBrowStyle.component color="black" />
              {/* Top */}
              <topStyle.component color={topColor} />
              {/* Glasses */}
              {glassesStyle.label !== GlassesStyle.None && (
                <glassesStyle.component color={glassesColor} />
              )}
              {/* Beard */}
              {beardStyle.label !== BeardStyle.None && (
                <beardStyle.component color="black" />
              )}
              {/* Mouth */}
              <mouthStyle.component color="black" />
              {/* Ear */}
              <earStyle.component color={skinColor} />
              {/* Earring */}
              {earringStyle.label !== EarringStyle.None && (
                <earringStyle.component color={earringColor} />
              )}
              {/* Clothes */}
              <clothingStyle.component color={clothingColor} />
            </g>
          </svg>
        </div>
      </div>
    );
  },
);

GeneratedAvatar.displayName = "GeneratedAvatar";

export default GeneratedAvatar;
