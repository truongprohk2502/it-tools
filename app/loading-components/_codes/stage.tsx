export const STAGE_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BALLS_COUNT = 3;

const motion = (props) => keyframes\`
  0% {
    top: \${props.$y}\${props.$sizeUnit};
    left: \${props.$x}\${props.$sizeUnit};
  }
  25% {
    top: \${props.$y}\${props.$sizeUnit};
    left: \${props.$x}\${props.$sizeUnit};
    opacity: 0;
}
  50% {
    top: \${props.$y + props.$size / 2}\${props.$sizeUnit};
    left: \${props.$x}\${props.$sizeUnit};
    opacity: 0;
  }
  100% {
    top: \${props.$y}\${props.$sizeUnit};
    left: \${props.$x}\${props.$sizeUnit};
    opacity: 1;
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
  width: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`};
  border-radius: 50%;
  background-color: \${(props) => props.$color};
  animation: \${motion} 1s ease-in-out infinite;
  animation-delay: \${(props) => props.$index * 0.2}s;
\`;

const StageSpinner = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const balls = React.useMemo(() => {
    return Array.from({ length: BALLS_COUNT }, (_, i) => (
      <Ball
        key={i}
        $index={i}
        $color={color}
        $size={size}
        $x={i * (size / 2.5)}
        $y={size / 2 - size / 10}
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

export default StageSpinner;
`;
