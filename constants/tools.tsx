import AccordionIcon from "@/assets/icons/accordion.icon";
import AngleSliderIcon from "@/assets/icons/angle-slider.icon";
import AutocompleteIcon from "@/assets/icons/autocomplete.icon";
import AvatarIcon from "@/assets/icons/avatar.icon";
import ButtonIcon from "@/assets/icons/button.icon";
import JwtIcon from "@/assets/icons/jwt.icon";
import RegexIcon from "@/assets/icons/regex.icon";
import WebviewIcon from "@/assets/icons/webview.icon";

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
        title: "WebView Playground",
        href: "/webview-playground",
        description: "Simple webview with js, html, css",
        icon: WebviewIcon,
      },
      {
        title: "Json Web Tokens",
        href: "/jwt-io",
        description: "Decode and encode JWTs",
        icon: JwtIcon,
      },
      {
        title: "Regular Expressions",
        href: "/regex",
        description: "Learn, build and test Regex",
        icon: RegexIcon,
      },
    ],
  },
  {
    title: "UI Components",
    items: [
      {
        title: "Accordion",
        href: "/accordion",
        description: "React Accordion component with TailwindCSS",
        icon: AccordionIcon,
      },
      {
        title: "AngleSlider",
        href: "/angle-slider",
        description: "React AngleSlider component with TailwindCSS",
        icon: AngleSliderIcon,
      },
      {
        title: "Autocomplete",
        href: "/autocomplete",
        description: "React Autocomplete component with TailwindCSS",
        icon: AutocompleteIcon,
      },
      {
        title: "Avatar",
        href: "/avatar",
        description: "React Avatar component with TailwindCSS",
        icon: AvatarIcon,
      },
      {
        title: "Button",
        href: "/button",
        description: "React Button component with TailwindCSS",
        icon: ButtonIcon,
      },
    ],
  },
];

export const tools = toolGroups.flatMap((group) => group.items);
