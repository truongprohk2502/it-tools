"use client";

import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import type { Spinner3DProps, TransientSpinner3DProps } from "../types";

const CUBES_COUNT = 4;

const rotate = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  25% {
    transform: rotateX(-90deg);
  }
  50% {
    transform: rotateX(-180deg);
  }
  75% {
    transform: rotateX(-270deg);
  }
  100% {
    transform: rotateX(-360deg);
  }
`;

type WrapperProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 4}${props.$sizeUnit}`};
  perspective: ${(props) => `${props.$size * 3}${props.$sizeUnit}`};
`;

type CubeWrapperProps = Pick<TransientSpinner3DProps, "$sizeUnit"> & {
  $x: number;
  $y: number;
};

const CubeWrapper = styled.div<CubeWrapperProps>`
  position: absolute;
  top: ${(props) => `${props.$y}${props.$sizeUnit}`};
  left: ${(props) => `${props.$x}${props.$sizeUnit}`};
  width: inherit;
  height: inherit;
`;

type CubeProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit"> & {
  $index: number;
};

const Cube = styled.div<CubeProps>`
  position: relative;
  width: ${(props) => `${props.$size / 4}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size / 4}${props.$sizeUnit}`};
  transform-style: preserve-3d;
  animation: ${rotate} 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  animation-delay: ${(props) => props.$index * 0.15}s;
`;

type SideProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit"> & {
  $front?: boolean;
  $back?: boolean;
  $top?: boolean;
  $bottom?: boolean;
  $color: string;
};

const rotateCube = (props: SideProps) => {
  if (props.$top) {
    return 90;
  }
  if (props.$bottom) {
    return -90;
  }
  return 0;
};

const Side = styled.div<SideProps>`
  backface-visibility: hidden;
  display: block;
  position: absolute;
  width: inherit;
  height: inherit;
  background-color: ${(props) => props.$color};
  transform: rotateX(${(props) => rotateCube(props)}deg)
    rotateY(${(props) => (props.$back ? 180 : 0)}deg)
    translateZ(${(props) => `${props.$size / 8}${props.$sizeUnit}`});
`;

const SpiralSpinner: React.FC<Spinner3DProps> = ({
  size = 40,
  frontColor = "#436bfc",
  backColor = "#77aaef",
  sizeUnit = "px",
}) => {
  const cubes = useMemo(() => {
    return Array.from({ length: CUBES_COUNT }, (_, i) => {
      return (
        <CubeWrapper key={i} $x={i * (size / 4)} $y={0} $sizeUnit={sizeUnit}>
          <Cube $size={size} $index={i} $sizeUnit={sizeUnit}>
            <Side
              $front={true}
              $size={size}
              $color={frontColor}
              $sizeUnit={sizeUnit}
            />
            <Side
              $back={true}
              $size={size}
              $color={frontColor}
              $sizeUnit={sizeUnit}
            />
            <Side
              $bottom={true}
              $size={size}
              $color={backColor}
              $sizeUnit={sizeUnit}
            />
            <Side
              $top={true}
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

export default SpiralSpinner;
