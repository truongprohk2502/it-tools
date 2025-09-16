"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const BARS_COUNT = 10;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 5}${props.$sizeUnit}`};
`;

const rotate = () => keyframes`
  to {
    transform: rotate(450deg);
  }
`;

type BarProps = TransientSpinnerProps & {
  $index: number;
};

const Bar = styled.div<BarProps>`
  position: absolute;
  left: 0;
  width: ${(props) => `${props.$size / 60}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 5}${props.$sizeUnit}`};
  left: ${(props) => `${props.$index * 9}${props.$sizeUnit}`};
  transform-origin: center bottom;
  transform: rotate(-90deg);
  background-color: ${(props) => props.$color};
  animation: ${rotate} 3s ease infinite;
  animation-delay: ${(props) => props.$index * 0.05}s;
`;

const CombSpinner: React.FC<SpinnerProps> = ({
  size = 100,
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
      />
    ));
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {bars}
    </Wrapper>
  );
};

export default CombSpinner;
