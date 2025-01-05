import AccordionIcon from "@/assets/icons/accordion.icon";
import AngleSliderIcon from "@/assets/icons/angle-slider.icon";
import AutocompleteIcon from "@/assets/icons/autocomplete.icon";
import AvatarIcon from "@/assets/icons/avatar.icon";
import ButtonIcon from "@/assets/icons/button.icon";

interface Tool {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface ToolGroup {
  title: string;
  items: Tool[];
}

export const toolGroups: ToolGroup[] = [
  {
    title: "UI Components",
    items: [
      {
        title: "Accordion",
        href: "/accordion",
        icon: <AccordionIcon width={20} height={20} />,
      },
      {
        title: "AngleSlider",
        href: "/angle-slider",
        icon: <AngleSliderIcon width={20} height={20} />,
      },
      {
        title: "Autocomplete",
        href: "/autocomplete",
        icon: <AutocompleteIcon width={20} height={20} />,
      },
      {
        title: "Avatar",
        href: "/avatar",
        icon: <AvatarIcon width={20} height={20} />,
      },
      {
        title: "Button",
        href: "/button",
        icon: <ButtonIcon width={20} height={20} />,
      },
    ],
  },
];

export const tools = toolGroups.flatMap((group) => group.items);
