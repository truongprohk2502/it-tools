"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const motion = (props: BallProps) => keyframes`
  0% {
    transform: translateX(0) scale(1);
  }
  25% {
    transform: translateX(${props.$size / 2}${props.$sizeUnit}) scale(0.25);
  }
  50% {
    transform: translateX(0) scale(1);
  }
  75% {
    transform: translateX(${-props.$size / 2}${props.$sizeUnit}) scale(0.25);
  }
  100% {
    transform: translateX(0) scale(1);
  }
`;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 2}${props.$sizeUnit}`};
`;

type BallProps = TransientSpinnerProps;

const Ball = styled.div<BallProps>`
  width: ${(props) => `${props.$size / 3}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 3}${props.$sizeUnit}`};
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  animation: ${(props) => motion(props)} 3s cubic-bezier(0.165, 0.84, 0.44, 1)
    infinite;
`;

const BallSpinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      <Ball $color={color} $size={size} $sizeUnit={sizeUnit} />{" "}
    </Wrapper>
  );
};

export default BallSpinner;
