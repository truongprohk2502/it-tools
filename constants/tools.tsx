import AccordionIcon from "@/assets/icons/accordion.icon";
import AngleSliderIcon from "@/assets/icons/angle-slider.icon";
import AutocompleteIcon from "@/assets/icons/autocomplete.icon";
import AvatarIcon from "@/assets/icons/avatar.icon";
import ButtonIcon from "@/assets/icons/button.icon";
import JwtIcon from "@/assets/icons/jwt.icon";

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
        title: "Jwt IO",
        href: "/jwt-io",
        description: "Decode and encode JWTs",
        icon: JwtIcon,
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
