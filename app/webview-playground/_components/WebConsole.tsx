"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Console } from "console-feed";
import type { Variants } from "console-feed/lib/definitions/Component";
import { BanIcon } from "lucide-react";
import { useTheme } from "next-themes";
import type { Log } from "../types";

interface Props {
  data: Log[];
  onClear: () => void;
}

const WebConsole: React.FC<Props> = ({ data, onClear }) => {
  const { theme } = useTheme();

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="mb-2 text-2xl font-bold">Console</p>
        <BanIcon
          className="ml-2 h-5 w-5 cursor-pointer text-neutral-500 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-500"
          onClick={onClear}
        />
      </div>
      <ScrollArea className="h-80 overflow-auto rounded-md border border-neutral-400 py-2 font-semibold dark:border-neutral-600">
        <Console logs={data} variant={theme as Variants} />
      </ScrollArea>
    </div>
  );
};

export default WebConsole;
