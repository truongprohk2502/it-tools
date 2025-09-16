export const WHISPER_SPINNER_CODE = `import React from "react";
import styled, { keyframes } from "styled-components";

const BALLS_IN_LINE = 3;

const spin = () => keyframes\`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
\`;

const Wrapper = styled.div\`
  position: relative;
  width: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size}\${props.$sizeUnit}\`};
  animation: \${spin} 10s infinite;
\`;

const motion = (props) => keyframes\`
  0% {
    transform: scale(1, 1);
    opacity: 1;
    background-color: \${props.$color};
  }
  100% {
    transform: scale(0, 0);
    opacity: 0;
    background-color: \${props.$color};
  }
\`;

const Ball = styled.div\`
  float: left;
  clear: right;
  margin: \${(props) => \`\${props.$size / 15}\${props.$sizeUnit}\`};
  width: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`};
  height: \${(props) => \`\${props.$size / 5}\${props.$sizeUnit}\`};
  border-radius: 2px;
  background-color: \${(props) => props.$color};
  animation-name: \${motion};
  animation-direction: alternate;
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  &:nth-child(1) {
    animation-delay: 200ms;
  }
  &:nth-child(2) {
    animation-delay: 400ms;
  }
  &:nth-child(3) {
    animation-delay: 600ms;
  }
  &:nth-child(4) {
    animation-delay: 400ms;
  }
  &:nth-child(5) {
    animation-delay: 600ms;
  }
  &:nth-child(6) {
    animation-delay: 800ms;
  }
  &:nth-child(7) {
    animation-delay: 600ms;
  }
  &:nth-child(8) {
    animation-delay: 800ms;
  }
  &:nth-child(9) {
    animation-delay: 1s;
  }
\`;

const WhisperSpinner = ({
  size = 50,
  color = "#436bfc",
  sizeUnit = "px",
}) => {
  const balls = React.useMemo(() => {
    return Array.from({ length: BALLS_IN_LINE * BALLS_IN_LINE }, (_, index) => {
      return (
        <Ball key={index} $color={color} $size={size} $sizeUnit={sizeUnit} />
      );
    });
  }, [size, color, sizeUnit]);

  return (
    <Wrapper $size={size} $sizeUnit={sizeUnit}>
      {balls}
    </Wrapper>
  );
};

export default WhisperSpinner;
`;
