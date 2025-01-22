"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  CommandLine,
  Terminal,
  type TerminalProps,
} from "@/components/ui-lib/terminal";
import { useState } from "react";
import {
  getDownloadProgress,
  getNewCommand,
  terminalProperties,
  welcomeText,
} from "./constant";

const generateCode = (props: TerminalProps) => `
const [commands, setCommands] = useState<CommandLine[]>([]);

const getProgressText = (value: number) => \`Downloading resources
\${Array.from({ length: value }).fill("=").join("")}>\${Array.from({
  length: 10 - value,
})
  .fill("_")
  .join("")} \${value}/10
\`;

const getDownloadProgress = (value: number): Output => {
  if (value === 10) return { text: "Downloaded resources", variant: "success" };
  return { text: getProgressText(value), variant: "default" };
};

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

const handleDownload = () => {
  const id = Date.now().toString();
  const newCommand: CommandLine = {
    id,
    prompt: terminalProps.prompt,
    command: "download",
    outputs: [],
  };

  let count = 0;
  const newOutput = getDownloadProgress(count);
  newCommand.outputs.push(newOutput);
  setCommands((prevCommands) => [...prevCommands, newCommand]);
  const interval = setInterval(() => {
    count++;
    setCommands((prevCommands) =>
      prevCommands.map((command) => {
        if (command.id === id) {
          const newOutput = getDownloadProgress(count);
          command.outputs = [newOutput];
        }
        return command;
      }),
    );
    if (count >= 10) clearInterval(interval);
  }, 150);
};

const handleCommand = (command: string) => {
  if (command === "clear") {
    setCommands([]);
    return;
  }

  if (command === "download") {
    handleDownload();
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

  const handleDownload = () => {
    const id = Date.now().toString();
    const newCommand: CommandLine = {
      id,
      prompt: terminalProps.prompt,
      command: "download",
      outputs: [],
    };

    let count = 0;
    const newOutput = getDownloadProgress(count);
    newCommand.outputs.push(newOutput);
    setCommands((prevCommands) => [...prevCommands, newCommand]);
    const interval = setInterval(() => {
      count++;
      setCommands((prevCommands) =>
        prevCommands.map((command) => {
          if (command.id === id) {
            const newOutput = getDownloadProgress(count);
            command.outputs = [newOutput];
          }
          return command;
        }),
      );
      if (count >= 10) clearInterval(interval);
    }, 150);
  };

  const handleCommand = (command: string) => {
    if (command === "clear") {
      setCommands([]);
      return;
    }

    if (command === "download") {
      handleDownload();
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
