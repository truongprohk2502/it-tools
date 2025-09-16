export const FLAG_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const PLANES_IN_LINE = 4;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
\`;

const wave = (props) => keyframes\`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(\${-props.$size / 5}\${props.$sizeUnit});
    opacity: 0.25;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
\`;

const Line = styled.div\`
  position: absolute;
  left: 0;
  top: 0;
  animation: \${wave} 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
  animation-delay: \${(props) => props.$index * 0.05}s;
\`;

const Plane = styled.div\`
  position: absolute;
  top: \${(props) => \`\${props.$y}\${props.$sizeUnit}\`};
  left: \${(props) => \`\${props.$x}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$size / 6}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 6}\${props.$sizeUnit}\`};
  background-color: \${(props) => props.$color};
\`;

const FlagSpinner = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const planes = React.useMemo(() => {
    return Array.from({ length: PLANES_IN_LINE }, (_, i) => {
      return (
        <Line key={i} $index={i} $size={size} $sizeUnit={sizeUnit}>
          {Array.from({ length: PLANES_IN_LINE }, (_, j) => (
            <Plane
              key={i + j.toString()}
              $color={color}
              $size={size}
              $x={i * (size / 6 + size / 9)}
              $y={j * (size / 6 + size / 9) + size / 10}
              $sizeUnit={sizeUnit}
            />
          ))}
        </Line>
      );
    });
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {planes}
    </Wrapper>
  );
};

export default FlagSpinner;
`;
