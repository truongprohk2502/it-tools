import clsx from "clsx";
import { createContext, useState } from "react";

type AccordionType = "light" | "bordered" | "splitted";

interface ContextProps {
  variant: AccordionType;
  openingItems: string[];
  toggleItem: (key: string) => void;
}

export const AccordionContext = createContext<ContextProps>({
  variant: "light",
  openingItems: [],
  toggleItem: () => {},
});

interface Props {
  variant?: AccordionType;
  selectMode?: "single" | "multiple";
  className?: string;
  children: React.ReactNode;
}

const Accordion: React.FC<Props> = ({
  variant = "light",
  selectMode = "single",
  className,
  children,
}) => {
  const [openingItems, setOpeningItems] = useState<string[]>([]);

  const toggleItem = (key: string) => {
    if (selectMode === "single") {
      if (openingItems.includes(key)) setOpeningItems([]);
      else setOpeningItems([key]);
    } else {
      if (openingItems.includes(key))
        setOpeningItems(openingItems.filter((item) => item !== key));
      else setOpeningItems([...openingItems, key]);
    }
  };

  return (
    <AccordionContext.Provider value={{ variant, openingItems, toggleItem }}>
      <div
        className={clsx(
          {
            "rounded-lg border border-neutral-200 px-4 py-2 shadow-sm":
              variant === "bordered",
            "grid grid-cols-1 gap-2": variant === "splitted",
          },
          className,
        )}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
