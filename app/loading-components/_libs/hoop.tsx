"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const BALLS_COUNT = 6;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  perspective: 600px;
  transform-style: preserve-3d;
`;

type BallProps = TransientSpinnerProps & { $index: number };

const motion = (props: BallProps) => keyframes`
  0% {
    opacity: 0;
    border-color: ${props.$color};
    transform: ${`rotateX(65deg) rotateY(45deg) translateZ(-${props.$size * 1.5}${
      props.$sizeUnit
    }) scale(0.1)`};
  }
  40% {
    opacity: 1;
    transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: ${`rotateX(65deg) rotateY(-45deg) translateZ(-${props.$size * 1.5}${
      props.$sizeUnit
    }) scale(0.1)`};
  }
`;

const Ball = styled.div<BallProps>`
  position: absolute;
  width: ${(props) => `${props.$size / 1.5}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 1.5}${props.$sizeUnit}`};
  border: ${(props) => `${props.$size / 5}${props.$sizeUnit}`} solid
    ${(props) => props.$color};
  border-radius: 50%;
  background-color: transparent;
  transform-style: preserve-3d;
  transform: scale(0) rotateX(60deg);
  opacity: ${(props) => 1 - props.$index * 0.2};
  animation: ${motion} 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite;
  animation-delay: ${(props) => props.$index * 200}ms;
`;
const HoopSpinner: React.FC<SpinnerProps> = ({
  size = 45,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const balls = useMemo(() => {
    return Array.from({ length: BALLS_COUNT }, (_, i) => (
      <Ball
        key={i}
        $index={i}
        $color={color}
        $size={size}
        $sizeUnit={sizeUnit}
      />
    ));
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {balls}
    </Wrapper>
  );
};

export default HoopSpinner;
