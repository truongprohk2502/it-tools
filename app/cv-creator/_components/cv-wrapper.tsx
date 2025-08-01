"use client";

import { cn } from "@/lib/utils";
import { Maitree, Open_Sans, Prompt, Roboto } from "next/font/google";
import { useCallback } from "react";
import { Font, FONT_SIZES, LINE_HEIGHTS, Size } from "../constants";

interface Props {
  fontFamily: Font;
  fontSize: Size;
  lineHeight: Size;
  children: React.ReactNode;
}

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const maitree = Maitree({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CvWrapper: React.FC<Props> = ({
  fontFamily,
  fontSize,
  lineHeight,
  children,
}) => {
  const cvWrapperRef = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        node.style.fontSize = FONT_SIZES.find(
          (item) => item.size === fontSize,
        )!.value;
        node.style.lineHeight = LINE_HEIGHTS.find(
          (item) => item.size === lineHeight,
        )!.value;
      }
    },
    [fontSize, lineHeight],
  );

  return (
    <div
      ref={cvWrapperRef}
      className={cn(
        "mx-auto my-8 w-[60rem] rounded-md bg-white px-4 py-6 shadow-md",
        {
          [roboto.className]: fontFamily === Font.Roboto,
          [maitree.className]: fontFamily === Font.Maitree,
          [openSans.className]: fontFamily === Font.OpenSans,
          [prompt.className]: fontFamily === Font.Prompt,
        },
      )}
    >
      {children}
    </div>
  );
};

export default CvWrapper;
