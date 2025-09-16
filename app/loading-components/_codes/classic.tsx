export const CLASSIC_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BARS_COUNT = 16;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
\`;

const fade = keyframes\`
  0% {
    opacity: 1
  }
  100% { 
    opacity: 0;
  }
\`;

const Bar = styled.div\`
  position: absolute;
  width: \${(props) => \`\${props.$size / 10}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 4}\${props.$sizeUnit}\`};
  background-color: \${(props) => props.$color};
  opacity: 0.05;
  transform: \${(props) => \`rotate(\${props.$rotate}deg)\`}
    \${(props) => \`translate(0, \${props.$translate}\${props.$sizeUnit})\`};
  animation: \${fade} \${(props) => props.$countBars * 0.06}s linear infinite;
  animation-delay: \${(props) => props.$index * 0.06}s;
\`;

const ClassicSpinner = ({
  size = 30,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const bars = useMemo(() => {
    return Array.from({ length: BARS_COUNT }, (_, i) => {
      const rotate = (360 / BARS_COUNT) * i;
      const translate = -(size / 2);

      return (
        <Bar
          key={i}
          $index={i}
          $countBars={BARS_COUNT}
          $color={color}
          $size={size}
          $rotate={rotate}
          $translate={translate}
          $sizeUnit={sizeUnit}
        />
      );
    });
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {bars}
    </Wrapper>
  );
};

export default ClassicSpinner;
`;
