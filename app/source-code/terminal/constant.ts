export const terminalTypesCode = `// terminal.types.ts
type Variant = "success" | "error" | "default";

export interface Output {
  text: string;
  variant: Variant;
}

export interface CommandLine {
  id: string;
  prompt: string;
  command: string;
  outputs: Output[];
}

export interface TerminalProps {
  welcome: string;
  prompt: string;
  commands: CommandLine[];
  className?: string;
  onCommand?: (command: string) => void;
}
`;

export const terminalComponentCode = `// terminal.component.tsx
import clsx from "clsx";
import { useRef } from "react";
import type { TerminalProps } from "./terminal.types";

const Terminal: React.FC<TerminalProps> = ({
  welcome,
  prompt,
  commands,
  className,
  onCommand,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const value = useRef<string>("");

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClick = () => {
    const input = inputRef.current;
    if (!input) return;
    input.focus();
    input.setSelectionRange(-1, -1);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    value.current = e.target.value;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onCommand?.(value.current);
      value.current = "";
      inputRef.current!.value = "";
      setTimeout(() => {
        scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
      });
    }
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "overflow-auto rounded-md bg-neutral-900 px-4 py-6 text-sm font-semibold",
        className,
      )}
      onClick={handleClick}
    >
      <p className="whitespace-pre text-white">{welcome}</p>
      {commands.map((item) => (
        <div key={item.id} className="mt-2">
          <div className="flex items-center text-white">
            <p className="text-neutral-400">{item.prompt}</p>
            <p className="ml-2 text-neutral-100">{item.command}</p>
          </div>
          {item.outputs.length > 0 && (
            <div className="mt-1">
              {item.outputs.map((output, index) => (
                <p
                  key={index}
                  className={cn("whitespace-pre", {
                    "text-lime-300": output.variant === "success",
                    "text-red-400": output.variant === "error",
                    "text-gray-400": output.variant === "default",
                  })}
                >
                  {output.text}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="mt-2">
        <div className="flex items-center text-white">
          <p className="text-neutral-400">{prompt}</p>
          <div className="ml-2 flex-1 text-neutral-100">
            <input
              ref={inputRef}
              type="text"
              className="w-full bg-transparent outline-none"
              onClick={stopPropagation}
              onChange={handleChangeText}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
`;
