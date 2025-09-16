"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const BARS_COUNT = 7;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 5}${props.$sizeUnit}`};
`;

type BarProps = TransientSpinnerProps & {
  $index: number;
  $rotate: number;
  $translatesPoints: number[];
};

const fall = (props: BarProps) => keyframes`
  0% {
    transform: translateX(${props.$translatesPoints[0]}${props.$sizeUnit}) rotate(0deg);
    opacity: 0;
  }
  14.28% {
    transform: translateX(${props.$translatesPoints[1]}${props.$sizeUnit}) rotate(0deg);
    opacity: 1;
  }
  28.56% {
    transform: translateX(${props.$translatesPoints[2]}${props.$sizeUnit}) rotate(0deg);
    opacity: 1;
  }
  37.12% {
    transform: translateX(${props.$translatesPoints[3]}${props.$sizeUnit}) rotate(0deg);
    opacity: 1;
  }
  42.84% {
    transform: translateX(${props.$translatesPoints[4]}${props.$sizeUnit}) rotate(10deg);
    opacity: 1;
  }
  57.12% {
    transform: translateX(${props.$translatesPoints[5]}${props.$sizeUnit}) rotate(40deg);
    opacity: 1;
  }
  71.4% {
    transform: translateX(${props.$translatesPoints[6]}${props.$sizeUnit}) rotate(62deg);
    opacity: 1;
  }
  85.68% {
    transform: translateX(${props.$translatesPoints[7]}${props.$sizeUnit}) rotate(72deg);
    opacity: 1;
  }
  100% {
    transform: translateX(${props.$translatesPoints[8]}${props.$sizeUnit}) rotate(74deg);
    opacity: 0;
  }
`;

const Bar = styled.div<BarProps>`
  position: absolute;
  right: 0;
  width: ${(props) => `${props.$size / 30}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 5}${props.$sizeUnit}`};
  transform-origin: 50% 100%;
  background-color: ${(props) => props.$color};
  animation: ${fall} 3s linear infinite;
  animation-delay: ${(props) => props.$index * -0.42}s;
  transform: translateX(
      ${(props) => `${props.$size - props.$index * 15}${props.$sizeUnit}`}
    )
    rotate(${(props) => props.$rotate}deg);
  &:nth-child(1) {
    opacity: 0.22;
  }
`;

const DominoSpinner: React.FC<SpinnerProps> = ({
  size = 100,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const bars = useMemo(() => {
    const getTranslatePositions = () => {
      const translates = [];
      for (let i = 0; i <= BARS_COUNT + 1; i++) {
        translates.push(-i * (size / 8));
      }
      return translates;
    };

    const rotatesPoints = [0, 0, 0, 10, 40, 60, 70];
    const translatesPoints = getTranslatePositions();

    return Array.from({ length: BARS_COUNT }, (_, i) => {
      return (
        <Bar
          key={i}
          $index={i}
          $color={color}
          $size={size}
          $translatesPoints={translatesPoints}
          $rotate={rotatesPoints[i]}
          $sizeUnit={sizeUnit}
        />
      );
    });
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {bars}
    </Wrapper>
  );
};

export default DominoSpinner;
