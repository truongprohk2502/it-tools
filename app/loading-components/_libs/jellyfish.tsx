"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { SpinnerProps, TransientSpinnerProps } from "../types";

const RINGS_COUNT = 6;

type WrapperProps = Pick<TransientSpinnerProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
`;

type RingProps = TransientSpinnerProps & {
  $index: number;
  $countRings: number;
};

const motion = (props: RingProps) => keyframes`
  0% {
    transform: ${`translateY(${-props.$size / 5}${props.$sizeUnit});`};
  }
  50% {
    transform: ${`translateY(${props.$size / 4}${props.$sizeUnit})`};
  }
  100% {
    transform: ${`translateY(${-props.$size / 5}${props.$sizeUnit})`};
  }
`;

const Ring = styled.div<RingProps>`
  position: absolute;
  width: ${(props) =>
    `${props.$index * (props.$size / props.$countRings)}${props.$sizeUnit}`};
  height: ${(props) =>
    `${(props.$index * (props.$size / props.$countRings)) / 2}${props.$sizeUnit}`};
  border: 2px solid ${(props) => props.$color};
  border-radius: 50%;
  background-color: transparent;
  animation: ${motion} 2.5s ease infinite;
  animation-delay: ${(props) => props.$index * 100}ms;
`;

const JellyfishSpinner: React.FC<SpinnerProps> = ({
  size = 60,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const rings = useMemo(() => {
    return Array.from({ length: RINGS_COUNT }, (_, i) => {
      return (
        <Ring
          key={i}
          $index={i}
          $color={color}
          $size={size}
          $countRings={RINGS_COUNT}
          $sizeUnit={sizeUnit}
        />
      );
    });
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {rings}
    </Wrapper>
  );
};

export default JellyfishSpinner;
