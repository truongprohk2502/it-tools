import type { UIField } from "@/app/(ui-libs)/_components/ui-docs";
import type { CommandLine, TerminalProps } from "@/components/ui-lib/terminal";

export const terminalProperties: UIField[] = [
  {
    name: "welcome",
    description: "Welcome message of Terminal",
    default: null,
    required: true,
    type: "textarea",
  },
  {
    name: "prompt",
    description: "Prompt text of Terminal",
    default: null,
    required: true,
    type: "string",
  },
  {
    name: "commands",
    description: "List of commands of Terminal",
    default: null,
    required: true,
    type: "none",
    typeLabel: "CommandLine[]",
  },
  {
    name: "className",
    description: "Wrapper class",
    default: null,
    required: false,
    type: "none",
  },
  {
    name: "onCommand",
    description: "Enter command event of Terminal",
    default: null,
    required: false,
    type: "none",
    typeLabel: "(command: string) => void",
  },
];

export const welcomeText = `Welcome to Terminal
	- Type 'date' to get the current date
	- Type 'random' to get a random number
	- Type 'print [text]' to print text
	- Type 'clear' to clear the terminal`;

export const getNewCommand = (
  command: string,
  terminalProps: TerminalProps,
) => {
  const id = Date.now().toString();

  const newCommand: CommandLine = {
    id,
    prompt: terminalProps.prompt,
    command,
    outputs: [],
  };

  if (command === "date") {
    newCommand.outputs.push({
      text: new Date().toString(),
      variant: "success",
    });
  } else if (command === "random") {
    newCommand.outputs.push({
      text: Math.floor(Math.random() * 10).toString(),
      variant: "success",
    });
  } else if (command.startsWith("print ")) {
    newCommand.outputs.push({
      text: command.replace("print ", ""),
      variant: "success",
    });
  } else {
    newCommand.outputs.push({
      text: `Command '${command}' not found`,
      variant: "error",
    });
  }

  return newCommand;
};
