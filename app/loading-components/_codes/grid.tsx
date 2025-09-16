export const GRID_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BALLS_IN_LINE = 3;

const motion = (props) => keyframes\`
  0% {
    top: \${props.$y}\${props.$sizeUnit};
    left: \${props.$x}\${props.$sizeUnit};
  }
  50% {
    width: \${props.$size / 4}\${props.$sizeUnit};
    height: \${props.$size / 4}\${props.$sizeUnit};
    top: \${props.$size / 2 - props.$size / 8}\${props.$sizeUnit};
    left: \${props.$size / 2 - props.$size / 8}\${props.$sizeUnit};
  }
  100% {
    top: \${props.$y}\${props.$sizeUnit};
    left: \${props.$x}\${props.$sizeUnit};
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
  top: \${(props) => \`\${props.$y}\${props.$sizeUnit}\`};
  left: \${(props) => \`\${props.$x}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$size / 6}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 6}\${props.$sizeUnit}\`};
  border-radius: 50%;
  background-color: \${(props) => props.$color};
  animation: \${motion} 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
\`;

const GridSpinner = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const balls = React.useMemo(() => {
    return Array.from({ length: BALLS_IN_LINE * BALLS_IN_LINE }, (_, index) => {
      const i = index % BALLS_IN_LINE;
      const j = Math.floor(index / BALLS_IN_LINE);
      return (
        <Ball
          key={index}
          $color={color}
          $size={size}
          $x={i * (size / 3 + size / 12)}
          $y={j * (size / 3 + size / 12)}
          $sizeUnit={sizeUnit}
        />
      );
    });
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {balls}
    </Wrapper>
  );
};

export default GridSpinner;
`;
