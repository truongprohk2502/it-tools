"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const BARS_COUNT = 6;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  overflow: hidden;
`;

type BarProps = TransientSpinnerProps & {
  $index: number;
  $countBalls: number;
};

const rotate = () => keyframes`
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
`;

const Bar = styled.div<BarProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
  width: ${(props) =>
    `${props.$index * (props.$size / props.$countBalls)}${props.$sizeUnit}`};
  height: ${(props) =>
    `${props.$index * (props.$size / props.$countBalls)}${props.$sizeUnit}`};
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid transparent;
  border-top-color: ${(props) => props.$color};
  animation: ${rotate} 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite
    forwards;
  animation-delay: ${(props) => props.$index * 0.05}s;
`;

const MagicSpinner: React.FC<SpinnerProps> = ({
  size = 60,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const bars = useMemo(() => {
    return Array.from({ length: BARS_COUNT }, (_, i) => (
      <Bar
        key={i}
        $index={i}
        $color={color}
        $countBalls={BARS_COUNT}
        $size={size}
        $sizeUnit={sizeUnit}
      />
    ));
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {bars}
    </Wrapper>
  );
};

export default MagicSpinner;
