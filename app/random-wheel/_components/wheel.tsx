"use client";

import { BackgroundColor, Theme } from "@/constants/system";
import useSystemTheme from "@/hooks/use-system-theme";
import { getContrastTextColor } from "@/utils/get-colors";
import random from "lodash/random";
import { useEffect, useRef } from "react";

const fontFamily = "proxima-nova";
const size = 290;
const PI2 = Math.PI * 2;

interface Props {
  segments: string[];
  segColors: string[];
  onFinished: (winning: string) => void;
}

const Wheel: React.FC<Props> = ({ segments, segColors, onFinished }) => {
  const theme = useSystemTheme();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spinButtonRef = useRef<HTMLCanvasElement | null>(null);

  const centerX = 300;
  const centerY = 300;
  let angleCurrent = 0;
  let isSpinning = false;

  useEffect(() => {
    drawSpinButton();
  }, []);

  useEffect(() => {
    wheelDraw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segments, segColors, theme]);

  const drawSpinButton = () => {
    const ctx = spinButtonRef.current!.getContext("2d")!;

    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "1em " + fontFamily;

    // Draw a center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, PI2, false);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.fill();
    ctx.font = "bold 2em " + fontFamily;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Spin", centerX, centerY + 3);
    ctx.stroke();

    // Draw needle
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(centerX + 10, centerY - 40);
    ctx.lineTo(centerX - 10, centerY - 40);
    ctx.lineTo(centerX, centerY - 60);
    ctx.closePath();
    ctx.fill();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "transparent";
    ctx.font = "bold 1.5em " + fontFamily;
  };

  const wheelDraw = () => {
    clear();
    drawWheel();
  };

  const drawSegment = (key: number, lastAngle: number, angle: number) => {
    const ctx = canvasRef.current!.getContext("2d")!;
    const value = segments[key];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segColors[key];
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = getContrastTextColor(segColors[key]);
    ctx.font = "bold 1em " + fontFamily;
    ctx.fillText(value.slice(0, 21), size / 2 + 20, 0);
    ctx.restore();
  };

  const drawWheel = () => {
    const ctx = canvasRef.current!.getContext("2d")!;

    angleCurrent = 0;
    let lastAngle = angleCurrent;
    const len = segments.length;
    const shiftAngle = Math.PI / 2 + Math.PI / len;

    ctx.lineWidth = 1;
    ctx.strokeStyle = len > 1 ? "black" : "transparent";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "1em " + fontFamily;

    for (let i = 1; i <= len; i++) {
      const angle = PI2 * (i / len) + angleCurrent;
      drawSegment(i - 1, lastAngle - shiftAngle, angle - shiftAngle);
      lastAngle = angle;
    }

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, PI2, false);
    ctx.closePath();
    ctx.lineWidth = 25;
    const bgColorHex =
      theme === Theme.Dark ? BackgroundColor.Dark : BackgroundColor.Light;
    const bgOpacityHex = "b4";
    ctx.strokeStyle = bgColorHex + bgOpacityHex;
    ctx.stroke();
  };

  const clear = () => {
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.clearRect(0, 0, 600, 600);
  };

  const easingFunction = (t: number) => 1 - Math.pow(1 - t, 4);

  const spin = () => {
    if (isSpinning) return;
    isSpinning = true;
    const duration = 5000;
    let startTime = 0;
    const startAngle = 0;
    const defaultRound = 5;
    const len = segments.length;

    const randomPart = random(0, len - 1);

    const extraDegToPart = (len - randomPart) * (360 / len);

    const extraLimitDeg = 180 / len - 4;
    const randomExtraDeg = random(-extraLimitDeg, extraLimitDeg);

    const endAngle = defaultRound * 360 + extraDegToPart + randomExtraDeg;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = elapsedTime / duration;
      const rotation =
        startAngle + (endAngle - startAngle) * easingFunction(progress);

      canvasRef.current!.style.transform = `rotate(${rotation}deg)`;

      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          onFinished(segments[randomPart]);
          canvasRef.current!.style.transform = `rotate(0deg)`;
          isSpinning = false;
        }, 200);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="relative h-[600px] w-[600px]">
      <canvas ref={canvasRef} width="600" height="600" />
      <canvas
        ref={spinButtonRef}
        width="600"
        height="600"
        className="absolute inset-0 bg-transparent"
        onClick={spin}
      />
    </div>
  );
};
export default Wheel;
