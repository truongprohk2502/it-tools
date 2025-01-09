"use client";

import useMirrorStyles from "@/hooks/use-mirror-styles";
import { useRef } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const JwtTextarea: React.FC<Props> = ({ value, onChange }) => {
  const maskRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useMirrorStyles(textareaRef, maskRef);

  const getFormatJwtString = (jwtText: string) => {
    if (!jwtText.trim()) return jwtText;

    if (!jwtText.includes("."))
      return <span className="text-red-500">{jwtText}</span>;

    const firstDotIndex = jwtText.indexOf(".");
    const header = (
      <span className="text-red-500">{jwtText.slice(0, firstDotIndex)}</span>
    );

    const secondDotIndex = jwtText.indexOf(".", firstDotIndex + 1);

    const payload = (
      <span className="text-purple-500">
        {jwtText.slice(
          firstDotIndex + 1,
          secondDotIndex < 0 ? undefined : secondDotIndex,
        )}
      </span>
    );

    return (
      <>
        {header}
        <span className="text-black">.</span>
        {payload}
        {secondDotIndex >= 0 && (
          <>
            <span className="text-black">.</span>
            <span className="text-sky-500">
              {jwtText.slice(secondDotIndex + 1)}
            </span>
          </>
        )}
      </>
    );
  };

  return (
    <div className="relative flex-1 overflow-hidden rounded-md">
      <div
        ref={maskRef}
        className="absolute left-0 top-0 -z-10 h-full w-full rounded-md"
      >
        {getFormatJwtString(value)}
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        className="h-full w-full resize-none rounded-md border border-neutral-400 bg-transparent px-4 py-3 text-xl font-medium text-transparent caret-black outline-none focus:border-black focus:outline-none dark:border-neutral-600 dark:caret-white dark:focus:border-neutral-500"
      />
    </div>
  );
};

export default JwtTextarea;
