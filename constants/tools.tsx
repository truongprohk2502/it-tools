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
import TextIcon from "@/assets/icons/text.icon";
import TextareaIcon from "@/assets/icons/textarea.icon";
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
        title: "Accordion",
        href: Route.UIAccordion,
        description: "React Accordion component with TailwindCSS",
        icon: AccordionIcon,
      },
      {
        title: "AngleSlider",
        href: Route.UIAngleSlider,
        description: "React AngleSlider component with TailwindCSS",
        icon: AngleSliderIcon,
      },
      {
        title: "Autocomplete",
        href: Route.UIAutocomplete,
        description: "React Autocomplete component with TailwindCSS",
        icon: AutocompleteIcon,
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
        title: "BrowserMockup",
        href: Route.UIBrowserMockup,
        description: "React BrowserMockup component with TailwindCSS",
        icon: BrowserMockupIcon,
      },
      {
        title: "Button",
        href: Route.UIButton,
        description: "React Button component with TailwindCSS",
        icon: ButtonIcon,
      },
      {
        title: "Carousel",
        href: Route.UICarousel,
        description: "React Carousel component with TailwindCSS",
        icon: CarouselIcon,
      },
      {
        title: "Checkbox",
        href: Route.UICheckbox,
        description: "React Checkbox component with TailwindCSS",
        icon: CheckboxIcon,
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
        title: "ContextMenu",
        href: Route.UIContextMenu,
        description: "React ContextMenu component with TailwindCSS",
        icon: ContextMenuIcon,
      },
      {
        title: "Countdown",
        href: Route.UICountdown,
        description: "React Countdown component with TailwindCSS",
        icon: CountdownIcon,
      },
      {
        title: "DatePicker",
        href: Route.UIDatePicker,
        description: "React DatePicker component with TailwindCSS",
        icon: DatePickerIcon,
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
        title: "Dropdown",
        href: Route.UIDropdown,
        description: "React Dropdown component with TailwindCSS",
        icon: DropdownIcon,
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
        title: "Input",
        href: Route.UIInput,
        description: "React Input component with TailwindCSS",
        icon: InputIcon,
      },
      {
        title: "OtpInput",
        href: Route.UIOtpInput,
        description: "React OtpInput component with TailwindCSS",
        icon: OtpInputIcon,
      },
      {
        title: "Pagination",
        href: Route.UIPagination,
        description: "React Pagination component with TailwindCSS",
        icon: PaginationIcon,
      },
      {
        title: "Progress",
        href: Route.UIProgress,
        description: "React Progress component with TailwindCSS",
        icon: ProgressIcon,
      },
      {
        title: "Radio",
        href: Route.UIRadio,
        description: "React Radio component with TailwindCSS",
        icon: RadioIcon,
      },
      {
        title: "Rating",
        href: Route.UIRating,
        description: "React Rating component with TailwindCSS",
        icon: RatingIcon,
      },
      {
        title: "Ripple",
        href: Route.UIRipple,
        description: "React Ripple component with TailwindCSS",
        icon: RippleIcon,
      },
      {
        title: "Slider",
        href: Route.UISlider,
        description: "React Slider component with TailwindCSS",
        icon: SliderIcon,
      },
      {
        title: "Textarea",
        href: Route.UITextarea,
        description: "React Textarea component with TailwindCSS",
        icon: TextareaIcon,
      },
      {
        title: "MobileMockup",
        href: Route.UIMobileMockup,
        description: "React MobileMockup component with TailwindCSS",
        icon: MobileMockupIcon,
      },
      {
        title: "Skeleton",
        href: Route.UISkeleton,
        description: "React Skeleton component with TailwindCSS",
        icon: SkeletonIcon,
      },
    ],
  },
];

export const tools = toolGroups.flatMap((group) => group.items);
