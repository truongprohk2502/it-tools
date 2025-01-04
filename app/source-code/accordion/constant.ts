export const accordionComponentCode = `// accordion-component.tsx
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
`;

export const accordionItemComponentCode = `// accordion-item.tsx
import clsx from "clsx";
import { ChevronLeftIcon } from "lucide-react";
import { useContext, useEffect, useRef } from "react";
import { AccordionContext } from "./accordion-component";

interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<Props> = ({ id, title, children }) => {
  const { variant, openingItems, toggleItem } = useContext(AccordionContext);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const contentHeight = useRef<number>(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        contentHeight.current = entry.contentRect.height;
      });
    });
    observer.observe(contentRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  const opening = openingItems.includes(id);

  return (
    <div
      className={clsx("group", {
        "rounded-md border border-neutral-200 px-2 shadow-sm":
          variant === "splitted",
      })}
    >
      <div className="flex cursor-pointer py-2" onClick={() => toggleItem(id)}>
        <div className="mr-2 flex flex-1 text-lg font-medium">{title}</div>
        <ChevronLeftIcon
          className={clsx(
            "h-6 w-6 flex-shrink-0 transform text-neutral-700 duration-150",
            { "-rotate-90": opening },
          )}
        />
      </div>
      <div
        className={clsx(
          "transform overflow-hidden py-0 opacity-0 transition-all duration-300",
          { "py-2 opacity-100": opening },
        )}
        style={{
          height: opening ? \`\${contentHeight.current + 16}px\` : 0,
        }}
      >
        {children}
      </div>
      <div className="h-0">
        <div ref={contentRef} className="invisible py-2">
          {children}
        </div>
      </div>
      <div
        className={clsx(
          "h-[1px] w-full bg-neutral-200 group-last-of-type:hidden",
          { hidden: variant === "splitted" },
        )}
      />
    </div>
  );
};

export default AccordionItem;
`;
