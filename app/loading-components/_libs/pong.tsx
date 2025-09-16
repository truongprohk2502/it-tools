"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 1.75}${props.$sizeUnit}`};
`;

const motionBall = (props: TransientSpinnerProps) => keyframes`
  0% {
    top: ${props.$size / 3.5 - props.$size / 8}${props.$sizeUnit};
    left: ${props.$size / 12}${props.$sizeUnit};
  }
  25% {
    top: ${props.$size / 3.5}${props.$sizeUnit};
    left: ${props.$size - props.$size / 8}${props.$sizeUnit}; 
  }
  50% {
    top: ${props.$size / 1.75 - props.$size / 8}${props.$sizeUnit};
    left: ${props.$size / 12}${props.$sizeUnit}; 
  }
  75% {
    top: ${props.$size / 3.5}${props.$sizeUnit};
    left: ${props.$size - props.$size / 8}${props.$sizeUnit};
  }
  100% {
    top: ${props.$size / 3.5 - props.$size / 8}${props.$sizeUnit};
    left: ${props.$size / 12}${props.$sizeUnit}; 
  }
`;

const Ball = styled.div<TransientSpinnerProps>`
  position: absolute;
  width: ${(props) => `${props.$size / 8}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 8}${props.$sizeUnit}`};
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  animation: ${(props) => motionBall(props)} 2s linear infinite;
`;

type PlayerProps = TransientSpinnerProps & {
  $left?: boolean;
  $right?: boolean;
};

const motionPlayer = (props: PlayerProps) => keyframes`
  0% {
    top: ${props.$left ? 0 : props.$size / 3.5}${props.$sizeUnit};
  }
  50% {
    top: ${props.$left ? props.$size / 3.5 : 0}${props.$sizeUnit};
  }
  100% {
    top: ${props.$left ? 0 : props.$size / 3.5}${props.$sizeUnit};
  }
`;

const Player = styled.div<PlayerProps>`
  position: absolute;
  width: ${(props) => `${props.$size / 12}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 3}${props.$sizeUnit}`};
  background-color: ${(props) => props.$color};
  left: ${(props) => (props.$left ? 0 : props.$size)};
  right: ${(props) => (props.$right ? 0 : props.$size)};
  border-radius: 4px;
  animation: ${(props) => motionPlayer(props)} 2s linear infinite;
`;

const PongSpinner: React.FC<SpinnerProps> = ({
  size = 60,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      <Player $left={true} $color={color} $size={size} $sizeUnit={sizeUnit} />
      <Ball $color={color} $size={size} $sizeUnit={sizeUnit} />
      <Player $right={true} $color={color} $size={size} $sizeUnit={sizeUnit} />
    </Wrapper>
  );
};

export default PongSpinner;
