"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const BARS_COUNT = 16;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
`;

const fade = keyframes`
  0% {
    opacity: 1
  }
  100% { 
    opacity: 0;
  }
`;

type BarProps = TransientSpinnerProps & {
  $index: number;
  $countBars: number;
  $rotate: number;
  $translate: number;
};

const Bar = styled.div<BarProps>`
  position: absolute;
  width: ${(props) => `${props.$size / 10}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 4}${props.$sizeUnit}`};
  background-color: ${(props) => props.$color};
  opacity: 0.05;
  transform: ${(props) => `rotate(${props.$rotate}deg)`}
    ${(props) => `translate(0, ${props.$translate}${props.$sizeUnit})`};
  animation: ${fade} ${(props) => props.$countBars * 0.06}s linear infinite;
  animation-delay: ${(props) => props.$index * 0.06}s;
`;

const ClassicSpinner: React.FC<SpinnerProps> = ({
  size = 30,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const bars = useMemo(() => {
    return Array.from({ length: BARS_COUNT }, (_, i) => {
      const rotate = (360 / BARS_COUNT) * i;
      const translate = -(size / 2);

      return (
        <Bar
          key={i}
          $index={i}
          $countBars={BARS_COUNT}
          $color={color}
          $size={size}
          $rotate={rotate}
          $translate={translate}
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

export default ClassicSpinner;
