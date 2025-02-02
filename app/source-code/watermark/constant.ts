export const watermarkComponentCode = `// watermark.component.tsx
import clsx from "clsx";
import { useEffect, useRef } from "react";

export interface WatermarkProps {
  children: React.ReactNode;
  text: string;
  width: number;
  height: number;
  color?: string;
  className?: string;
}

const Watermark: React.FC<WatermarkProps> = ({
  text,
  width,
  height,
  color = "#000",
  children,
  className,
}) => {
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWatermark = () => {
      const container = watermarkRef.current!;

      const textCoords = [0, height - 20];
      const rotate = -20;

      const canvas = document.createElement("canvas");
      canvas.setAttribute("width", \`\${width}px\`);
      canvas.setAttribute("height", \`\${height}px\`);
      const ctx = canvas.getContext("2d")!;
      ctx.globalAlpha = 0.1;
      ctx.textAlign = "left";
      ctx.textBaseline = "bottom";
      ctx.font = "16px Arial";
      ctx.fillStyle = color;
      ctx.rotate((Math.PI / 180) * rotate);
      ctx.fillText(text, textCoords[0], textCoords[1]);

      const base64Url = canvas.toDataURL();

      const watermarkDiv =
        container.querySelector(".__wm") || document.createElement("div");
      const styleStr = \`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background-repeat: repeat;
        background-image: url('\${base64Url}')
      \`;
      watermarkDiv.setAttribute("style", styleStr);
      watermarkDiv.classList.add("__wm");

      if (!container.querySelector(".__wm")) {
        container.appendChild(watermarkDiv);
      }
    };

    updateWatermark();
  }, [text, color, width, height]);

  return (
    <div ref={watermarkRef} className={cn("relative", className)}>
      {children}
    </div>
  );
};

export default Watermark;
`;
