"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const firstPulse = (props: TransientSpinnerProps) => keyframes`
  0% { 
    box-shadow: inset 0 0 0 ${props.$size / 10}${props.$sizeUnit} ${props.$color};
    opacity: 1;
  }
  50%, 100% {
    box-shadow: inset 0 0 0 0 ${props.$color};
    opacity: 0;
  }
`;

const secondPulse = (props: TransientSpinnerProps) => keyframes`
  0%, 50% { 
    box-shadow: inset 0 0 0 0 ${props.$color};
    opacity: 0;
  }
  100% { 
    box-shadow: inset 0 0 0 ${props.$size / 10}${props.$sizeUnit} ${props.$color};
    opacity: 1;
  }
`;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
`;

const Circle = styled.div<TransientSpinnerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
  &:before,
  &:after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    border-radius: 50%;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  &:before {
    box-shadow: ${(props) =>
      `inset 0 0 0 ${props.$size / 10}${props.$sizeUnit} ${props.$color}`};
    animation-name: ${firstPulse};
  }
  &:after {
    box-shadow: 0 0 0 0 ${(props) => props.$color};
    animation-name: ${secondPulse};
  }
`;

const RingSpinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      <Circle $size={size} $color={color} $sizeUnit={sizeUnit} />
    </Wrapper>
  );
};

export default RingSpinner;
