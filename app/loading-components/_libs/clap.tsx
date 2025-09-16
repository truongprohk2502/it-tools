"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { Spinner3DProps, TransientSpinner3DProps } from "../types";

const BALLS_COUNT = 7;

const rotate = keyframes`
  50% {
    transform: rotate(180deg) scale(1.125);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const move = (props: BallProps) => keyframes`
  0% {
    transform: translateX(${props.$x}${props.$sizeUnit}) translateY(${props.$y}${props.$sizeUnit}) scale(1.25);
  }
  5% {
    transform: translateX(${props.$x}${props.$sizeUnit}) translateY(${props.$y}${props.$sizeUnit}) scale(1.75);
  }
  50% {
    transform: translateX(${props.$x}${props.$sizeUnit}) translateY(${props.$y}${props.$sizeUnit}) scale(.25);
  }
  55% {
    background-color: ${props.$backColor};
    transform: translateX(${props.$x}${props.$sizeUnit}) translateY(${props.$y}${props.$sizeUnit}) scale(1);
  }
`;

type WrapperProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  animation: ${rotate} 1.5s linear infinite;
`;

type BallProps = TransientSpinner3DProps & {
  $x: number;
  $y: number;
  $ballSize: number;
  $index: number;
};

const Ball = styled.div<BallProps>`
  position: absolute;
  top: ${(props) => `${props.$size / 2}${props.$sizeUnit}`};
  left: ${(props) => `${props.$size / 2}${props.$sizeUnit}`};
  width: ${(props) => `${props.$ballSize}${props.$sizeUnit}`};
  height: ${(props) => `${props.$ballSize}${props.$sizeUnit}`};
  border-radius: 50%;
  background-color: ${(props) => props.$frontColor};
  transform: translateX(${(props) => `${props.$x}${props.$sizeUnit}`})
    translateY(${(props) => `${props.$y}${props.$sizeUnit}`});
  animation: ${(props) => move(props)} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1)
    infinite;
  animation-delay: ${(props) => props.$index * 0.2}s;
`;

const ClapSpinner: React.FC<Spinner3DProps> = ({
  size = 40,
  frontColor = "#436bfc",
  backColor = "#77aaef",
  sizeUnit = "px",
}) => {
  const balls = useMemo(() => {
    const radius = size / 2;
    const ballSize = size / 5;
    const offset = ballSize / 2;
    const angle = 360 / BALLS_COUNT;

    return Array.from({ length: BALLS_COUNT }, (_, i) => {
      const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
      const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;
      return (
        <Ball
          key={i}
          $index={i}
          $frontColor={frontColor}
          $backColor={backColor}
          $ballSize={ballSize}
          $size={size}
          $sizeUnit={sizeUnit}
          $x={y}
          $y={x}
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

export default ClapSpinner;
