export const IMPULSE_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BALLS_COUNT = 3;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`};
\`;

const impulse = (props) => keyframes\`
  0% {
    background: \${props.$backColor};
    transform: scale(1);
    animation-timing-function: cubic-bezier(1,0,0.7,1);
  }
  40% {
    background: \${props.$frontColor};
    transform: scale(1.5);
    animation-timing-function: cubic-bezier(0.3,0,0,1);
  }
  72.5% {
    background:\${props.$backColor};
    transform: scale(1);
    animation-timing-function: linear;
  }
  100% {
    background: \${props.$backColor};
    transform: scale(1);
  }
\`;

const Ball = styled.div\`
  position: absolute;
  top: \${(props) => \`\${props.$y}\${props.$sizeUnit}\`};
  left: \${(props) => \`\${props.$x}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`};
  border-radius: 50%;
  background-color: \${(props) => props.$frontColor};
  animation: \${impulse} 1.25s linear infinite;
  animation-delay: \${(props) => props.$index * 0.125}s;
\`;

const ImpulseSpinner = ({
  size = 40,
  frontColor = "#436bfc",
  backColor = "#6d6e71",
  sizeUnit = "px",
}) => {
  const balls = React.useMemo(() => {
    return Array.from({ length: BALLS_COUNT }, (_, i) => {
      return (
        <Ball
          key={i}
          $index={i}
          $x={i * (size / 5 + size / 5)}
          $y={0}
          $frontColor={frontColor}
          $backColor={backColor}
          $size={size}
          $sizeUnit={sizeUnit}
        />
      );
    });
  }, [size, frontColor, backColor, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {balls}
    </Wrapper>
  );
};

export default ImpulseSpinner;
`;
