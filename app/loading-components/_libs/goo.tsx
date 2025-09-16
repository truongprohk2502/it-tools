"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const BALLS_COUNT = 2;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  filter: url("#goo");
`;

const rotate = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

type BallsWrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const BallsWrapper = styled.div<BallsWrapperProps>`
  position: relative;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  animation: ${rotate} 1.7s linear infinite;
`;

type BallProps = TransientSpinnerProps & {
  $x: number;
  $y: number;
  $translateTo: number;
};

const move = (props: BallProps) => keyframes`
  0%{
    transform: translateY(0) scale(1);
  }
  50%{
    transform: translateY(${props.$translateTo}${props.$sizeUnit}) scale(0.8);
  }
  100%{
    transform: translateY(0) scale(1);
  }
`;

const Ball = styled.div<BallProps>`
  position: absolute;
  top: ${(props) => `${props.$y}${props.$sizeUnit}`};
  left: ${(props) => `${props.$x}${props.$sizeUnit}`};
  width: ${(props) => `${props.$size / 3}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 3}${props.$sizeUnit}`};
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  animation: ${move} 1.5s ease-in-out infinite;
`;

const GooSpinner: React.FC<SpinnerProps> = ({
  size = 55,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const balls = useMemo(() => {
    const center = size / 4;
    const ballsTranslatePositions = [-center, center];

    return Array.from({ length: BALLS_COUNT }, (_, i) => (
      <Ball
        key={i}
        $x={size / 2 - size / 6}
        $y={size / 2 - size / 6}
        $color={color}
        $size={size}
        $translateTo={ballsTranslatePositions[i]}
        $sizeUnit={sizeUnit}
      />
    ));
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      <BallsWrapper $size={size} $sizeUnit={sizeUnit}>
        {balls}
      </BallsWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </Wrapper>
  );
};

export default GooSpinner;
