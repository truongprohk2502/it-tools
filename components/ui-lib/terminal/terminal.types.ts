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
