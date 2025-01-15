import { createContext } from "react";
import { AccordionType } from "./accordion.types";

interface ContextProps {
  variant: AccordionType;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  openingItems: string[];
  toggleItem: (key: string) => void;
}

export const AccordionContext = createContext<ContextProps>({
  variant: "light",
  openingItems: [],
  toggleItem: () => {},
});
