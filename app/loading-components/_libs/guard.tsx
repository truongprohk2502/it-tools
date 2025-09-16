"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { Spinner3DProps, TransientSpinner3DProps } from "../types";

const CUBES_COUNT = 3;

const rotate = keyframes`
  0% {
    transform: rotateY(90deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(90deg);
  }
`;

type WrapperProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  perspective: ${(props) => `${props.$size * 3}${props.$sizeUnit}`};
`;

type CubeWrapperProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit"> & {
  $x: number;
  $y: number;
};

const CubeWrapper = styled.div<CubeWrapperProps>`
  position: absolute;
  top: ${(props) => `${props.$y}${props.$sizeUnit}`};
  left: ${(props) => `${props.$x}${props.$sizeUnit}`};
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
`;

type CubeProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit"> & {
  $index: number;
};

const Cube = styled.div<CubeProps>`
  position: relative;
  width: ${(props) => `${props.$size / 4}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 4}${props.$sizeUnit}`};
  transform-style: preserve-3d;
  animation: ${rotate} 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
  animation-delay: ${(props) => props.$index * 0.125}s;
`;

type SideProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit"> & {
  $front: boolean;
  $color: string;
};

const Side = styled.div<SideProps>`
  display: block;
  position: absolute;
  width: inherit;
  height: inherit;
  background-color: ${(props) => props.$color};
  transform: rotateY(${(props) => (props.$front ? 0 : -90)}deg)
    translateZ(${(props) => `${props.$size / 8}${props.$sizeUnit}`});
`;

const GuardSpinner: React.FC<Spinner3DProps> = ({
  size = 40,
  frontColor = "#436bfc",
  backColor = "#acbacd",
  sizeUnit = "px",
}) => {
  const cubes = useMemo(() => {
    return Array.from({ length: CUBES_COUNT * CUBES_COUNT }, (_, index) => {
      const i = index % CUBES_COUNT;
      const j = Math.floor(index / CUBES_COUNT);
      return (
        <CubeWrapper
          key={index}
          $x={i * (size / 4 + size / 8)}
          $y={j * (size / 4 + size / 8)}
          $size={size}
          $sizeUnit={sizeUnit}
        >
          <Cube $size={size} $index={index} $sizeUnit={sizeUnit}>
            <Side
              $front={true}
              $size={size}
              $color={frontColor}
              $sizeUnit={sizeUnit}
            />
            <Side
              $front={false}
              $size={size}
              $color={backColor}
              $sizeUnit={sizeUnit}
            />
          </Cube>
        </CubeWrapper>
      );
    });
  }, [size, frontColor, backColor, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {cubes}
    </Wrapper>
  );
};

export default GuardSpinner;
