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
import DialogSource from "@/app/source-code/dialog/dialog-source";
import DrawerSource from "@/app/source-code/drawer/drawer-source";
import DropdownSource from "@/app/source-code/dropdown/dropdown-source";
import GalleriaSource from "@/app/source-code/galleria/galleria-source";
import ImageDiffSource from "@/app/source-code/image-diff/image-diff-source";
import InputSource from "@/app/source-code/input/input-source";
import MobileMockupSource from "@/app/source-code/mobile-mockup/mobile-mockup-source";
import OtpInputSource from "@/app/source-code/otp-input/otp-input-source";
import PaginationSource from "@/app/source-code/pagination/pagination-source";
import ProgressSource from "@/app/source-code/progress/progress-source";
import RadioSource from "@/app/source-code/radio/radio-source";
import RatingSource from "@/app/source-code/rating/rating-source";
import RippleSource from "@/app/source-code/ripple/ripple-source";
import SkeletonSource from "@/app/source-code/skeleton/skeleton-source";
import SliderSource from "@/app/source-code/slider/slider-source";
import SortableListSource from "@/app/source-code/sortable-list/sortable-list-source";
import SpeedDialSource from "@/app/source-code/speed-dial/speed-dial-source";
import SpinnerSource from "@/app/source-code/spinner/spinner-source";
import StepsSource from "@/app/source-code/steps/steps-source";
import SwapButtonSource from "@/app/source-code/swap-button/swap-button-source";
import SwitchSource from "@/app/source-code/switch/switch-source";
import TableSource from "@/app/source-code/table/table-source";
import TabsSource from "@/app/source-code/tabs/tabs-source";
import TerminalSource from "@/app/source-code/terminal/terminal-source";
import TextareaSource from "@/app/source-code/textarea/textarea-source";
import ToastSource from "@/app/source-code/toast/toast-source";
import TooltipSource from "@/app/source-code/tooltip/tooltip-source";
import TreeViewSource from "@/app/source-code/tree-view/tree-view-source";
import WatermarkSource from "@/app/source-code/watermark/watermark-source";
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
import { Route } from "@/constants/routes";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { component } = useParams();

  const goToDedicatedPage = () => {
    window.location.reload();
  };

  const getSourceCode = () => {
    const path = "/" + component;
    switch (path) {
      case Route.UIAccordion:
        return <AccordionSource />;
      case Route.UIAngleSlider:
        return <AngleSliderSource />;
      case Route.UIAutocomplete:
        return <AutocompleteSource />;
      case Route.UIAvatar:
        return <AvatarSource />;
      case Route.UIBadge:
        return <BadgeSource />;
      case Route.UIBreadcrumb:
        return <BreadcrumbSource />;
      case Route.UIBrowserMockup:
        return <BrowserMockupSource />;
      case Route.UIButton:
        return <ButtonSource />;
      case Route.UICarousel:
        return <CarouselSource />;
      case Route.UICheckbox:
        return <CheckboxSource />;
      case Route.UIChip:
        return <ChipSource />;
      case Route.UICodeSnippet:
        return <CodeSnippetSource />;
      case Route.UIContextMenu:
        return <ContextMenuSource />;
      case Route.UICountdown:
        return <CountdownSource />;
      case Route.UIDatePicker:
        return <DatePickerSource />;
      case Route.UIDialog:
        return <DialogSource />;
      case Route.UIDrawer:
        return <DrawerSource />;
      case Route.UIDropdown:
        return <DropdownSource />;
      case Route.UIGalleria:
        return <GalleriaSource />;
      case Route.UIImageDiff:
        return <ImageDiffSource />;
      case Route.UIInput:
        return <InputSource />;
      case Route.UIMobileMockup:
        return <MobileMockupSource />;
      case Route.UIOtpInput:
        return <OtpInputSource />;
      case Route.UIPagination:
        return <PaginationSource />;
      case Route.UIProgress:
        return <ProgressSource />;
      case Route.UIRadio:
        return <RadioSource />;
      case Route.UIRating:
        return <RatingSource />;
      case Route.UIRipple:
        return <RippleSource />;
      case Route.UISkeleton:
        return <SkeletonSource />;
      case Route.UISlider:
        return <SliderSource />;
      case Route.UISortableList:
        return <SortableListSource />;
      case Route.UISpeedDial:
        return <SpeedDialSource />;
      case Route.UISpinner:
        return <SpinnerSource />;
      case Route.UISteps:
        return <StepsSource />;
      case Route.UISwapButton:
        return <SwapButtonSource />;
      case Route.UISwitch:
        return <SwitchSource />;
      case Route.UITable:
        return <TableSource />;
      case Route.UITabs:
        return <TabsSource />;
      case Route.UITerminal:
        return <TerminalSource />;
      case Route.UITextarea:
        return <TextareaSource />;
      case Route.UIToast:
        return <ToastSource />;
      case Route.UITooltip:
        return <TooltipSource />;
      case Route.UITreeView:
        return <TreeViewSource />;
      case Route.UIWatermark:
        return <WatermarkSource />;
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
