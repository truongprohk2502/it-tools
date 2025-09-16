export const JELLYFISH_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const RINGS_COUNT = 6;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
\`;

const motion = (props) => keyframes\`
  0% {
    transform: \${\`translateY(\${-props.$size / 5}\${props.$sizeUnit});\`};
  }
  50% {
    transform: \${\`translateY(\${props.$size / 4}\${props.$sizeUnit})\`};
  }
  100% {
    transform: \${\`translateY(\${-props.$size / 5}\${props.$sizeUnit})\`};
  }
\`;

const Ring = styled.div\`
  position: absolute;
  width: \${(props) =>
    \`\${props.$index * (props.$size / props.$countRings)}\${props.$sizeUnit}\`};
  height: \${(props) =>
    \`\${(props.$index * (props.$size / props.$countRings)) / 2}\${props.$sizeUnit}\`};
  border: 2px solid \${(props) => props.$color};
  border-radius: 50%;
  background-color: transparent;
  animation: \${motion} 2.5s ease infinite;
  animation-delay: \${(props) => props.$index * 100}ms;
\`;

const JellyfishSpinner = ({
  size = 60,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const rings = React.useMemo(() => {
    return Array.from({ length: RINGS_COUNT }, (_, i) => {
      return (
        <Ring
          key={i}
          $index={i}
          $color={color}
          $size={size}
          $countRings={RINGS_COUNT}
          $sizeUnit={sizeUnit}
        />
      );
    });
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {rings}
    </Wrapper>
  );
};

export default JellyfishSpinner;
`;
