export const CIRCLE_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes\`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
\`;

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  border: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`} solid
    \${(props) => props.$color};
  border-right-color: transparent;
  border-radius: 50%;
  animation: \${rotate} 0.75s linear infinite;
\`;

const CircleSpinner = ({
  size = 40,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  return <Wrapper $size={size} $color={color} $sizeUnit={sizeUnit} />;
};

export default CircleSpinner;
`;
