import AccordionIcon from "@/assets/icons/accordion.icon";
import AngleSliderIcon from "@/assets/icons/angle-slider.icon";
import ApiIcon from "@/assets/icons/api.icon";
import AutocompleteIcon from "@/assets/icons/autocomplete.icon";
import AvatarIcon from "@/assets/icons/avatar.icon";
import BadgeIcon from "@/assets/icons/badge.icon";
import BreadcrumbIcon from "@/assets/icons/breadcrumb.icon";
import BrowserMockupIcon from "@/assets/icons/browser-mockup.icon";
import ButtonIcon from "@/assets/icons/button.icon";
import CarouselIcon from "@/assets/icons/carousel.icon";
import CheckboxIcon from "@/assets/icons/checkbox.icon";
import ChipIcon from "@/assets/icons/chip.icon";
import CodeSnippetIcon from "@/assets/icons/code-snippet.icon";
import ColorIcon from "@/assets/icons/color.icon";
import CompareIcon from "@/assets/icons/compare.icon";
import ContextMenuIcon from "@/assets/icons/context-menu.icon";
import CountdownIcon from "@/assets/icons/countdown.icon";
import DatePickerIcon from "@/assets/icons/date-picker.icon";
import DialogIcon from "@/assets/icons/dialog.icon";
import DrawerIcon from "@/assets/icons/drawer.icon";
import DropdownIcon from "@/assets/icons/dropdown.icon";
import GalleriaIcon from "@/assets/icons/galleria.icon";
import ImageCropIcon from "@/assets/icons/image-crop.icon";
import ImageDiffIcon from "@/assets/icons/image-diff.icon";
import InputIcon from "@/assets/icons/input.icon";
import JsonIcon from "@/assets/icons/json.icon";
import JwtIcon from "@/assets/icons/jwt.icon";
import MobileMockupIcon from "@/assets/icons/mobile-mockup.icon";
import NumberIcon from "@/assets/icons/number.icon";
import OtpInputIcon from "@/assets/icons/otp-input.icon";
import PaginationIcon from "@/assets/icons/pagination.icon";
import ProgressIcon from "@/assets/icons/progress.icon";
import QrIcon from "@/assets/icons/qr.icon";
import RadioIcon from "@/assets/icons/radio.icon";
import RatingIcon from "@/assets/icons/rating.icon";
import ReactIcon from "@/assets/icons/react.icon";
import RegexIcon from "@/assets/icons/regex.icon";
import RippleIcon from "@/assets/icons/ripple.icon";
import SkeletonIcon from "@/assets/icons/skeleton.icon";
import SliderIcon from "@/assets/icons/slider.icon";
import SortableListIcon from "@/assets/icons/sortable-list.icon";
import SpeedDialIcon from "@/assets/icons/speed-dial.icon";
import SpinnerIcon from "@/assets/icons/spinner.icon";
import StepsIcon from "@/assets/icons/steps.icon";
import SwapIcon from "@/assets/icons/swap.icon";
import SwitchIcon from "@/assets/icons/switch.icon";
import TableIcon from "@/assets/icons/table.icon";
import TabsIcon from "@/assets/icons/tabs.icon";
import TerminalIcon from "@/assets/icons/terminal.icon";
import TextIcon from "@/assets/icons/text.icon";
import TextareaIcon from "@/assets/icons/textarea.icon";
import ToastIcon from "@/assets/icons/toast.icon";
import TooltipIcon from "@/assets/icons/tooltip.icon";
import TreeViewIcon from "@/assets/icons/tree-view.icon";
import WatermarkIcon from "@/assets/icons/watermark.icon";
import WebviewIcon from "@/assets/icons/webview.icon";
import WheelIcon from "@/assets/icons/wheel.icon";
import { Route } from "./routes";

interface Tool {
  title: string;
  href: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface ToolGroup {
  title: string;
  items: Tool[];
}

export const toolGroups: ToolGroup[] = [
  {
    title: "Tools",
    items: [
      {
        title: "Compare Texts",
        href: Route.CompareTexts,
        description: "Compare texts to find the difference",
        icon: CompareIcon,
      },
      {
        title: "WebView Playground",
        href: Route.WebViewPlayground,
        description: "Simple webview with js, html, css",
        icon: WebviewIcon,
      },
      {
        title: "ReactJS Playground",
        href: Route.ReactPlayground,
        description: "Simple live preview ReactJS component",
        icon: ReactIcon,
      },
      {
        title: "Json Web Tokens",
        href: Route.JwtIO,
        description: "Decode and encode JWTs",
        icon: JwtIcon,
      },
      {
        title: "Regular Expressions",
        href: Route.Regex,
        description: "Learn, build and test Regex",
        icon: RegexIcon,
      },
      {
        title: "Image Crop",
        href: Route.ImageCrop,
        description: "Crop an image file in seconds",
        icon: ImageCropIcon,
      },
      {
        title: "Color Picker",
        href: Route.ColorPicker,
        description: "Pick color with various format",
        icon: ColorIcon,
      },
      {
        title: "QR Code",
        href: Route.GenerateQrCode,
        description: "Create and download QR Code",
        icon: QrIcon,
      },
      {
        title: "Generate Text",
        href: Route.GenerateText,
        description: "Generate texts with more languages",
        icon: TextIcon,
      },
      {
        title: "Generate API Response",
        href: Route.GenerateAPIResponse,
        description: "Generate fake JSON API Response",
        icon: ApiIcon,
      },
      {
        title: "JSON Formatter",
        href: Route.JsonFormatter,
        description: "Validate, format, convert and save JSON data",
        icon: JsonIcon,
      },
      {
        title: "Number Converter",
        href: Route.NumberConverter,
        description: "Number converters and conversions",
        icon: NumberIcon,
      },
      {
        title: "Random Wheel",
        href: Route.RandomWheel,
        description: "Random name picker",
        icon: WheelIcon,
      },
      // {
      //   title: "Markdown",
      //   href: Route.Markdown,
      //   description: "The markdown documents live preview",
      //   icon: MarkdownIcon,
      // },
    ],
  },
  {
    title: "UI Components",
    items: [
      {
        title: "Autocomplete",
        href: Route.UIAutocomplete,
        description: "React Autocomplete component with TailwindCSS",
        icon: AutocompleteIcon,
      },
      {
        title: "Input",
        href: Route.UIInput,
        description: "React Input component with TailwindCSS",
        icon: InputIcon,
      },
      {
        title: "Textarea",
        href: Route.UITextarea,
        description: "React Textarea component with TailwindCSS",
        icon: TextareaIcon,
      },
      {
        title: "Radio",
        href: Route.UIRadio,
        description: "React Radio component with TailwindCSS",
        icon: RadioIcon,
      },
      {
        title: "Checkbox",
        href: Route.UICheckbox,
        description: "React Checkbox component with TailwindCSS",
        icon: CheckboxIcon,
      },
      {
        title: "Switch",
        href: Route.UISwitch,
        description: "React Switch component with TailwindCSS",
        icon: SwitchIcon,
      },
      {
        title: "OtpInput",
        href: Route.UIOtpInput,
        description: "React OtpInput component with TailwindCSS",
        icon: OtpInputIcon,
      },
      {
        title: "DatePicker",
        href: Route.UIDatePicker,
        description: "React DatePicker component with TailwindCSS",
        icon: DatePickerIcon,
      },
      {
        title: "Slider",
        href: Route.UISlider,
        description: "React Slider component with TailwindCSS",
        icon: SliderIcon,
      },
      {
        title: "Dropdown",
        href: Route.UIDropdown,
        description: "React Dropdown component with TailwindCSS",
        icon: DropdownIcon,
      },
      {
        title: "ContextMenu",
        href: Route.UIContextMenu,
        description: "React ContextMenu component with TailwindCSS",
        icon: ContextMenuIcon,
      },
      {
        title: "AngleSlider",
        href: Route.UIAngleSlider,
        description: "React AngleSlider component with TailwindCSS",
        icon: AngleSliderIcon,
      },
      {
        title: "Rating",
        href: Route.UIRating,
        description: "React Rating component with TailwindCSS",
        icon: RatingIcon,
      },
      {
        title: "Avatar",
        href: Route.UIAvatar,
        description: "React Avatar component with TailwindCSS",
        icon: AvatarIcon,
      },
      {
        title: "Badge",
        href: Route.UIBadge,
        description: "React Badge component with TailwindCSS",
        icon: BadgeIcon,
      },
      {
        title: "Breadcrumb",
        href: Route.UIBreadcrumb,
        description: "React Breadcrumb component with TailwindCSS",
        icon: BreadcrumbIcon,
      },
      {
        title: "Button",
        href: Route.UIButton,
        description: "React Button component with TailwindCSS",
        icon: ButtonIcon,
      },
      {
        title: "SwapButton",
        href: Route.UISwapButton,
        description: "React SwapButton component with TailwindCSS",
        icon: SwapIcon,
      },
      {
        title: "Ripple",
        href: Route.UIRipple,
        description: "React Ripple component with TailwindCSS",
        icon: RippleIcon,
      },
      {
        title: "SpeedDial",
        href: Route.UISpeedDial,
        description: "React SpeedDial component with TailwindCSS",
        icon: SpeedDialIcon,
      },
      {
        title: "Chip",
        href: Route.UIChip,
        description: "React Chip component with TailwindCSS",
        icon: ChipIcon,
      },
      {
        title: "CodeSnippet",
        href: Route.UICodeSnippet,
        description: "React CodeSnippet component with TailwindCSS",
        icon: CodeSnippetIcon,
      },
      {
        title: "Countdown",
        href: Route.UICountdown,
        description: "React Countdown component with TailwindCSS",
        icon: CountdownIcon,
      },
      {
        title: "Pagination",
        href: Route.UIPagination,
        description: "React Pagination component with TailwindCSS",
        icon: PaginationIcon,
      },
      {
        title: "Tabs",
        href: Route.UITabs,
        description: "React Tabs component with TailwindCSS",
        icon: TabsIcon,
      },
      {
        title: "Tooltip",
        href: Route.UITooltip,
        description: "React Tooltip component with TailwindCSS",
        icon: TooltipIcon,
      },
      {
        title: "Accordion",
        href: Route.UIAccordion,
        description: "React Accordion component with TailwindCSS",
        icon: AccordionIcon,
      },
      {
        title: "Dialog",
        href: Route.UIDialog,
        description: "React Dialog component with TailwindCSS",
        icon: DialogIcon,
      },
      {
        title: "Drawer",
        href: Route.UIDrawer,
        description: "React Drawer component with TailwindCSS",
        icon: DrawerIcon,
      },
      {
        title: "Carousel",
        href: Route.UICarousel,
        description: "React Carousel component with TailwindCSS",
        icon: CarouselIcon,
      },
      {
        title: "Galleria",
        href: Route.UIGalleria,
        description: "React Galleria component with TailwindCSS",
        icon: GalleriaIcon,
      },
      {
        title: "ImageDiff",
        href: Route.UIImageDiff,
        description: "React ImageDiff component with TailwindCSS",
        icon: ImageDiffIcon,
      },
      {
        title: "Progress",
        href: Route.UIProgress,
        description: "React Progress component with TailwindCSS",
        icon: ProgressIcon,
      },
      {
        title: "Spinner",
        href: Route.UISpinner,
        description: "React Spinner component with TailwindCSS",
        icon: SpinnerIcon,
      },
      {
        title: "Terminal",
        href: Route.UITerminal,
        description: "React Terminal component with TailwindCSS",
        icon: TerminalIcon,
      },
      {
        title: "Table",
        href: Route.UITable,
        description: "React Table component with TailwindCSS",
        icon: TableIcon,
      },
      {
        title: "Toast",
        href: Route.UIToast,
        description: "React Toast component with TailwindCSS",
        icon: ToastIcon,
      },
      {
        title: "Steps",
        href: Route.UISteps,
        description: "React Steps component with TailwindCSS",
        icon: StepsIcon,
      },
      {
        title: "SortableList",
        href: Route.UISortableList,
        description: "React SortableList component with TailwindCSS",
        icon: SortableListIcon,
      },
      {
        title: "Skeleton",
        href: Route.UISkeleton,
        description: "React Skeleton component with TailwindCSS",
        icon: SkeletonIcon,
      },
      {
        title: "TreeView",
        href: Route.UITreeView,
        description: "React TreeView component with TailwindCSS",
        icon: TreeViewIcon,
      },
      {
        title: "Watermark",
        href: Route.UIWatermark,
        description: "React Watermark component with TailwindCSS",
        icon: WatermarkIcon,
      },
      {
        title: "BrowserMockup",
        href: Route.UIBrowserMockup,
        description: "React BrowserMockup component with TailwindCSS",
        icon: BrowserMockupIcon,
      },
      {
        title: "MobileMockup",
        href: Route.UIMobileMockup,
        description: "React MobileMockup component with TailwindCSS",
        icon: MobileMockupIcon,
      },
    ],
  },
];

export const tools = toolGroups.flatMap((group) => group.items);
