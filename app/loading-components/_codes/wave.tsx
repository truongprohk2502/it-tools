export const WAVE_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BARS_COUNT = 10;

const motion = keyframes\`
  25% {
    transform: skewY(25deg);
  }
  50% {
    height: 100%;
    margin-top: 0;
  }
  75% {
    transform: skewY(-25deg);
  }
\`;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size * 2.5}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  overflow: hidden;
\`;

const Bar = styled.div\`
  position: absolute;
  top: \${(props) => \`\${props.$y + props.$size / 10}\${props.$sizeUnit}\`};
  left: \${(props) => \`\${props.$x}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 10}\${props.$sizeUnit}\`};
  margin-top: \${(props) =>
    \`\${props.$size - props.$size / 10}\${props.$sizeUnit}\`};
  transform: skewY(0deg);
  background-color: \${(props) => props.$color};
  animation: \${motion} 1.25s ease-in-out infinite;
  animation-delay: \${(props) => props.$index * 0.15}s;
\`;

const WaveSpinner = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const bars = React.useMemo(() => {
    return Array.from({ length: BARS_COUNT }, (_, i) => (
      <Bar
        key={i}
        $index={i}
        $color={color}
        $size={size}
        $x={i * (size / 5 + (size / 15 - size / 100))}
        $y={0}
        $sizeUnit={sizeUnit}
      />
    ));
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {bars}
    </Wrapper>
  );
};

export default WaveSpinner;
`;
