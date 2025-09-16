export const PUSH_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BARS_COUNT = 10;

const motion = (props) => keyframes\`
  15% {
    transform: scaleY(1) translateX(10\${props.$sizeUnit});
  }
  90% {
    transform: scaleY(0.05) translateX(-5\${props.$sizeUnit});
  }
  100% {
    transform: scaleY(0.05) translateX(-5\${props.$sizeUnit});
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
  top: 0;
  left: \${(props) => \`\${props.$x}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`};
  height: 100%;
  transform: scaleY(0.05) translateX(-5px);
  background-color: \${(props) => props.$color};
  animation: \${motion} 1.25s ease-in-out infinite;
  animation-delay: \${(props) => props.$index * 0.15}s;
\`;

const PushSpinner = ({
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

export default PushSpinner;
`;
