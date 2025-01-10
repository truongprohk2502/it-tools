"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useWindowSize from "@/hooks/use-window-size";
import * as Portal from "@radix-ui/react-portal";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

interface Props {
  option: string | null;
  onClose: () => void;
  onRemove: (val: string) => void;
}

const EndWheelDialog: React.FC<Props> = ({ option, onClose, onRemove }) => {
  const [isRunningConfetti, setIsRunningConfetti] = useState<boolean>(false);

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (option) setIsRunningConfetti(true);
  }, [option]);

  const handleClose = () => {
    setIsRunningConfetti(false);
    onClose();
  };

  return (
    <Dialog open={!!option} onOpenChange={handleClose}>
      <DialogContent className="w-[35rem] max-w-none max-[800px]:w-full">
        <DialogHeader>
          <DialogTitle>Congratulations!</DialogTitle>
        </DialogHeader>
        <p className="mb-6 mt-4 text-4xl font-medium">{option}</p>
        <DialogFooter>
          <Button
            onClick={() => {
              handleClose();
              onRemove(option as string);
            }}
          >
            Remove
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
      {isRunningConfetti && (
        <Portal.Root>
          <ReactConfetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            tweenDuration={6000}
            style={{ zIndex: 100 }}
            onConfettiComplete={() => setIsRunningConfetti(false)}
          />
        </Portal.Root>
      )}
    </Dialog>
  );
};

export default EndWheelDialog;
