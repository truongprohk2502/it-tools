export const FLAPPER_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BALLS_COUNT = 7;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
\`;

const move = (props) => keyframes\`
  100% {
    opacity: 0;
    transform: translateX(\${props.$x}\${props.$sizeUnit})
    translateY(\${props.$y}\${props.$sizeUnit}) scale(1);
  }
\`;

const Ball = styled.div\`
  position: absolute;
  top: \${(props) => \`\${props.$size / 2}\${props.$sizeUnit}\`};
  left: \${(props) => \`\${props.$size / 2}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$ballSize}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$ballSize}\${props.$sizeUnit}\`};
  border-radius: 50%;
  background-color: \${(props) => props.$color};
  transform: translateX(\${(props) => \`\${props.$x}\${props.$sizeUnit}\`})
    translateY(\${(props) => \`\${props.$y}\${props.$sizeUnit}\`}) scale(0);
  animation: \${(props) => move(props)} 0.8s linear infinite;
  animation-delay: \${(props) => props.$index * 0.1}s;
\`;

const FlapperSpinner = ({
  size = 30,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const balls = React.useMemo(() => {
    const radius = size / 2;
    const ballSize = size / 1.5;
    const offset = ballSize / 2;
    const angle = 360 / BALLS_COUNT;

    return Array.from({ length: BALLS_COUNT }, (_, i) => {
      const x = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
      const y = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;

      return (
        <Ball
          key={i}
          $index={i}
          $x={x}
          $y={y}
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
      {balls}
    </Wrapper>
  );
};

export default FlapperSpinner;
`;
