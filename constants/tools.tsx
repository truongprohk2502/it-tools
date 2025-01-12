import AccordionIcon from "@/assets/icons/accordion.icon";
import AngleSliderIcon from "@/assets/icons/angle-slider.icon";
import ApiIcon from "@/assets/icons/api.icon";
import AutocompleteIcon from "@/assets/icons/autocomplete.icon";
import AvatarIcon from "@/assets/icons/avatar.icon";
import BadgeIcon from "@/assets/icons/badge.icon";
import ButtonIcon from "@/assets/icons/button.icon";
import ColorIcon from "@/assets/icons/color.icon";
import CompareIcon from "@/assets/icons/compare.icon";
import ImageCropIcon from "@/assets/icons/image-crop.icon";
import JsonIcon from "@/assets/icons/json.icon";
import JwtIcon from "@/assets/icons/jwt.icon";
import NumberIcon from "@/assets/icons/number.icon";
import QrIcon from "@/assets/icons/qr.icon";
import ReactIcon from "@/assets/icons/react.icon";
import RegexIcon from "@/assets/icons/regex.icon";
import TextIcon from "@/assets/icons/text.icon";
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
        title: "Button",
        href: Route.UIButton,
        description: "React Button component with TailwindCSS",
        icon: ButtonIcon,
      },
    ],
  },
];

export const tools = toolGroups.flatMap((group) => group.items);
