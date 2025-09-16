export const SWAP_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BALLS_COUNT = 3;

const animationLeftPositions = (props) => {
  switch (props.$index) {
    case 0:
      return {
        x: props.$size - props.$size / 4,
        y: props.$y,
      };
    case 1:
      return {
        x: props.$x,
        y: props.$y - props.$size / 2 + props.$size / 8,
      };
    case 2:
      return {
        x: 0,
        y: props.$y,
      };
    default:
      return { x: props.$x, y: props.$y };
  }
};

const motion = (props) => keyframes\`
  0% {
    top: \${props.$y}px;
    left: \${props.$x}px;
  }
  50%{
    top: \${animationLeftPositions(props).y}px;
    left: \${animationLeftPositions(props).x}px;
  }
  100% {
    top: \${props.$y}px;
    left: \${props.$x}px;
  }
\`;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) =>
    \`\${props.$size / 2 + props.$size / 8}\${props.$sizeUnit}\`};
\`;

const Ball = styled.div\`
  position: absolute;
  top: \${(props) => \`\${props.$y}\${props.$sizeUnit}\`};
  left: \${(props) => \`\${props.$x}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$size / 4}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 4}\${props.$sizeUnit}\`};
  border-radius: 50%;
  background-color: \${(props) => props.$color};
  animation: \${motion} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  &:nth-child(2) {
    animation-timing-function: cubic-bezier(1, 0, 0, 1);
    animation-duration: 1.5s;
  }
\`;

const SwapSpinner = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const balls = React.useMemo(() => {
    return Array.from({ length: BALLS_COUNT }, (_, i) => (
      <Ball
        key={i}
        $color={color}
        $size={size}
        $x={i * (size / 4 + size / 8)}
        $y={size / 2 - size / 8}
        $index={i}
        $sizeUnit={sizeUnit}
      />
    ));
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {balls}
    </Wrapper>
  );
};

export default SwapSpinner;
`;
