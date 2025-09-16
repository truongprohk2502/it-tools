"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const resize = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.75);
  }
  50% {
    transform: scale(1);
  }
  65% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(1);
  }
`;

const Wrapper = styled.div<TransientSpinnerProps>`
  position: relative;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size - props.$size / 10}${props.$sizeUnit}`};
  animation: ${resize} 1s ease-in-out infinite;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: ${(props) => `${props.$size / 20}${props.$sizeUnit}`};
    left: ${(props) => `${props.$size / 2}${props.$sizeUnit}`};
    width: ${(props) => `${props.$size / 2}${props.$sizeUnit}`};
    height: ${(props) => `${props.$size - props.$size / 5}${props.$sizeUnit}`};
    background-color: ${(props) => props.$color};
    border-radius: ${(props) => `${props.$size / 2}${props.$sizeUnit}`}
      ${(props) => `${props.$size / 2}${props.$sizeUnit}`} 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

const HeartSpinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  return <Wrapper $size={size} $color={color} $sizeUnit={sizeUnit} />;
};

export default HeartSpinner;
