export const ROTATE_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BALLS_COUNT = 8;

const rotate = keyframes\`
  0% {
    transform: rotate(0deg);
  }
  100% { 
    transform: rotate(1440deg); 
    opacity: 0.05;
  }
\`;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
\`;

const Ball = styled.div\`
  position: absolute;
  left: 50%;
  top: 0%;
  width: \${(props) => \`\${props.$ballSize}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$ballSize}\${props.$sizeUnit}\`};
  border-radius: 50%;
  background-color: \${(props) => props.$color};
  transform: translateX(-50%) translateY(100%);
  transform-origin: 0 250% 0;
  animation: \${rotate} 4s both infinite;
  animation-timing-function: cubic-bezier(
    0.5,
    \${(props) => props.$index * 0.3},
    0.9,
    0.9
  );
\`;

const RotateSpinner = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const cubes = React.useMemo(() => {
    const ballSize = size / 5;

    return Array.from({ length: BALLS_COUNT }, (_, i) => {
      return (
        <Ball
          key={i}
          $index={i}
          $color={color}
          $ballSize={ballSize}
          $size={size}
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

export default RotateSpinner;
`;
