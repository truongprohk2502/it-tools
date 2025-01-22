"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  CommandLine,
  Terminal,
  type TerminalProps,
} from "@/components/ui-lib/terminal";
import { useState } from "react";
import { getNewCommand, terminalProperties, welcomeText } from "./constant";

const generateCode = (props: TerminalProps) => `
const [commands, setCommands] = useState<CommandLine[]>([]);

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
      text: \`Command '\${command}' not found\`,
      variant: "error",
    });
  }

  return newCommand;
};

const handleCommand = (command: string) => {
  if (command === "clear") {
    setCommands([]);
    return;
  }

  const newCommand = getNewCommand(command, terminalProps);
  setCommands((prevCommands) => [...prevCommands, newCommand]);
};

<Terminal
  welcome=\`${welcomeText}\`
  prompt="${props.prompt}"
  commands={commands}
  onCommand={handleCommand}
/>
`;

export default function TerminalPage() {
  const [commands, setCommands] = useState<CommandLine[]>([]);
  const [terminalProps, setTerminalProps] = useState<TerminalProps>({
    welcome: welcomeText,
    prompt: "it-tools $",
    commands: [],
  });

  const handleCommand = (command: string) => {
    if (command === "clear") {
      setCommands([]);
      return;
    }

    const newCommand = getNewCommand(command, terminalProps);
    setCommands((prevCommands) => [...prevCommands, newCommand]);
  };

  return (
    <div>
      <UIComponent title="Terminal" code={generateCode(terminalProps)}>
        <Terminal
          {...terminalProps}
          commands={commands}
          onCommand={handleCommand}
        />
      </UIComponent>
      <UIDocs<TerminalProps>
        fields={terminalProperties}
        fieldState={terminalProps}
        onChange={setTerminalProps}
      />
    </div>
  );
}
