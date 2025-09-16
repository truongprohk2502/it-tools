"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 2}${props.$sizeUnit}`};
  overflow: hidden;
`;

const rotate = (props: TransientSpinnerProps) => keyframes`
  0% {
    border-width: 10${props.$sizeUnit}; 
  }
  25% {
    border-width: 3${props.$sizeUnit}; 
  }
  50% {
    transform: rotate(115deg); 
    border-width: 10${props.$sizeUnit};
  }
  75% {
    border-width: 3${props.$sizeUnit};
  }
  100% {
    border-width: 10${props.$sizeUnit};
  }
`;

const Line = styled.div<TransientSpinnerProps>`
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  border-radius: 50%;
  border-style: solid;
  border-top-color: ${(props) => props.$color};
  border-right-color: ${(props) => props.$color};
  border-left-color: transparent;
  border-bottom-color: transparent;
  box-sizing: border-box;
  transform: rotate(-200deg);
  animation: ${rotate} 3s ease-in-out infinite;
`;

const RainbowSpinner: React.FC<SpinnerProps> = ({
  size = 50,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      <Line $size={size} $color={color} $sizeUnit={sizeUnit} />
    </Wrapper>
  );
};

export default RainbowSpinner;
