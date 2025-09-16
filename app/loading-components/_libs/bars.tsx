"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const BARS_COUNT = 5;

const motion = (props: TransientSpinnerProps) => keyframes`
  0% {
    width: ${props.$size / 20}${props.$sizeUnit}
  }
  50% {
    width: ${props.$size / 6}${props.$sizeUnit}
  }
  100% {
    width: ${props.$size / 20}${props.$sizeUnit}
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

type BarProps = TransientSpinnerProps & {
  $x: number;
  $y: number;
  $index: number;
};

const Bar = styled.div<BarProps>`
  position: absolute;
  top: ${(props) => `${props.$y}${props.$sizeUnit}`};
  left: ${(props) => `${props.$x}${props.$sizeUnit}`};
  width: ${(props) => `${props.$size / 20}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  background-color: ${(props) => props.$color};
  animation: ${motion} 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  animation-delay: ${(props) => props.$index * 0.15}s;
`;

const BarsSpinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const bars = useMemo(() => {
    return Array.from({ length: BARS_COUNT }, (_, i) => (
      <Bar
        key={i}
        $index={i}
        $color={color}
        $size={size}
        $sizeUnit={sizeUnit}
        $x={i * (size / 5 + size / 25) - size / 12}
        $y={0}
      />
    ));
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {bars}
    </Wrapper>
  );
};

export default BarsSpinner;
