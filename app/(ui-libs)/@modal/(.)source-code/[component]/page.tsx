"use client";

import AccordionSource from "@/app/source-code/accordion/accordion-source";
import AngleSliderSource from "@/app/source-code/angle-slider/angle-slider-source";
import AutocompleteSource from "@/app/source-code/autocomplete/autocomplete-source";
import AvatarSource from "@/app/source-code/avatar/avatar-source";
import BadgeSource from "@/app/source-code/badge/badge-source";
import BreadcrumbSource from "@/app/source-code/breadcrumb/breadcrumb-source";
import BrowserMockupSource from "@/app/source-code/browser-mockup/browser-mockup-source";
import ButtonSource from "@/app/source-code/button/button-source";
import CarouselSource from "@/app/source-code/carousel/carousel-source";
import CheckboxSource from "@/app/source-code/checkbox/checkbox-source";
import ChipSource from "@/app/source-code/chip/chip-source";
import CodeSnippetSource from "@/app/source-code/code-snippet/code-snippet-source";
import ContextMenuSource from "@/app/source-code/context-menu/context-menu-source";
import CountdownSource from "@/app/source-code/countdown/countdown-source";
import DatePickerSource from "@/app/source-code/date-picker/date-picker-source";
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
        return <AccordionSource />;
      case "angle-slider":
        return <AngleSliderSource />;
      case "autocomplete":
        return <AutocompleteSource />;
      case "avatar":
        return <AvatarSource />;
      case "badge":
        return <BadgeSource />;
      case "breadcrumb":
        return <BreadcrumbSource />;
      case "browser-mockup":
        return <BrowserMockupSource />;
      case "button":
        return <ButtonSource />;
      case "carousel":
        return <CarouselSource />;
      case "checkbox":
        return <CheckboxSource />;
      case "chip":
        return <ChipSource />;
      case "code-snippet":
        return <CodeSnippetSource />;
      case "context-menu":
        return <ContextMenuSource />;
      case "countdown":
        return <CountdownSource />;
      case "date-picker":
        return <DatePickerSource />;
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
