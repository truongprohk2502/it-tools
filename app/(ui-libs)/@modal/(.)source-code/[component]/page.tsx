"use client";

import AccordionSourcePage from "@/app/source-code/accordion/page";
import ButtonSourcePage from "@/app/source-code/button/page";
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
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { component } = useParams();

  const goToDedicatedPage = () => {
    window.location.reload();
  };

  const getSourceCode = () => {
    switch (component) {
      case "accordion":
        return <AccordionSourcePage />;
      case "button":
        return <ButtonSourcePage />;
      default:
        return null;
    }
  };

  const source = getSourceCode();

  return (
    <Dialog open onOpenChange={router.back}>
      <DialogContent className="h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] max-w-[68rem] px-0">
        <DialogHeader>
          <DialogTitle className="px-8">Source code</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ScrollArea className="px-2 pr-2">
          {source}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <DialogFooter className="px-8">
          <Button onClick={goToDedicatedPage}>Open fullscreen page</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
