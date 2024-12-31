import { CircuitBoardIcon } from "lucide-react";

interface Tool {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface ToolGroup {
  title: string;
  items: Tool[];
}

export const toolGroups: ToolGroup[] = [
  {
    title: "UI Components",
    items: [
      {
        title: "Button",
        href: "/button",
        icon: <CircuitBoardIcon className="h-5 w-5" />,
      },
    ],
  },
];

export const tools = toolGroups.flatMap((group) => group.items);
