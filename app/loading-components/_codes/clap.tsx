export const CLAP_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BALLS_COUNT = 7;

const rotate = keyframes\`
  50% {
    transform: rotate(180deg) scale(1.125);
  }
  100%{
    transform: rotate(360deg);
  }
\`;

const move = (props) => keyframes\`
  0% {
    transform: translateX(\${props.$x}\${props.$sizeUnit}) translateY(\${props.$y}\${props.$sizeUnit}) scale(1.25);
  }
  5% {
    transform: translateX(\${props.$x}\${props.$sizeUnit}) translateY(\${props.$y}\${props.$sizeUnit}) scale(1.75);
  }
  50% {
    transform: translateX(\${props.$x}\${props.$sizeUnit}) translateY(\${props.$y}\${props.$sizeUnit}) scale(.25);
  }
  55% {
    background-color: \${props.$backColor};
    transform: translateX(\${props.$x}\${props.$sizeUnit}) translateY(\${props.$y}\${props.$sizeUnit}) scale(1);
  }
\`;

const Wrapper = styled.div\`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  animation: \${rotate} 1.5s linear infinite;
\`;

const Ball = styled.div\`
  position: absolute;
  top: \${(props) => \`\${props.$size / 2}\${props.$sizeUnit}\`};
  left: \${(props) => \`\${props.$size / 2}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$ballSize}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$ballSize}\${props.$sizeUnit}\`};
  border-radius: 50%;
  background-color: \${(props) => props.$frontColor};
  transform: translateX(\${(props) => \`\${props.$x}\${props.$sizeUnit}\`})
    translateY(\${(props) => \`\${props.$y}\${props.$sizeUnit}\`});
  animation: \${(props) => move(props)} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1)
    infinite;
  animation-delay: \${(props) => props.$index * 0.2}s;
\`;

const ClapSpinner = ({
  size = 40,
  frontColor = "#436bfc",
  backColor = "#77aaef",
  sizeUnit = "px",
}) => {
  const balls = React.useMemo(() => {
    const radius = size / 2;
    const ballSize = size / 5;
    const offset = ballSize / 2;
    const angle = 360 / BALLS_COUNT;

    return Array.from({ length: BALLS_COUNT }, (_, i) => {
      const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
      const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;
      return (
        <Ball
          key={i}
          $index={i}
          $frontColor={frontColor}
          $backColor={backColor}
          $ballSize={ballSize}
          $size={size}
          $sizeUnit={sizeUnit}
          $x={y}
          $y={x}
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

export default ClapSpinner;
`;
