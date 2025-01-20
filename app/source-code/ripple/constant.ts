export const rippleCssCode = `// style.css
span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}






`;

export const rippleComponentCode = `// ripple.component.tsx
import clsx from "clsx";
import { useCallback } from "react";
import "./style.css";

export interface RippleProps extends React.HTMLAttributes<HTMLDivElement> {
  rippleColor: string;
}

const Ripple: React.FC<RippleProps> = ({
  rippleColor,
  children,
  className,
  ...props
}) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      const btn = event.currentTarget as HTMLDivElement;

      const circle = document.createElement("span");
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const radius = diameter / 2;

      const rect = btn.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const l = x - radius;
      const t = y - radius;

      circle.style.width = circle.style.height = \`\${diameter}px\`;
      circle.style.left = \`\${l}px\`;
      circle.style.top = \`\${t}px\`;
      circle.style.backgroundColor = rippleColor;
      circle.classList.add("ripple");

      circle.addEventListener("animationend", circle.remove);

      const ripples = btn.getElementsByClassName("ripple");

      for (const ripple of ripples) {
        btn.removeChild(ripple);
      }

      btn.appendChild(circle);
    },
    [rippleColor],
  );

  const refCallback = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return;

      el.addEventListener("click", handleClick);
      return () => {
        el.removeEventListener("click", handleClick);
      };
    },
    [handleClick],
  );

  return (
    <div
      ref={refCallback}
      className={cn("relative w-fit overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Ripple;
`;
