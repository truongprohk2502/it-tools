"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const BALLS_COUNT = 9;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(-360deg);
  }
`;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  animation: ${rotate} 3s infinite ease-in;
`;

type BallProps = TransientSpinnerProps & {
  $index: number;
  $countBalls: number;
  $ballSize: number;
};

const rotateBall = (props: BallProps) => keyframes`
  ${(((props.$size / 2 / props.$countBalls) * (props.$index - 1)) / props.$size) * 100}% {
    opacity: 0;
  }
  ${(((props.$size / 2 / props.$countBalls + 0.0001) * (props.$index - 1)) / props.$size) * 100}% {
    opacity: 1;
    transform: ${`rotate(${0 - (360 / props.$countBalls) * (props.$index - 2)}deg)`};
  }
  ${(((props.$size / 2 / props.$countBalls) * (props.$index - 0) + 2) / props.$size) * 100}% {
    transform: ${`rotate(${0 - (360 / props.$countBalls) * (props.$index - 1)}deg)`};
  }
  ${((props.$size / 2 + (props.$size / 2 / props.$countBalls) * (props.$index - 0) + 2) / props.$size) * 100}% {
    transform: ${`rotate(${0 - (360 / props.$countBalls) * (props.$index - 1)}deg)`};
  }
  100% {
    transform: ${`rotate(${0 - (360 / props.$countBalls) * (props.$countBalls - 1)}deg)`};
    opacity: 1;
  }
`;

const Ball = styled.div<BallProps>`
  position: absolute;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  animation: ${rotateBall} 2s infinite linear;
  transform: ${(props) =>
    `rotate(${(360 / props.$countBalls) * props.$index}deg)`};
  opacity: 0;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0%;
    width: ${(props) => `${props.$ballSize}${props.$sizeUnit}`};
    height: ${(props) => `${props.$ballSize}${props.$sizeUnit}`};
    background-color: ${(props) => `${props.$color}`};
    transform: translateX(-50%);
    border-radius: 50%;
  }
`;

const MetroSpinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const balls = useMemo(() => {
    return Array.from({ length: BALLS_COUNT }, (_, i) => {
      return (
        <Ball
          key={i}
          $index={i + 1}
          $countBalls={BALLS_COUNT}
          $color={color}
          $ballSize={size / 8}
          $size={size}
          $sizeUnit={sizeUnit}
        />
      );
    });
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {balls}
    </Wrapper>
  );
};

export default MetroSpinner;
