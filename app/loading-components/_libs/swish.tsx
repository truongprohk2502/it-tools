"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { Spinner3DProps, TransientSpinner3DProps } from "../types";

const BALLS_IN_LINE = 3;

type WrapperProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
`;

type BallProps = TransientSpinner3DProps & {
  $x: number;
  $y: number;
  $index: number;
};

const motion = (props: BallProps) => keyframes`
  50% {
    transform: scale(0);
    background-color: ${props.$backColor};
  }
`;

const Ball = styled.div<BallProps>`
  position: absolute;
  top: ${(props) => `${props.$y}${props.$sizeUnit}`};
  left: ${(props) => `${props.$x}${props.$sizeUnit}`};
  width: ${(props) => `${props.$size / 5}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 5}${props.$sizeUnit}`};
  border-radius: 3px;
  background-color: ${(props) => props.$frontColor};
  animation: ${motion} 0.9s ease infinite;
  transition: all 0.3s ease;
  animation-delay: ${(props) => props.$index * 0.1}s;
`;

const SwishSpinner: React.FC<Spinner3DProps> = ({
  size = 40,
  frontColor = "#436bfc",
  backColor = "#77aaef",
  sizeUnit = "px",
}) => {
  const balls = useMemo(() => {
    return Array.from({ length: BALLS_IN_LINE * BALLS_IN_LINE }, (_, index) => {
      const i = index % BALLS_IN_LINE;
      const j = Math.floor(index / BALLS_IN_LINE);
      return (
        <Ball
          key={index}
          $index={index}
          $frontColor={frontColor}
          $backColor={backColor}
          $size={size}
          $x={i * (size / 3 + size / 15)}
          $y={j * (size / 3 + size / 15)}
          $sizeUnit={sizeUnit}
        />
      );
    });
  }, [size, frontColor, backColor, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {balls}
    </Wrapper>
  );
};

export default SwishSpinner;
