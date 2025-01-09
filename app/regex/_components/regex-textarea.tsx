"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";
import Editor from "react-simple-code-editor";

interface Props {
  regex: string;
  invalid: boolean;
  value: string;
  onChange: (val: string) => void;
}

const RegexTextarea: React.FC<Props> = ({
  regex,
  invalid,
  value,
  onChange,
}) => {
  const { theme } = useTheme();

  const highlightMatchedString = useCallback(
    (code: string) => {
      if (invalid || !regex) return code;

      const bgColor = theme === "light" ? "#93C5FD" : "#3689e5";

      try {
        const regParts = regex.match(/^\/(.*?)\/([gimsu]*)$/);
        const regexp = regParts
          ? new RegExp(regParts[1], regParts[2])
          : new RegExp(regex);

        const isGlobal = regParts?.[2]?.includes("g");

        if (isGlobal) {
          let highlightedCode = "";
          let index = 0;

          for (const match of Array.from(code.matchAll(regexp))) {
            const value = match[0];

            highlightedCode += code.slice(index, match.index);
            highlightedCode += `<span style="background-color:${bgColor}">${value}</span>`;

            index = match.index + value.length;
          }

          if (index < code.length) {
            highlightedCode += code.slice(index);
          }

          return highlightedCode;
        } else {
          const match = code.match(regexp);

          if (!match) return code;

          const value = match[0];
          const index = match.index || code.indexOf(value);

          return (
            code.slice(0, index) +
            `<span style="background-color:${bgColor}">${value}</span>` +
            code.slice(index + value.length)
          );
        }
      } catch {
        return code;
      }
    },
    [regex, invalid, theme],
  );

  return (
    <div className="relative">
      <Editor
        value={value}
        onValueChange={onChange}
        highlight={highlightMatchedString}
        padding={10}
        className="rounded-md border border-neutral-400"
        textareaClassName="rounded-md"
      />
    </div>
  );
};

export default RegexTextarea;
