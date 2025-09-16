"use client";

import SyntaxHighlighter from "@/components/shared/syntax-highlighter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { copyToClipboard } from "@/utils/copy-to-clipboard";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source: string;
}

const SpinnerDialog: React.FC<Props> = ({ open, onOpenChange, source }) => {
  const handleCopyCode = () => {
    copyToClipboard(source);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] max-w-[68rem] px-0">
        <DialogHeader>
          <DialogTitle className="px-8">Source code</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ScrollArea className="px-2 pr-2">
          <SyntaxHighlighter code={source} showLineNumbers language="jsx" />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <DialogFooter className="px-8">
          <Button onClick={handleCopyCode}>Copy code</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SpinnerDialog;
