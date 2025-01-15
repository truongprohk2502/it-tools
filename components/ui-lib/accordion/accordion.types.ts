export type AccordionType = "light" | "bordered" | "splitted";
export type SelectMode = "single" | "multiple";

export interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export interface AccordionProps {
  variant?: AccordionType;
  selectMode?: SelectMode;
  className?: string;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
}
