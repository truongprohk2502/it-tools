"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const BALLS_COUNT = 8;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% { 
    transform: rotate(1440deg); 
    opacity: 0.05;
  }
`;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
`;

type BallProps = TransientSpinnerProps & {
  $index: number;
  $ballSize: number;
};

const Ball = styled.div<BallProps>`
  position: absolute;
  left: 50%;
  top: 0%;
  width: ${(props) => `${props.$ballSize}${props.$sizeUnit}`};
  height: ${(props) => `${props.$ballSize}${props.$sizeUnit}`};
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  transform: translateX(-50%) translateY(100%);
  transform-origin: 0 250% 0;
  animation: ${rotate} 4s both infinite;
  animation-timing-function: cubic-bezier(
    0.5,
    ${(props) => props.$index * 0.3},
    0.9,
    0.9
  );
`;

const RotateSpinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const cubes = useMemo(() => {
    const ballSize = size / 5;

    return Array.from({ length: BALLS_COUNT }, (_, i) => {
      return (
        <Ball
          key={i}
          $index={i}
          $color={color}
          $ballSize={ballSize}
          $size={size}
          $sizeUnit={sizeUnit}
        />
      );
    });
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {cubes}
    </Wrapper>
  );
};

export default RotateSpinner;
