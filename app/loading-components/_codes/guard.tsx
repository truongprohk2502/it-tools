export const GUARD_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const CUBES_COUNT = 3;

const rotate = keyframes\`
  0% {
    transform: rotateY(90deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(90deg);
  }
\`;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  perspective: \${(props) => \`\${props.$size * 3}\${props.$sizeUnit}\`};
\`;

const CubeWrapper = styled.div\`
  position: absolute;
  top: \${(props) => \`\${props.$y}\${props.$sizeUnit}\`};
  left: \${(props) => \`\${props.$x}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
\`;

const Cube = styled.div\`
  position: relative;
  width: \${(props) => \`\${props.$size / 4}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 4}\${props.$sizeUnit}\`};
  transform-style: preserve-3d;
  animation: \${rotate} 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
  animation-delay: \${(props) => props.$index * 0.125}s;
\`;

const Side = styled.div\`
  display: block;
  position: absolute;
  width: inherit;
  height: inherit;
  background-color: \${(props) => props.$color};
  transform: rotateY(\${(props) => (props.$front ? 0 : -90)}deg)
    translateZ(\${(props) => \`\${props.$size / 8}\${props.$sizeUnit}\`});
\`;

const GuardSpinner = ({
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
`;
