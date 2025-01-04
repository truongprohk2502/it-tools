export interface AccordionProps {
  variant: AccordionType;
  selectMode: "single" | "multiple";
  className: string;
  children?: string;
}
