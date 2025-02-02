export interface Tab {
  title: string;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  variant?: "solid" | "bordered" | "underlined" | "ghost";
  size?: "small" | "medium" | "large";
  radius?: "none" | "medium" | "full";
  disabled?: boolean;
  selectedIndex: number;
  className?: string;
  onChange: (index: number) => void;
}
