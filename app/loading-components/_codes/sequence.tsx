export const SEQUENCE_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const CUBES_COUNT = 5;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 1.75}\${props.$sizeUnit}\`};
  perspective: \${(props) => \`\${props.$size * 3}\${props.$sizeUnit}\`};
  overflow: hidden;
  transform: rotateY(20deg);
\`;

const CubeWrapper = styled.div\`
  position: absolute;
  top: \${(props) => \`\${props.$y}\${props.$sizeUnit}\`};
  left: \${(props) => \`\${props.$x}\${props.$sizeUnit}\`};
  width: inherit;
  height: inherit;
\`;

const rotate = (props) => keyframes\`
  0% {
    top: \${props.$size}\${props.$sizeUnit};
    transform: rotateY(0deg);
  }
  30% {
    top: 0;
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
    top: -\${props.$size}\${props.$sizeUnit};
  }
\`;

const Cube = styled.div\`
  position: relative;
  width: \${(props) => \`\${props.$size / 8}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 1.75}\${props.$sizeUnit}\`};
  transform-style: preserve-3d;
  animation: \${rotate} 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  animation-delay: \${(props) => props.$index * 0.1}s;
\`;

const Side = styled.div\`
  backface-visibility: hidden;
  display: block;
  position: absolute;
  width: inherit;
  height: inherit;
  background-color: \${(props) => props.$color};
  transform: rotateY(\${(props) => (props.$front ? 0 : -90)}deg)
    translateZ(\${(props) => \`\${props.$size / 16}\${props.$sizeUnit}\`});
\`;

const SequenceSpinner = ({
  size = 40,
  frontColor = "#77aaef",
  backColor = "#436bfc",
  sizeUnit = "px",
}) => {
  const cubes = React.useMemo(() => {
    return Array.from({ length: CUBES_COUNT }, (_, i) => {
      return (
        <CubeWrapper
          key={i}
          $x={i * (size / 8 + size / 11)}
          $y={0}
          $sizeUnit={sizeUnit}
        >
          <Cube $size={size} $index={i} $sizeUnit={sizeUnit}>
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

export default SequenceSpinner;
`;
