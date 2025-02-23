"use client";

import SyntaxHighlighter from "@/components/shared/syntax-highlighter";
import { Button } from "@/components/ui/button";

interface Props {
  result: string;
  open: boolean;
  onToggle: () => void;
}

const SqlSolution: React.FC<Props> = ({ result, open, onToggle }) => {
  return (
    <>
      <Button
        variant="destructive"
        size="lg"
        className="mt-2 w-full"
        onClick={onToggle}
      >
        {open ? "Hide solution" : "Show solution"}
      </Button>
      {open && (
        <div className="mt-2 w-[18.4375rem]">
          <SyntaxHighlighter code={result} language="sql" />
        </div>
      )}
    </>
  );
};

export default SqlSolution;
