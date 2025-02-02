import CopyButton from "@/components/shared/copy-button";
import SyntaxHighlighter from "@/components/shared/syntax-highlighter";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type DependencyLib = "react-portal" | "dayjs" | "tinycolor2" | "zustand";

interface Step {
  title: string;
  description?: string;
  sourceCode: string;
}

interface Props {
  component: string;
  steps: Step[];
  dependencies?: DependencyLib[];
}

const UISourceCode: React.FC<Props> = ({ component, steps, dependencies }) => {
  return (
    <div className="mx-auto flex max-w-[64rem] flex-col">
      <h1 className="text-3xl font-bold">{component}</h1>
      <p className="mt-4">
        This document outlines the steps to create{" "}
        <code className="text-red-500">{component}</code> component styled with
        <code className="text-red-500"></code>Tailwind CSS and using some npm
        dependency libraries.
      </p>
      <h2 className="mt-4 text-2xl font-semibold">Prerequisites</h2>
      <ul className="mt-2 list-inside list-disc">
        <li>
          <code className="text-red-500">Node.js</code> and{" "}
          <code className="text-red-500">npm</code> installed on your machine.
        </li>
        <li>
          <code className="text-red-500">Tailwind CSS</code> installed in your
          project.
        </li>
        <li>
          <code className="text-red-500">CVA(class-variance-authority) </code>
          is a utility for managing CSS class names based on various conditions.
        </li>
        <li>
          <code className="text-red-500">clsx</code> is a tiny utility for
          constructing className strings conditionally.
        </li>
        {dependencies?.includes("react-portal") && (
          <li>
            <code className="text-red-500">@radix-ui/react-portal </code>
            is a minimalist JavaScript library that renders a React subtree in a
            different part of the DOM.
          </li>
        )}
        {dependencies?.includes("dayjs") && (
          <li>
            <code className="text-red-500">dayjs </code>
            is a minimalist JavaScript library that parses, validates,
            manipulates, and displays dates and times.
          </li>
        )}
        {dependencies?.includes("tinycolor2") && (
          <li>
            <code className="text-red-500">tinycolor2 </code>
            is a lightweight library helping get contrast text color based on
            background.
          </li>
        )}
        {dependencies?.includes("zustand") && (
          <li>
            <code className="text-red-500">zustand </code>A small, fast, and
            scalable bear bones state management solution
          </li>
        )}
      </ul>
      {steps.map((step, index) => (
        <div key={index}>
          <div className="mb-2 mt-3 flex items-center">
            <span className="font-semibold">{step.title}</span>
            <CopyButton text={step.sourceCode} />
          </div>
          <ScrollArea className="h-[30rem] w-full">
            <SyntaxHighlighter code={step.sourceCode} showLineNumbers />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      ))}
    </div>
  );
};

export default UISourceCode;
