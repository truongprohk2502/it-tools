"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const BARS_COUNT = 10;

const motion = (props: BarProps) => keyframes`
  15% {
    transform: scaleY(1) translateX(10${props.$sizeUnit});
  }
  90% {
    transform: scaleY(0.05) translateX(-5${props.$sizeUnit});
  }
  100% {
    transform: scaleY(0.05) translateX(-5${props.$sizeUnit});
  }
`;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size * 2.5}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  overflow: hidden;
`;

type BarProps = TransientSpinnerProps & {
  $x: number;
  $y: number;
  $index: number;
};

const Bar = styled.div<BarProps>`
  position: absolute;
  top: 0;
  left: ${(props) => `${props.$x}${props.$sizeUnit}`};
  width: ${(props) => `${props.$size / 5}${props.$sizeUnit}`};
  height: 100%;
  transform: scaleY(0.05) translateX(-5px);
  background-color: ${(props) => props.$color};
  animation: ${motion} 1.25s ease-in-out infinite;
  animation-delay: ${(props) => props.$index * 0.15}s;
`;

const PushSpinner: React.FC<SpinnerProps> = ({
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
        $x={i * (size / 5 + (size / 15 - size / 100))}
        $y={0}
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

export default PushSpinner;
