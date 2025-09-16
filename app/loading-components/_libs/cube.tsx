"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import type { Spinner3DProps, TransientSpinner3DProps } from "../types";

const rotate = keyframes`
  from { transform: rotateX(0) rotateY(0); }
  to { transform: rotateX(360deg) rotateY(360deg); }
`;

type WrapperProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit">;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  perspective: ${(props) => `${props.$size * 4}${props.$sizeUnit}`};
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

type CubeProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit">;

const Cube = styled.div<CubeProps>`
  position: relative;
  width: ${(props) => `${props.$size}${props.$sizeUnit}`};
  height: ${(props) => `${props.$size}${props.$sizeUnit}`};
  transform-style: preserve-3d;
  animation: ${rotate} 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`;

type SideProps = Pick<TransientSpinner3DProps, "$size" | "$sizeUnit"> & {
  $color: string;
  $top?: boolean;
  $bottom?: boolean;
  $left?: boolean;
  $right?: boolean;
  $front?: boolean;
  $back?: boolean;
};

const rotateXCube = (props: SideProps) => {
  if (props.$top) {
    return 90;
  }
  if (props.$bottom) {
    return -90;
  }
  return 0;
};

const rotateYCube = (props: SideProps) => {
  if (props.$left) {
    return 90;
  }
  if (props.$right) {
    return -90;
  }
  if (props.$back) {
    return 180;
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
  transform: rotateX(${(props) => rotateXCube(props)}deg)
    rotateY(${(props) => rotateYCube(props)}deg)
    translateZ(${(props) => `${props.$size / 2}${props.$sizeUnit}`});
`;

const CubeSpinner: React.FC<Spinner3DProps> = ({
  size = 40,
  frontColor = "#436bfc",
  backColor = "#6d6e71",
  sizeUnit = "px",
}) => {
  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      <CubeWrapper $x={0} $y={0} $sizeUnit={sizeUnit}>
        <Cube $size={size} $sizeUnit={sizeUnit}>
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
          <Side
            $left={true}
            $size={size}
            $color={backColor}
            $sizeUnit={sizeUnit}
          />
          <Side
            $right={true}
            $size={size}
            $color={backColor}
            $sizeUnit={sizeUnit}
          />
        </Cube>
      </CubeWrapper>
    </Wrapper>
  );
};

export default CubeSpinner;
