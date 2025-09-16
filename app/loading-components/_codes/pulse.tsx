export const PULSE_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const CUBES_COUNT = 3;

const motion = keyframes\`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
\`;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 2.5}\${props.$sizeUnit}\`};
\`;

const Cube = styled.div\`
  position: absolute;
  top: \${(props) => \`\${props.$y}\${props.$sizeUnit}\`};
  left: \${(props) => \`\${props.$x}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 2.5}\${props.$sizeUnit}\`};
  background-color: \${(props) => props.$color};
  animation: \${motion} 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
  animation-delay: \${(props) => props.$index * 0.15}s;
\`;

const PulseSpinner = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const cubes = React.useMemo(() => {
    return Array.from({ length: CUBES_COUNT }, (_, i) => {
      return (
        <Cube
          key={i}
          $index={i}
          $color={color}
          $size={size}
          $x={i * (size / 3 + size / 15)}
          $y={0}
          $sizeUnit={sizeUnit}
        />
      );
    });
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {cubes}
    </Wrapper>
  );
};

export default PulseSpinner;
`;
