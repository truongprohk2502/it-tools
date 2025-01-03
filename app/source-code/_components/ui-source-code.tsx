import SyntaxHighlighter from "@/components/shared/syntax-highlighter";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Step {
  title: string;
  description?: string;
  sourceCode: string;
}

interface Props {
  component: string;
  steps: Step[];
}

const UISourceCode: React.FC<Props> = ({ component, steps }) => {
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
          <code className="text-red-500">CVA (class-variance-authority)</code>
          is a utility for managing CSS class names based on various conditions.
        </li>
        <li>
          A tiny utility for constructing className strings conditionally using{" "}
          <code className="text-red-500">clsx</code>.
        </li>
      </ul>
      {steps.map((step, index) => (
        <div key={index}>
          <div className="mb-2 mt-3 font-semibold">{step.title}</div>
          <ScrollArea className="h-[30rem] w-full">
            <SyntaxHighlighter code={step.sourceCode} />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      ))}
    </div>
  );
};

export default UISourceCode;
